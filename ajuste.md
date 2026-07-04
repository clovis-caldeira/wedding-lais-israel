Bloco 1 — Na conta MP do noivo                                                                                                               
                                                                                                                                               
  1. Login: o noivo acessa https://www.mercadopago.com.br com a conta dele                                                                     
  2. Painel de desenvolvedores: vai em https://www.mercadopago.com.br/developers/panel/app                                                     
  3. Criar aplicação: clica em "Criar aplicação"                                                                                               
    - Nome: algo tipo Casamento Laís & Israel                                                                                                  
    - Modelo de integração: Pagamentos online (ou Checkout Pro)                                                                                
    - Produto: Checkout Pro
  4. Pegar o Access Token de produção:
    - Dentro da app → menu lateral "Credenciais de produção"
    - Copia o valor de Access Token (começa com APP_USR-...)
    - ⚠️  Guarda com cuidado — é a "senha" da conta pra cobrar
  5. Configurar Webhook:
    - Menu lateral "Webhooks" → Configurar notificações
    - Aba Webhooks
    - URL de produção:
    https://script.google.com/macros/s/AKfycbz7s9Y1A7HmVCEiNSd0hDwrEclrm1jL4DWiRXzgyyeC0OpuyibK93AUylgD3GuoEP6U/exec?source=mp_webhook
    - Eventos: marca Pagamentos ✅
    - Salva (copia a assinatura secreta por precaução)

  Bloco 2 — No Apps Script

  Só uma linha muda. No topo do script, substitui o valor de MP_ACCESS_TOKEN:

  var MP_ACCESS_TOKEN = "APP_USR-NOVO_TOKEN_DO_NOIVO_AQUI";

  Depois:

  1. Salvar (Ctrl+S)
  2. Implantar → Gerenciar implantações → ✏️  → Nova versão → Implantar

  Bloco 3 — Teste obrigatório

  1. Site → Teste de Pagamento R$1 → preenche nome + WhatsApp → paga PIX
  2. O PIX deve chegar agora na conta do noivo (o noivo confere em https://www.mercadopago.com.br/activities)
  3. Em 1-2 min a planilha vira Pago

  Observações importantes

  - Pagamentos anteriores continuam na conta antiga. Só os novos (após a troca) vão pra conta do noivo
  - Preferences geradas antes da troca apontam pra conta antiga no checkout — quem abrir um link antigo ainda paga na conta antiga. Como a
  geração é dinâmica por clique, basta o convidado abrir o site depois da mudança pra gerar uma preference nova
  - Não precisa mexer no front-end (main.js, index.html) — a URL do Apps Script continua a mesma
  - Conta do noivo precisa estar verificada no MP (documento validado) pra receber valores mais altos. Se for conta nova, ele pode precisar
  validar CPF/identidade primeiro

  Me avisa quando tiver o Access Token novo em mãos que te acompanho na troca.

---

## Chá de Panela — setup no Apps Script + planilha

### 1) Criar a aba "Presentes Escolhidos" na mesma planilha

Cabeçalho na linha 1, exatamente nessa ordem:

| Data | Produto ID | Produto | Categoria | Nome |
|---|---|---|---|---|

Não precisa cadastrar produtos numa aba separada — a lista fica em
`wedding/js/cha-panela.js` (constante `CHA_ITEMS`, IDs 1 a 101). Se
quiser adicionar itens depois, é só acrescentar no fim do array com um
ID novo (nunca reutilizar ID de item já reservado).

### 2) Colar este snippet no Apps Script (mesmo arquivo do MP)

O front chama `action: 'cha_list_reservas'` (retorna IDs já reservados)
e `action: 'cha_reservar'` (grava a reserva com trava anti-corrida).

```javascript
// === CHÁ DE PANELA ===
var CHA_SHEET_NAME = 'Presentes Escolhidos';

function chaListReservas() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CHA_SHEET_NAME);
  if (!sheet) return { status: 'ok', reservados: [] };
  var last = sheet.getLastRow();
  if (last < 2) return { status: 'ok', reservados: [] };
  var ids = sheet.getRange(2, 2, last - 1, 1).getValues()
    .map(function(r) { return Number(r[0]); })
    .filter(function(n) { return !isNaN(n); });
  return { status: 'ok', reservados: ids };
}

function chaReservar(payload) {
  var produtoId = Number(payload.produtoId);
  var nome      = String(payload.nome || '').trim();
  var produto   = String(payload.produto || '').trim();
  var categoria = String(payload.categoria || '').trim();

  if (!produtoId || !nome) {
    return { status: 'error', message: 'produtoId e nome são obrigatórios.' };
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(15000); // 15s
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(CHA_SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CHA_SHEET_NAME);
      sheet.appendRow(['Data', 'Produto ID', 'Produto', 'Categoria', 'Nome']);
    }
    var last = sheet.getLastRow();
    if (last >= 2) {
      var existentes = sheet.getRange(2, 2, last - 1, 1).getValues();
      for (var i = 0; i < existentes.length; i++) {
        if (Number(existentes[i][0]) === produtoId) {
          return { status: 'conflict', conflict: true, message: 'Presente já reservado.' };
        }
      }
    }
    sheet.appendRow([new Date(), produtoId, produto, categoria, nome]);
    return { status: 'ok', success: true };
  } catch (err) {
    return { status: 'error', message: String(err) };
  } finally {
    lock.releaseLock();
  }
}
```

### 3) Rotear as novas actions no `doPost`

Dentro do `doPost` existente, logo antes do fallback, adicione:

```javascript
if (payload.action === 'cha_list_reservas') {
  return ContentService.createTextOutput(JSON.stringify(chaListReservas()))
    .setMimeType(ContentService.MimeType.JSON);
}
if (payload.action === 'cha_reservar') {
  return ContentService.createTextOutput(JSON.stringify(chaReservar(payload)))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 4) Republicar

`Implantar → Gerenciar implantações → ✏️ → Nova versão → Implantar`.
A URL do webhook continua a mesma — o front já aponta para ela.

### 5) Teste rápido

1. Abrir `cha-panela.html` no site.
2. Escolher um item, colocar um nome, confirmar.
3. Conferir a nova linha na aba "Presentes Escolhidos".
4. Tentar reservar o mesmo item de novo → deve aparecer a mensagem
   "Este presente acabou de ser escolhido".
