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