/* ============================================
   LAÍS & ISRAEL — Chá de Panela
   ============================================ */

const SHEETS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbz7s9Y1A7HmVCEiNSd0hDwrEclrm1jL4DWiRXzgyyeC0OpuyibK93AUylgD3GuoEP6U/exec';

// IDs sao imutaveis. Adicionar novos itens no final, nunca reutilizar ID.
const CHA_ITEMS = [
  // === COZINHA ===
  { id:  1, categoria:'cozinha', nome:'Air Fryer' },
  { id:  2, categoria:'cozinha', nome:'Cafeteira' },
  { id:  3, categoria:'cozinha', nome:'Máquina de café em cápsulas' },
  { id:  4, categoria:'cozinha', nome:'Chaleira elétrica' },
  { id:  5, categoria:'cozinha', nome:'Grill elétrico' },
  { id:  6, categoria:'cozinha', nome:'Mixer' },
  { id:  7, categoria:'cozinha', nome:'Processador de alimentos' },
  { id:  8, categoria:'cozinha', nome:'Espremedor de frutas elétrico' },
  { id:  9, categoria:'cozinha', nome:'Torradeira' },
  { id: 10, categoria:'cozinha', nome:'Panela elétrica de arroz' },
  { id: 11, categoria:'cozinha', nome:'Panela de pressão elétrica' },
  { id: 12, categoria:'cozinha', nome:'Pipoqueira elétrica' },
  { id: 13, categoria:'cozinha', nome:'Jogo de panelas' },
  { id: 14, categoria:'cozinha', nome:'Frigideira' },
  { id: 15, categoria:'cozinha', nome:'Panela de pressão' },
  { id: 16, categoria:'cozinha', nome:'Leiteira' },
  { id: 17, categoria:'cozinha', nome:'Assadeiras' },
  { id: 18, categoria:'cozinha', nome:'Formas (bolo, pizza e pudim)' },
  { id: 19, categoria:'cozinha', nome:'Escorredor de macarrão' },
  { id: 20, categoria:'cozinha', nome:'Escorredor de arroz' },
  { id: 21, categoria:'cozinha', nome:'Peneiras' },
  { id: 22, categoria:'cozinha', nome:'Tábua de corte' },
  { id: 23, categoria:'cozinha', nome:'Ralador' },
  { id: 24, categoria:'cozinha', nome:'Abridor de latas' },
  { id: 25, categoria:'cozinha', nome:'Descascador de legumes' },
  { id: 26, categoria:'cozinha', nome:'Tesoura de cozinha' },
  { id: 27, categoria:'cozinha', nome:'Espremedor de alho' },
  { id: 28, categoria:'cozinha', nome:'Espremedor de limão' },
  { id: 29, categoria:'cozinha', nome:'Colheres de pau' },
  { id: 30, categoria:'cozinha', nome:'Espátulas' },
  { id: 31, categoria:'cozinha', nome:'Concha' },
  { id: 32, categoria:'cozinha', nome:'Escumadeira' },
  { id: 33, categoria:'cozinha', nome:'Pegador de massa' },
  { id: 34, categoria:'cozinha', nome:'Pegador de salada' },
  { id: 35, categoria:'cozinha', nome:'Colher para arroz' },
  { id: 36, categoria:'cozinha', nome:'Faqueiro' },
  { id: 37, categoria:'cozinha', nome:'Jogo de facas' },
  { id: 38, categoria:'cozinha', nome:'Pratos rasos, fundos e de sobremesa' },
  { id: 39, categoria:'cozinha', nome:'Bowls e tigelas' },
  { id: 40, categoria:'cozinha', nome:'Travessas' },
  { id: 41, categoria:'cozinha', nome:'Xícaras de café e chá' },
  { id: 42, categoria:'cozinha', nome:'Canecas' },
  { id: 43, categoria:'cozinha', nome:'Copos' },
  { id: 44, categoria:'cozinha', nome:'Taças' },
  { id: 45, categoria:'cozinha', nome:'Jarra' },
  { id: 46, categoria:'cozinha', nome:'Potes herméticos' },
  { id: 47, categoria:'cozinha', nome:'Porta-temperos' },
  { id: 48, categoria:'cozinha', nome:'Escorredor de louça' },
  { id: 49, categoria:'cozinha', nome:'Escorredor de talheres' },
  { id: 50, categoria:'cozinha', nome:'Lixeira de cozinha' },
  { id: 51, categoria:'cozinha', nome:'Panos de prato' },
  { id: 52, categoria:'cozinha', nome:'Toalha de mesa' },
  { id: 53, categoria:'cozinha', nome:'Jogo americano' },
  { id: 54, categoria:'cozinha', nome:'Descanso de panela' },
  { id: 55, categoria:'cozinha', nome:'Porta-guardanapos' },
  { id: 56, categoria:'cozinha', nome:'Saleiro e pimenteiro' },
  { id: 57, categoria:'cozinha', nome:'Açucareiro' },
  { id: 58, categoria:'cozinha', nome:'Galheteiro' },
  { id: 59, categoria:'cozinha', nome:'Cesto de frutas' },
  { id: 60, categoria:'cozinha', nome:'Bandeja' },
  { id: 61, categoria:'cozinha', nome:'Kit de pia' },
  { id: 62, categoria:'cozinha', nome:'Rodo de pia' },

  // === QUARTO ===
  { id: 63, categoria:'quarto', nome:'Jogo de lençol casal' },
  { id: 64, categoria:'quarto', nome:'Fronhas' },
  { id: 65, categoria:'quarto', nome:'Edredom' },
  { id: 66, categoria:'quarto', nome:'Cobertor' },
  { id: 67, categoria:'quarto', nome:'Colcha' },
  { id: 68, categoria:'quarto', nome:'Travesseiros' },
  { id: 69, categoria:'quarto', nome:'Protetor de colchão' },
  { id: 70, categoria:'quarto', nome:'Protetor de travesseiro' },
  { id: 71, categoria:'quarto', nome:'Manta' },
  { id: 72, categoria:'quarto', nome:'Cabides' },
  { id: 73, categoria:'quarto', nome:'Organizadores de gaveta' },
  { id: 74, categoria:'quarto', nome:'Cestos organizadores' },
  { id: 75, categoria:'quarto', nome:'Caixas organizadoras' },

  // === BANHEIRO ===
  { id: 76, categoria:'banheiro', nome:'Jogo de toalhas de banho' },
  { id: 77, categoria:'banheiro', nome:'Toalhas de rosto' },
  { id: 78, categoria:'banheiro', nome:'Tapete para banheiro' },
  { id: 79, categoria:'banheiro', nome:'Cortina para box' },
  { id: 80, categoria:'banheiro', nome:'Lixeira de banheiro' },
  { id: 81, categoria:'banheiro', nome:'Escova sanitária' },
  { id: 82, categoria:'banheiro', nome:'Porta-escova de dentes' },
  { id: 83, categoria:'banheiro', nome:'Porta-sabonete líquido' },
  { id: 84, categoria:'banheiro', nome:'Saboneteira' },
  { id: 85, categoria:'banheiro', nome:'Porta-algodão' },
  { id: 86, categoria:'banheiro', nome:'Porta-cotonetes' },
  { id: 87, categoria:'banheiro', nome:'Cesto para roupas (banheiro)' },
  { id: 88, categoria:'banheiro', nome:'Organizador para banheiro' },
  { id: 89, categoria:'banheiro', nome:'Ganchos para toalhas' },
  { id: 90, categoria:'banheiro', nome:'Kit para banheiro' },

  // === LAVANDERIA ===
  { id: 91, categoria:'lavanderia', nome:'Ferro de passar roupa' },
  { id: 92, categoria:'lavanderia', nome:'Varal de chão' },
  { id: 93, categoria:'lavanderia', nome:'Prendedores de roupa' },
  { id: 94, categoria:'lavanderia', nome:'Cesto para roupas (lavanderia)' },
  { id: 95, categoria:'lavanderia', nome:'Balde' },
  { id: 96, categoria:'lavanderia', nome:'Vassoura' },
  { id: 97, categoria:'lavanderia', nome:'Rodo' },
  { id: 98, categoria:'lavanderia', nome:'Pá de lixo' },
  { id: 99, categoria:'lavanderia', nome:'Escova de limpeza' },
  { id:100, categoria:'lavanderia', nome:'Luvas de borracha' },
  { id:101, categoria:'lavanderia', nome:'Organizador para produtos de limpeza' },
];

// === ESTADO ===
let reservados = new Set();      // ids ja escolhidos
let categoriaAtiva = 'cozinha';
let itemSelecionado = null;
let confirmando = false;

// === REFS ===
const grid       = document.getElementById('chaGrid');
const emptyMsg   = document.getElementById('chaEmpty');
const status     = document.getElementById('chaStatus');
const tabs       = document.querySelectorAll('.cha-tab');
const modal      = document.getElementById('chaModal');
const modalProd  = document.getElementById('chaModalProd');
const modalSpec  = document.getElementById('chaModalSpec');
const nameInput  = document.getElementById('chaName');
const btnConfirm = document.getElementById('chaConfirm');
const btnCancel  = document.getElementById('chaCancel');
const btnClose   = document.getElementById('chaClose');
const feedback   = document.getElementById('chaFeedback');
const fbEmoji    = document.getElementById('chaFbEmoji');
const fbTitle    = document.getElementById('chaFbTitle');
const fbMsg      = document.getElementById('chaFbMsg');
const btnFbClose = document.getElementById('chaFbClose');
const backTop    = document.getElementById('backTop');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.querySelector('.nav-links');

// === NAV MOBILE ===
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// === BACK TO TOP ===
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});
backTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// === RENDER ===
function render() {
  const items = CHA_ITEMS.filter(i => i.categoria === categoriaAtiva && !reservados.has(i.id));

  if (!items.length) {
    grid.innerHTML = '';
    emptyMsg.classList.remove('hidden');
    return;
  }
  emptyMsg.classList.add('hidden');

  grid.innerHTML = items.map(i => `
    <article class="cha-card" data-id="${i.id}">
      <h4 class="cha-card-name">${i.nome}</h4>
      <button type="button" class="btn-primary btn-mp cha-btn-choose" data-id="${i.id}">
        Escolher
      </button>
    </article>
  `).join('');

  grid.querySelectorAll('.cha-btn-choose').forEach(btn => {
    btn.addEventListener('click', () => openModal(Number(btn.dataset.id)));
  });
}

// === TABS ===
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    categoriaAtiva = tab.dataset.cat;
    render();
  });
});

// === MODAL ===
function openModal(id) {
  const item = CHA_ITEMS.find(i => i.id === id);
  if (!item) return;
  itemSelecionado = item;
  modalProd.textContent = item.nome;
  modalSpec.textContent = '';
  nameInput.value = '';
  nameInput.classList.remove('invalid');
  btnConfirm.disabled = false;
  btnConfirm.textContent = 'Confirmar presente ✓';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => nameInput.focus(), 200);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  itemSelecionado = null;
}

btnCancel.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

// === FEEDBACK ===
function showFeedback({ emoji, title, msg }) {
  fbEmoji.textContent = emoji;
  fbTitle.textContent = title;
  fbMsg.textContent   = msg;
  feedback.classList.add('open');
}
btnFbClose.addEventListener('click', () => feedback.classList.remove('open'));

// === CONFIRMAR ===
btnConfirm.addEventListener('click', async () => {
  if (confirmando || !itemSelecionado) return;

  const nome = nameInput.value.trim();
  if (nome.length < 3) {
    nameInput.classList.add('invalid');
    nameInput.focus();
    return;
  }

  confirmando = true;
  btnConfirm.disabled = true;
  btnConfirm.textContent = 'Reservando…';

  const res = await reservar(itemSelecionado.id, nome);

  confirmando = false;

  if (res.success) {
    reservados.add(itemSelecionado.id);
    closeModal();
    render();
    showFeedback({
      emoji: '🎉',
      title: 'Obrigado!',
      msg:   'Seu presente foi reservado com sucesso. Estamos muito felizes por fazer parte deste momento com você.'
    });
  } else if (res.conflict) {
    reservados.add(itemSelecionado.id);
    closeModal();
    render();
    showFeedback({
      emoji: '😕',
      title: 'Este presente acabou de ser escolhido',
      msg:   'Outro convidado reservou esse item primeiro. Por favor, escolha outro presente.'
    });
  } else {
    btnConfirm.disabled = false;
    btnConfirm.textContent = 'Tentar novamente';
    showFeedback({
      emoji: '⚠️',
      title: 'Não foi possível reservar',
      msg:   res.message || 'Verifique sua conexão e tente novamente em instantes.'
    });
  }
});

nameInput.addEventListener('input', () => nameInput.classList.remove('invalid'));

// === API ===
async function carregarReservados() {
  try {
    const r = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'cha_list_reservas' })
    });
    const data = await r.json();
    if (data.status === 'ok' && Array.isArray(data.reservados)) {
      reservados = new Set(data.reservados.map(Number));
      status.textContent = `${CHA_ITEMS.length - reservados.size} presentes disponíveis`;
    } else {
      throw new Error(data.message || 'Resposta inválida do servidor.');
    }
  } catch (err) {
    status.textContent = 'Não foi possível carregar a lista atualizada. Exibindo todos os itens.';
    console.error('Erro list reservas:', err);
  }
  render();
}

async function reservar(produtoId, nome) {
  try {
    const item = CHA_ITEMS.find(i => i.id === produtoId);
    const r = await fetch(SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'cha_reservar',
        produtoId,
        produto: item ? item.nome : '',
        categoria: item ? item.categoria : '',
        nome
      })
    });
    const data = await r.json();
    if (data.status === 'ok' && data.success) return { success: true };
    if (data.status === 'conflict' || data.conflict) return { success: false, conflict: true };
    return { success: false, message: data.message || 'Erro desconhecido.' };
  } catch (err) {
    return { success: false, message: 'Falha de rede: ' + err.message };
  }
}

// === AUTO REFRESH (CA10) ===
setInterval(carregarReservados, 30000); // 30s

// === INIT ===
carregarReservados();
