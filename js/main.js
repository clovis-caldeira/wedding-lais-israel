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
const presentes = [
  {
    emoji: '🧪',
    name: 'Teste de Pagamento',
    desc: 'Presente de teste para validar o checkout do Mercado Pago. Remover após validação.',
    value: 1,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🛏️',
    name: 'Jogo de Cama Queen',
    desc: 'Jogo de cama 100% algodão egípcio, 500 fios. Inclui lençol, fronhas e capa de edredom.',
    value: 380,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '☕',
    name: 'Cafeteira Expresso',
    desc: 'Máquina de café expresso automática com moedor integrado e vaporizador de leite.',
    value: 890,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🍳',
    name: 'Jogo de Panelas',
    desc: 'Conjunto de panelas antiaderentes de alta resistência com 7 peças, ideal para o novo lar.',
    value: 650,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🍷',
    name: 'Adega de Vinhos',
    desc: 'Adega climatizada com capacidade para 12 garrafas, temperatura controlada e luz UV.',
    value: 720,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🏝️',
    name: 'Lua de Mel — Passagem',
    desc: 'Contribuição para a viagem de lua de mel dos noivos. Cada aporte torna o sonho real!',
    value: 500,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🛋️',
    name: 'Almofadas Decorativas',
    desc: 'Conjunto de almofadas decorativas para sala de estar, em tecido premium veludo.',
    value: 280,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🪴',
    name: 'Kit Plantas de Interior',
    desc: 'Curadoria de 5 plantas ornamentais com vasos e substrato. Vida e cor para o lar.',
    value: 190,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🔆',
    name: 'Luminária Decorativa',
    desc: 'Luminária de piso minimalista em metal dourado com cúpula em linho natural.',
    value: 420,
    pix: 'laisrael2026@gmail.com'
  },
  {
    emoji: '🛁',
    name: 'Jogo de Toalhas Premium',
    desc: 'Conjunto de toalhas de banho, rosto e piso em algodão felpudo. 8 peças.',
    value: 310,
    pix: 'laisrael2026@gmail.com'
  },
];

function renderPresentes() {
  const grid = document.getElementById('presentesGrid');
  grid.innerHTML = presentes.map((p, i) => `
    <div class="presente-card reveal">
      <div class="presente-img">${p.emoji}</div>
      <div class="presente-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <div class="presente-footer">
          <span class="presente-price">R$ ${p.value.toLocaleString('pt-BR')}</span>
          <button class="btn-presente" onclick="openModal(${i})">Presentear</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe new cards
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
    observer.observe(el);
  });
}

renderPresentes();


// === MODAL PRESENTES (Mercado Pago) ===
const modal      = document.getElementById('pixModal');
const closeModal = document.getElementById('closeModal');
const btnMP      = document.getElementById('btnMercadoPago');
const mpFallback = document.getElementById('mpFallback');

let currentGift = null;

function openModal(index) {
  const p = presentes[index];
  currentGift = { ...p, index };

  document.getElementById('modalEmoji').textContent = p.emoji;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent  = p.desc;
  document.getElementById('modalPrice').textContent = 'R$ ' + p.value.toLocaleString('pt-BR');

  // reset estados
  btnMP.classList.remove('loading', 'hidden');
  btnMP.textContent = 'Presentear com Mercado Pago →';
  mpFallback.classList.add('hidden');
  removeMpError();

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

btnMP.addEventListener('click', async e => {
  e.preventDefault();
  if (!currentGift) return;

  if (!SHEETS_WEBAPP_URL) {
    mpFallback.classList.remove('hidden');
    return;
  }

  btnMP.classList.add('loading');
  btnMP.textContent = 'Gerando link seguro...';
  removeMpError();

  try {
    const res = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'mp_checkout',
        gift: {
          name:  currentGift.name,
          desc:  currentGift.desc,
          value: currentGift.value,
          emoji: currentGift.emoji
        }
      })
    });
    const data = await res.json();

    if (data.status === 'ok' && data.init_point) {
      btnMP.textContent = 'Abrindo Mercado Pago...';
      window.location.href = data.init_point;
    } else {
      console.error('MP erro detalhado:', data);
      throw new Error(data.message || 'Resposta inesperada do servidor.');
    }
  } catch (err) {
    btnMP.classList.remove('loading');
    btnMP.textContent = 'Tentar novamente';
    showMpError('Erro: ' + err.message);
    console.error(err);
  }
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
