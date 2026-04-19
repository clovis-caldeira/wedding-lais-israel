# 💍 Laís & Israel — Site de Casamento

## Estrutura

```
wedding/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── main.js         # JavaScript (countdown, galeria, modal PIX)
└── assets/
    ├── photo1.jpg       # Fotos do casal
    ├── photo2.jpg
    └── ...
```

## Seções

1. **Hero** — Nomes, frase, data e countdown regressivo
2. **História** — Timeline com os marcos do relacionamento
3. **Galeria** — Grid com lightbox (13 fotos)
4. **Padrinhos** — Cards com abas (madrinhas / padrinhos)
5. **Local** — Endereço, horário e mapa embutido
6. **Presentes** — Lista com modal PIX + Cartão
7. **RSVP** — Confirmação via WhatsApp
8. **Footer** — Citação bíblica

## Personalizar

### Dados dos noivos
Edite `index.html` e `js/main.js`:
- **Data do casamento**: `new Date('2026-10-04T16:00:00')` em `main.js`
- **Chave PIX**: campo `pix` no array `presentes[]` em `main.js`
- **WhatsApp RSVP**: link no botão `btn-whatsapp` em `index.html`
- **Endereço**: seção `#local` em `index.html`

### Fotos
Substitua os arquivos em `assets/` mantendo os mesmos nomes (`photo1.jpg` ... `photo13.jpg`).

## Deploy — AWS S3 + CloudFront

```bash
# 1. Criar bucket
aws s3 mb s3://lais-israel-wedding

# 2. Ativar website estático
aws s3 website s3://lais-israel-wedding \
  --index-document index.html \
  --error-document index.html

# 3. Upload
aws s3 sync . s3://lais-israel-wedding \
  --acl public-read \
  --cache-control "max-age=86400"

# 4. Distribuição CloudFront
aws cloudfront create-distribution \
  --origin-domain-name lais-israel-wedding.s3-website-sa-east-1.amazonaws.com
```

## Tecnologias
- HTML5 semântico
- CSS3 puro (variáveis, grid, animações)
- JavaScript vanilla
- Google Fonts (Cormorant Garamond, Jost)
- Zero dependências externas
- Mobile-first responsivo

---
*Feito com amor ♡*
"# wedding-lais-israel" 
