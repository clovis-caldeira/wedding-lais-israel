/* ============================================
   LAÍS & ISRAEL — Wedding JS
   ============================================ */

// === COUNTDOWN ===
function updateCountdown() {
  const wedding = new Date('2026-10-04T16:00:00');
  const now = new Date();
  const diff = wedding - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-min').textContent = '00';
    document.getElementById('cd-sec').textContent = '00';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(3, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-min').textContent   = String(mins).padStart(2, '0');
  document.getElementById('cd-sec').textContent   = String(secs).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


// === PARTICLES ===
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-10px';
    p.style.width = (Math.random() * 3 + 1) + 'px';
    p.style.height = p.style.width;
    p.style.animationDuration = (Math.random() * 12 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
}

initParticles();


// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top
  const btn = document.getElementById('backTop');
  if (window.scrollY > 500) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});


// === MOBILE MENU ===
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// === SCROLL REVEAL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children if it's a grid
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  observer.observe(el);
});


// === BACK TO TOP ===
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// === PADRINHOS TABS ===
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    document.getElementById('madrinhas').classList.add('hidden');
    document.getElementById('padrinhos-list').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');
  });
});


// === PRESENTES DATA ===
// Imagens curadas do Unsplash (URLs estáveis com IDs específicos).
// Para usar foto própria: troque a URL por "assets/presentes/seu-arquivo.jpg".
const IMG = (id) => `https://images.unsplash.com/photo-${id}?w=800&q=80&auto=format&fit=crop`;
const PIX_KEY = '11972892128';

const presentes = [
  // === TESTE ===
  { emoji:'🧪', name:'Teste de Pagamento', desc:'Presente de teste para validar o checkout do Mercado Pago. Remover após validação.', value:1, categoria:'teste', pix:PIX_KEY },

  // === COZINHA & GOURMET (14) ===
  { emoji:'🍳', img:IMG('1584990347193-6bebebfeaeee'), name:'Jogo de Panelas 7 peças', desc:'Conjunto de panelas antiaderentes de alta resistência, ideais para o novo lar.', value:650, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'☕', img:IMG('1531937465322-9909ce13f8ca'), name:'Cafeteira Expresso', desc:'Máquina de café expresso automática com moedor integrado e vaporizador de leite.', value:890, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'️', img:IMG('1620818309896-df4306ec95d8'), name:'Jogo de Pratos Porcelana 20 pç', desc:'Aparelho de jantar em porcelana branca, bordas delicadas, 20 peças.', value:480, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🥂', img:IMG('1498429152472-9a433d9ddf3b'), name:'Jogo de Taças de Cristal', desc:'12 taças em cristal boêmio: vinho tinto, branco e champagne.', value:420, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🍟', img:IMG('1774074645537-f72f70d40d12'), name:'Air Fryer 5 Litros', desc:'Fritadeira elétrica sem óleo, capacidade familiar e painel digital.', value:550, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🥤', img:IMG('1622818426197-d54f85b88690'), name:'Liquidificador Alta Potência', desc:'1200W, jarra de vidro, lâminas de titânio. Para sucos, vitaminas e sopas.', value:320, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🎂', img:IMG('1577495917765-9497a0de7caa'), name:'Batedeira Planetária', desc:'Batedeira planetária profissional com tigela em inox de 4,5L.', value:780, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🍴', img:IMG('1771830933605-ffbae3e3d1b5'), name:'Jogo de Talheres 24 pç', desc:'Talheres em aço inox espelhado, serve 6 pessoas.', value:380, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'♨️', img:IMG('1452415005154-c06158558480'), name:'Cafeteira Italiana Moka', desc:'Cafeteira italiana em alumínio polido, 6 xícaras. Café intenso estilo europeu.', value:180, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🥄', img:IMG('1547483370-bdd86d60c667'), name:'Kit Utensílios de Silicone', desc:'Conjunto de 10 utensílios em silicone atóxico, não risca panelas.', value:150, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🔪', img:IMG('1577398628388-516477602b3b'), name:'Jogo de Facas Profissional', desc:'6 facas em aço inox alemão com suporte de madeira nobre.', value:420, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🪵', img:IMG('1666013942797-9daa4b8b3b4f'), name:'Tábuas de Corte (trio)', desc:'Trio de tábuas em madeira nobre (bambu, teca e oliveira).', value:140, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🥪', img:IMG('1677511084683-0eba66ebaa7c'), name:'Sanduicheira / Grill', desc:'Grill elétrico com placas antiaderentes removíveis. Perfeito pra domingos em casa.', value:240, categoria:'cozinha', pix:PIX_KEY },
  { emoji:'🧀', img:IMG('1765099270990-d102ae590524'), name:'Kit Fondue Premium', desc:'Aparelho de fondue com rechaud, 6 garfinhos e panela de cerâmica.', value:260, categoria:'cozinha', pix:PIX_KEY },

  // === CAMA & BANHO (15) ===
  { emoji:'🛏️', img:IMG('1776763255122-3d35e32aee64'), name:'Jogo de Cama Queen 500 fios', desc:'100% algodão egípcio. Inclui lençol, fronhas e capa de edredom.', value:380, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🛁', img:IMG('1760722974657-f64bce2f9cc5'), name:'Jogo de Toalhas Premium 8 pç', desc:'Toalhas de banho, rosto e piso em algodão felpudo de alta gramatura.', value:310, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🌙', img:IMG('1698746044370-4ea50c59c009'), name:'Edredom Dupla Face Queen', desc:'Edredom reversível, microfibra ultramacia, ideal pro inverno.', value:450, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'😴', img:IMG('1685122121697-f4515ea401b0'), name:'Par de Travesseiros Ortopédicos', desc:'Travesseiros em memory foam, suporte cervical, capa 100% algodão.', value:280, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🧖', img:IMG('1704428381445-dc61b037cfd2'), name:'Par de Roupões de Banho', desc:'Roupões felpudos estilo hotelaria, 100% algodão. Tamanhos M e G.', value:360, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🧣', img:IMG('1558100157-649578c19398'), name:'Manta Decorativa para Sofá', desc:'Manta em tricô chunky, fio grosso, ideal pra compor o sofá.', value:180, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🛌', img:IMG('1617233209513-7f6803109623'), name:'Colcha de Alto Gramatura', desc:'Colcha matelassê queen, acolchoada, acabamento premium.', value:520, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'👑', img:IMG('1731336250970-dc942b5e0746'), name:'Jogo de Cama King 500 fios', desc:'Para quem quer espaço de sobra. 100% algodão egípcio, 4 peças.', value:460, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🚿', img:IMG('1687526360728-f1af24aac201'), name:'Kit Tapetes de Banheiro (3 pç)', desc:'Trio de tapetes antiderrapantes, algodão felpudo, secagem rápida.', value:140, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🛡️', img:IMG('1763478958711-dd84b33cfe16'), name:'Protetor de Colchão Queen', desc:'Capa impermeável, hipoalergênica, 100% respirável.', value:170, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🤗', img:IMG('1596462874563-f47b23e233f0'), name:'Travesseiro de Corpo', desc:'Body pillow 1,40m, fibra siliconada, capa removível.', value:240, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🧴', img:IMG('1639298108944-76a403a7c38d'), name:'Conjunto Toalhas de Rosto (8 pç)', desc:'Kit 8 toalhas de rosto em algodão egípcio, várias cores neutras.', value:180, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'✨', img:IMG('1645654731316-a350fdcf3bae'), name:'Jogo de Fronhas de Cetim', desc:'4 fronhas de cetim puro. Cuidam do cabelo e da pele enquanto você dorme.', value:150, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'🪶', img:IMG('1605189549971-305d135c8269'), name:'Manta Peseira de Cama', desc:'Peseira queen, tecido macio e textura em alto relevo, toque aconchegante.', value:220, categoria:'cama-banho', pix:PIX_KEY },
  { emoji:'💆', img:IMG('1737094661981-baad6b211852'), name:'Par Almofadas Ortopédicas', desc:'Travesseiros cervicais com viscoelástico. Descanso merecido.', value:190, categoria:'cama-banho', pix:PIX_KEY },

  // === DECORAÇÃO (15) ===
  { emoji:'🛋️', img:IMG('1660491632743-3ff570ed27ac'), name:'Almofadas Decorativas (kit 4)', desc:'Quatro almofadas em tecido premium veludo, composição harmônica.', value:280, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪴', img:IMG('1592150621744-aca64f48394a'), name:'Kit Plantas de Interior', desc:'Curadoria de 5 plantas ornamentais com vasos e substrato.', value:190, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🔆', img:IMG('1673939859210-23d8444237ff'), name:'Luminária de Piso Minimalista', desc:'Luminária em metal dourado com cúpula em linho natural.', value:420, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🖼️', img:IMG('1771287490586-356754be24dc'), name:'Quadro Decorativo (trio)', desc:'Trio de quadros emoldurados, arte minimalista, pronto pra parede.', value:280, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪞', img:IMG('1619378396315-8803137a81ca'), name:'Espelho Redondo Dourado', desc:'Espelho grande com moldura em metal dourado, estilo clássico contemporâneo.', value:360, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🕯️', img:IMG('1572726729207-a78d6feb18d7'), name:'Velas Aromáticas Premium (kit)', desc:'Trio de velas aromáticas em cera vegetal, fragrâncias sofisticadas.', value:150, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🌸', img:IMG('1660853142045-a74bc7d4e07b'), name:'Difusor de Ambiente Kit', desc:'Difusor por varetas + refil, aromas importados. Ambiente acolhedor.', value:120, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪄', img:IMG('1534889156217-d643df14f14a'), name:'Tapete Decorativo Sala 2x2,5m', desc:'Tapete em fibra natural, design geométrico, traz calor pra sala.', value:680, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🏺', img:IMG('1631125915902-d8abe9225ff2'), name:'Vasos Cerâmica (trio)', desc:'Trio de vasos artesanais em cerâmica fosca, tamanhos variados.', value:230, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪟', img:IMG('1688732324812-9c67f0a35b4b'), name:'Cortinas Linho Natural (par)', desc:'Par de cortinas em linho premium, 2,80m altura, filtra luz suave.', value:450, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'💡', img:IMG('1611668190893-5131136df0a8'), name:'Par de Abajures Cabeceira', desc:'Dupla de abajures em cerâmica, cúpula linho, luz amarela quente.', value:320, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🖼️', img:IMG('1554907984-15263bfd63bd'), name:'Kit Porta-retratos & Molduras', desc:'8 porta-retratos em madeira e metal, montagem mural.', value:180, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🕰️', img:IMG('1602162786736-1575a5b1be76'), name:'Relógio de Parede Design', desc:'Relógio silencioso em madeira e metal, estilo minimalista escandinavo.', value:220, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪨', img:IMG('1772459125358-e587337c4a92'), name:'Bandeja Decorativa Mármore', desc:'Bandeja em mármore com alças douradas, perfeita pra sala ou banheiro.', value:160, categoria:'decoracao', pix:PIX_KEY },
  { emoji:'🪔', img:IMG('1583182363039-59eac8609ab2'), name:'Kit Incensos & Incensário', desc:'Incensário em cerâmica + 50 incensos de fragrâncias orientais.', value:90, categoria:'decoracao', pix:PIX_KEY },

  // === LUA DE MEL (15) ===
  { emoji:'✈️', img:IMG('1594937113195-27f8b9046013'), name:'Contribuição Passagem', desc:'Cada aporte nos aproxima do destino. Obrigado por embarcar junto!', value:500, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🏨', img:IMG('1611892440504-42a792e24d32'), name:'Diária em Hotel 5 estrelas', desc:'Patrocine uma noite em hotel de luxo no destino dos sonhos.', value:900, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🍝', img:IMG('1548428938-b1063c60f386'), name:'Jantar Romântico', desc:'Reserva em restaurante à beira-mar. Vista, vinho e muito amor.', value:450, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🗺️', img:IMG('1660304798975-8d854d154dd2'), name:'City Tour Guiado', desc:'Passeio com guia local explorando cultura, gastronomia e paisagens.', value:280, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'💆', img:IMG('1698276231906-fe0a99903799'), name:'Dia de Spa do Casal', desc:'Massagem, hidroterapia e relaxamento. Uma pausa que o casal merece.', value:650, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'⛵', img:IMG('1697494894663-1d5e026c1b5d'), name:'Passeio de Barco Pôr do Sol', desc:'Sunset a bordo, taça de espumante em mãos. Memória eterna.', value:380, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'💑', img:IMG('1696841212541-449ca29397cc'), name:'Massagem Relaxante (casal)', desc:'Sessão de massagem lado a lado em ambiente aromático.', value:320, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🚖', img:IMG('1580273916550-e323be2ae537'), name:'Traslado VIP Aeroporto', desc:'Transfer executivo aeroporto-hotel com motorista bilíngue.', value:200, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🚁', img:IMG('1567384029258-b9459c319fcd'), name:'Passeio de Helicóptero', desc:'Sobrevoo turístico no destino. Vista aérea inesquecível.', value:1200, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'👑', img:IMG('1776761363365-ad83248b93df'), name:'Upgrade para Suíte Master', desc:'Contribua pro upgrade da suíte: banheira, varanda e vista privilegiada.', value:750, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🤿', img:IMG('1544551763-46a013bb70d5'), name:'Mergulho de Cilindro', desc:'Batismo de mergulho pra dois: corais, peixes e memória marinha.', value:580, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🍇', img:IMG('1761489179352-0aaebb4665dc'), name:'Degustação de Vinhos', desc:'Visita guiada em vinícola com harmonização e seleção de rótulos.', value:340, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'☕', img:IMG('1641924676578-ed2792eb24de'), name:'Café da Manhã na Cama', desc:'Room service completo pra começar o dia de lua de mel sem pressa.', value:180, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'🏖️', img:IMG('1768194494962-c290f006fe31'), name:'Day Use em Resort', desc:'Um dia completo em resort all-inclusive: piscina, praia e refeições.', value:520, categoria:'lua-mel', pix:PIX_KEY },
  { emoji:'📸', img:IMG('1599325442714-822ad240956f'), name:'Ensaio Fotográfico no Destino', desc:'Sessão de fotos profissional nos cenários da lua de mel.', value:850, categoria:'lua-mel', pix:PIX_KEY },
];

const CATEGORIAS = [
  { id: 'todos',      label: 'Todos' },
  { id: 'cozinha',    label: 'Cozinha & Gourmet' },
  { id: 'cama-banho', label: 'Cama & Banho' },
  { id: 'decoracao',  label: 'Decoração' },
  { id: 'lua-mel',    label: 'Lua de Mel' }
];

let filtroAtivo = 'todos';

function renderPresentesFiltros() {
  const container = document.getElementById('presentesFiltros');
  if (!container) return;
  container.innerHTML = CATEGORIAS.map(c => `
    <button class="cat-btn ${filtroAtivo === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>
  `).join('');
  container.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtroAtivo = btn.dataset.cat;
      renderPresentesFiltros();
      renderPresentes();
      const section = document.getElementById('presentes');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

let currentPage = 1;
const ITEMS_PER_PAGE = 12;

function renderPresentes() {
  const grid = document.getElementById('presentesGrid');
  const lista = filtroAtivo === 'todos'
    ? presentes
    : presentes.filter(p => p.categoria === filtroAtivo);

  currentPage = 1;

  if (!lista.length) {
    grid.innerHTML = '<p class="presentes-empty">Nenhum presente nessa categoria ainda. Escolha outra 💛</p>';
    // Remove pagination if exists
    const existingPagination = document.querySelector('.presentes-pagination');
    if (existingPagination) existingPagination.remove();
    return;
  }

  // Render only current page (12 items)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedList = lista.slice(startIdx, endIdx);

  const USE_IMAGES = true;
  grid.innerHTML = paginatedList.map(p => {
    const globalIdx = presentes.indexOf(p);
    const fallback = `<div class="presente-img-fallback">${p.emoji || '🎁'}</div>`;
    const media = (USE_IMAGES && p.img)
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" />
         <div class="presente-img-fallback hidden">${p.emoji || '🎁'}</div>`
      : fallback;
    return `
      <div class="presente-card reveal">
        <div class="presente-img">${media}</div>
        <div class="presente-body">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
          <div class="presente-footer">
            <span class="presente-price">R$ ${p.value.toLocaleString('pt-BR')}</span>
            <button class="btn-presente" onclick="openModal(${globalIdx})">Presentear</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe new cards
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
    observer.observe(el);
  });

  // Render pagination
  const totalPages = Math.ceil(lista.length / ITEMS_PER_PAGE);
  if (totalPages > 1) {
    let paginationHtml = '<div class="presentes-pagination">';
    
    if (currentPage > 1) {
      paginationHtml += `<button class="btn-page-prev" onclick="goToPresentePage(${currentPage - 1}, '${filtroAtivo}')">← Anterior</button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        paginationHtml += `<span class="page-num active">${i}</span>`;
      } else {
        paginationHtml += `<button class="page-num" onclick="goToPresentePage(${i}, '${filtroAtivo}')">${i}</button>`;
      }
    }
    
    if (currentPage < totalPages) {
      paginationHtml += `<button class="btn-page-next" onclick="goToPresentePage(${currentPage + 1}, '${filtroAtivo}')">Próxima →</button>`;
    }
    
    paginationHtml += '</div>';
    
    // Remove existing pagination if any
    const existingPagination = document.querySelector('.presentes-pagination');
    if (existingPagination) existingPagination.remove();
    
    grid.insertAdjacentHTML('afterend', paginationHtml);
  } else {
    // Remove pagination if only 1 page
    const existingPagination = document.querySelector('.presentes-pagination');
    if (existingPagination) existingPagination.remove();
  }
}

renderPresentesFiltros();
renderPresentes();

function goToPresentePage(page, category) {
  currentPage = page;
  filtroAtivo = category || filtroAtivo;
  renderPresentes();
  const section = document.getElementById('presentes');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


// === MODAL PRESENTES (Mercado Pago) ===
const modal      = document.getElementById('pixModal');
const closeModal = document.getElementById('closeModal');
const btnMP      = document.getElementById('btnMercadoPago');
const btnPix     = document.getElementById('btnPix');
const mpFallback = document.getElementById('mpFallback');

const MP_BTN_LABELS = {
  credit_card: '💳 Pagar com Cartão de Crédito (Mercado Pago) →'
};
const pixBox     = document.getElementById('pixBox');
const pixKeyEl   = document.getElementById('pixKey');
const btnPixWhats = document.getElementById('btnPixWhats');
const buyerNameEl  = document.getElementById('buyerName');
const buyerWhatsEl = document.getElementById('buyerWhats');

let currentGift = null;

function maskWhats(value) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2)  return d.length ? `(${d}` : '';
  if (d.length <= 6)  return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
}

buyerWhatsEl.addEventListener('input', e => {
  e.target.value = maskWhats(e.target.value);
  e.target.classList.remove('invalid');
});
buyerNameEl.addEventListener('input', e => e.target.classList.remove('invalid'));

function prefillBuyerFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (saved.length && !buyerNameEl.value) {
      const g = saved[0];
      buyerNameEl.value = [g.nome, g.sobrenome].filter(Boolean).join(' ').trim();
    }
  } catch {}
}

function validateBuyer() {
  const buyerName  = buyerNameEl.value.trim();
  const buyerWhats = buyerWhatsEl.value.trim();
  const whatsDigits = buyerWhats.replace(/\D/g, '');

  let hasError = false;
  if (buyerName.length < 3) { buyerNameEl.classList.add('invalid'); hasError = true; }
  if (whatsDigits.length < 10 || whatsDigits.length > 11) { buyerWhatsEl.classList.add('invalid'); hasError = true; }
  if (hasError) {
    showMpError('Preencha seu nome e um WhatsApp válido antes de continuar.');
    return null;
  }

  return { buyerName, whatsDigits };
}

function openModal(index) {
  const p = presentes[index];
  currentGift = { ...p, index };

  document.getElementById('modalEmoji').textContent = p.emoji;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalPrice').textContent = 'R$ ' + p.value.toLocaleString('pt-BR');

  // reset estados
  btnMP.classList.remove('loading', 'hidden');
  btnMP.textContent = MP_BTN_LABELS.credit_card;
  pixBox.classList.add('hidden');
  pixKeyEl.textContent = p.pix || PIX_KEY;
  btnPixWhats.href = 'https://wa.me/5511916376717';
  mpFallback.classList.add('hidden');
  removeMpError();
  buyerNameEl.classList.remove('invalid');
  buyerWhatsEl.classList.remove('invalid');
  prefillBuyerFromStorage();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', closeModalFn);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModalFn();
});

function closeModalFn() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentGift = null;
}

function removeMpError() {
  const prev = modal.querySelector('.mp-error');
  if (prev) prev.remove();
}

function showMpError(msg) {
  removeMpError();
  const el = document.createElement('p');
  el.className = 'mp-error';
  el.textContent = msg;
  btnMP.insertAdjacentElement('afterend', el);
}

async function startMercadoPagoCheckout(btn, paymentMethod) {
  if (!currentGift) return;

  const buyer = validateBuyer();
  if (!buyer) return;

  if (!SHEETS_WEBAPP_URL) {
    mpFallback.classList.remove('hidden');
    return;
  }

  btn.classList.add('loading');
  btn.textContent = 'Gerando link seguro...';
  removeMpError();

  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'mp_checkout',
        paymentMethod, // 'credit_card' | 'pix'
        gift: {
          name:  currentGift.name,
          desc:  currentGift.desc,
          value: currentGift.value,
          emoji: currentGift.emoji
        },
        buyer: {
          name:    buyer.buyerName,
          whatsapp: buyer.whatsDigits
        }
      })
    });
    const data = await res.json();

    if (data.status === 'ok' && data.init_point) {
      btn.textContent = 'Abrindo Mercado Pago...';
      window.location.href = data.init_point;
    } else {
      console.error('MP erro detalhado:', data);
      throw new Error(data.message || 'Resposta inesperada do servidor.');
    }
  } catch (err) {
    btn.classList.remove('loading');
    btn.textContent = 'Tentar novamente';
    showMpError('Erro: ' + err.message);
    console.error(err);
  }
}

btnMP.addEventListener('click', e => {
  e.preventDefault();
  startMercadoPagoCheckout(btnMP, 'credit_card');
});

btnPix.addEventListener('click', e => {
  e.preventDefault();
  if (!currentGift) return;

  const buyer = validateBuyer();
  if (!buyer) return;

  const pixKey = currentGift.pix || PIX_KEY;
  const value = Number(currentGift.value || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const waText = `Olá! Fiz um PIX referente ao presente "${currentGift.name}" no valor de R$ ${value}.\n\nNome: ${buyer.buyerName}\nWhatsApp: ${buyer.whatsDigits}`;

  pixKeyEl.textContent = pixKey;
  btnPixWhats.href = `https://wa.me/5511916376717?text=${encodeURIComponent(waText)}`;
  pixBox.classList.remove('hidden');
  mpFallback.classList.add('hidden');
  removeMpError();
});

// Copy PIX key — bloco antigo removido, mantém guard abaixo
const _legacyCopyPix = document.getElementById('copyPix');
if (_legacyCopyPix) _legacyCopyPix.addEventListener('click', () => {
  const key = (document.getElementById('pixKey') || {}).textContent || '';
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('copyPix');
    btn.textContent = '✓ Copiado!';
    btn.style.background = '#25D366';
    btn.style.color = '#fff';
    btn.style.borderColor = '#25D366';
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
});

// ESC to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModalFn();
    closeLightbox();
  }
});


// === LIGHTBOX ===
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbCap    = document.getElementById('lbCaption');
let   currentIndex = 0;

const galleryData = [
  { src: 'assets/photo1.jpg',  caption: 'Laís & Israel — Save the Date' },
  { src: 'assets/photo10.jpg', caption: 'O momento do pedido' },
  { src: 'assets/photo3.jpg',  caption: 'Save the Date — estilo jornal' },
  { src: 'assets/photo4.jpg',  caption: 'Amor em cada detalhe' },
  { src: 'assets/photo5.jpg',  caption: 'Juntos para sempre' },
  { src: 'assets/photo6.jpg',  caption: 'Sorrindo de amor' },
  { src: 'assets/photo7.jpg',  caption: 'De mãos dadas' },
  { src: 'assets/photo8.jpg',  caption: 'Noivos apaixonados' },
  { src: 'assets/photo9.jpg',  caption: 'Um beijo eterno' },
  { src: 'assets/photo11.jpg', caption: 'Alegria e cumplicidade' },
  { src: 'assets/photo12.jpg', caption: 'Noiva e noivo' },
  { src: 'assets/photo13.jpg', caption: 'Caminhando juntos' },
];

document.querySelectorAll('.gal-item').forEach(item => {
  item.addEventListener('click', () => {
    const idx = parseInt(item.dataset.index);
    openLightbox(idx);
  });
});

function openLightbox(idx) {
  currentIndex = idx;
  const data = galleryData[idx];
  lbImg.src = data.src;
  lbCap.textContent = data.caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.getElementById('lbPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  const data = galleryData[currentIndex];
  lbImg.src = data.src;
  lbCap.textContent = data.caption;
});

document.getElementById('lbNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryData.length;
  const data = galleryData[currentIndex];
  lbImg.src = data.src;
  lbCap.textContent = data.caption;
});

// Swipe support for lightbox
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) document.getElementById('lbNext').click();
    else document.getElementById('lbPrev').click();
  }
});


// === LISTA DE PRESENÇA ===
const VINCULOS = [
  'Família',
  'Parentes',
  'Amigos',
  'Amigos da Igreja',
  'Padrinhos',
  'Madrinha'
];

const STORAGE_KEY = 'laisIsrael_presenca';

// URL do Google Apps Script (Web App) — cole aqui depois do deploy
// Enquanto estiver vazio, os dados ficam só no localStorage.
const SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbz7s9Y1A7HmVCEiNSd0hDwrEclrm1jL4DWiRXzgyyeC0OpuyibK93AUylgD3GuoEP6U/exec';

async function sendToSheets(guests) {
  if (!SHEETS_WEBAPP_URL) return { ok: false, skipped: true };
  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        guests
      })
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok && data.status !== 'error', data };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

const presencaList     = document.getElementById('presencaList');
const presencaForm     = document.getElementById('presencaForm');
const btnAddGuest      = document.getElementById('btnAddGuest');
const presencaFeedback = document.getElementById('presencaFeedback');
const presencaSaved    = document.getElementById('presencaSaved');

function createGuestCard(data = {}) {
  const card = document.createElement('div');
  card.className = 'guest-card';
  card.innerHTML = `
    <div class="guest-field field-nome">
      <label>Nome</label>
      <input type="text" name="nome" placeholder="Ex: Maria" value="${data.nome || ''}" required />
    </div>
    <div class="guest-field field-sobrenome">
      <label>Sobrenome</label>
      <input type="text" name="sobrenome" placeholder="Ex: Silva" value="${data.sobrenome || ''}" required />
    </div>
    <div class="guest-field field-idade">
      <label>Idade</label>
      <input type="number" name="idade" min="0" max="120" placeholder="30" value="${data.idade || ''}" required />
    </div>
    <div class="guest-field field-vinculo">
      <label>Vínculo</label>
      <select name="vinculo" required>
        <option value="" disabled ${data.vinculo ? '' : 'selected'}>Selecione...</option>
        ${VINCULOS.map(v => `<option value="${v}" ${data.vinculo === v ? 'selected' : ''}>${v}</option>`).join('')}
      </select>
    </div>
    <button type="button" class="btn-remove-guest" aria-label="Remover pessoa" title="Remover">✕</button>
  `;

  card.querySelector('.btn-remove-guest').addEventListener('click', () => {
    card.style.animation = 'guestFadeIn 0.25s var(--ease) reverse';
    setTimeout(() => {
      card.remove();
      if (!presencaList.children.length) addGuestCard();
    }, 200);
  });

  return card;
}

function addGuestCard(data, focus = false) {
  const card = createGuestCard(data);
  presencaList.appendChild(card);
  if (focus) {
    const firstInput = card.querySelector('input[name="nome"]');
    if (firstInput) firstInput.focus({ preventScroll: true });
  }
}

function readGuestsFromForm() {
  const guests = [];
  presencaList.querySelectorAll('.guest-card').forEach(card => {
    guests.push({
      nome:      card.querySelector('[name="nome"]').value.trim(),
      sobrenome: card.querySelector('[name="sobrenome"]').value.trim(),
      idade:     card.querySelector('[name="idade"]').value.trim(),
      vinculo:   card.querySelector('[name="vinculo"]').value
    });
  });
  return guests;
}

function loadSavedGuests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveGuests(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderSavedGuests() {
  const list = loadSavedGuests();
  if (!list.length) { presencaSaved.innerHTML = ''; return; }

  presencaSaved.innerHTML = `
    <h3 class="saved-title">Presenças confirmadas</h3>
    <ul class="saved-list">
      ${list.map(g => `
        <li>
          <span>${g.nome} ${g.sobrenome} <small style="color:var(--text-lt)">· ${g.idade} anos</small></span>
          <span class="vinculo-tag">${g.vinculo}</span>
        </li>
      `).join('')}
    </ul>
    <button type="button" class="saved-clear" id="savedClear">Limpar lista</button>
  `;

  document.getElementById('savedClear').addEventListener('click', () => {
    if (confirm('Deseja remover todas as presenças já confirmadas?')) {
      localStorage.removeItem(STORAGE_KEY);
      renderSavedGuests();
    }
  });
}

function showFeedback(msg, isError = false) {
  presencaFeedback.textContent = msg;
  presencaFeedback.classList.toggle('error', isError);
}

btnAddGuest.addEventListener('click', () => addGuestCard(undefined, true));

presencaForm.addEventListener('submit', async e => {
  e.preventDefault();
  const guests = readGuestsFromForm();

  if (!guests.length) {
    showFeedback('Adicione ao menos uma pessoa.', true);
    return;
  }

  const invalid = guests.find(g => !g.nome || !g.sobrenome || !g.idade || !g.vinculo);
  if (invalid) {
    showFeedback('Preencha todos os campos de cada pessoa.', true);
    return;
  }

  const submitBtn = presencaForm.querySelector('.btn-confirm');
  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  showFeedback('Enviando confirmação...');

  const result = await sendToSheets(guests);

  const existing = loadSavedGuests();
  saveGuests([...existing, ...guests]);
  renderSavedGuests();

  const lines = guests.map((g, i) =>
    `${i + 1}. ${g.nome} ${g.sobrenome} (${g.idade} anos) — ${g.vinculo}`
  ).join('\n');
  const text = `Olá! Confirmo presença no casamento de Laís & Israel 💍\n\n${lines}`;
  const waUrl = `https://wa.me/5511916376717?text=${encodeURIComponent(text)}`;

  if (result.ok) {
    showFeedback(`${guests.length} presença(s) confirmada(s) com sucesso! Abrindo WhatsApp...`);
  } else if (result.skipped) {
    showFeedback(`${guests.length} presença(s) registrada(s) localmente. Abrindo WhatsApp...`);
  } else {
    showFeedback('Não conseguimos salvar online, mas o WhatsApp vai abrir para você enviar manualmente.', true);
  }

  presencaList.innerHTML = '';
  addGuestCard();
  submitBtn.disabled = false;
  submitBtn.textContent = originalLabel;

  setTimeout(() => window.open(waUrl, '_blank'), 700);
});

// inicializa
addGuestCard();
renderSavedGuests();
