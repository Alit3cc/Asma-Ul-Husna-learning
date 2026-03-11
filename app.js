"use strict";

/* ═══════════════════════════════════════════════════
   Asma Ul Husna — App Core
   ═══════════════════════════════════════════════════ */

// ─── State ───────────────────────────────────────────
const state = {
  language: 'en',
  learned: new Set(),
  streak: 0,
  totalXP: 0,
  currentScreen: 'home',
  session: null
};

// ─── Persistence ─────────────────────────────────────
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('asmaulhusna_v2') || '{}');
    state.language = saved.language || 'en';
    state.learned  = new Set(saved.learned || []);
    state.streak   = saved.streak  || 0;
    state.totalXP  = saved.totalXP || 0;
  } catch(e) { /* fresh start */ }
}

function saveState() {
  try {
    localStorage.setItem('asmaulhusna_v2', JSON.stringify({
      language: state.language,
      learned:  [...state.learned],
      streak:   state.streak,
      totalXP:  state.totalXP
    }));
  } catch(e) {}
}

// ─── DOM Helpers ─────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
  state.currentScreen = id;
  window.scrollTo(0, 0);
}

function showToast(msg, duration = 2500) {
  const t = $('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ─── Language ─────────────────────────────────────────
function setLanguage(lang) {
  state.language = lang;
  saveState();
  $$('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Refresh current screen
  if (state.currentScreen === 'home') renderHome();
}

// ─── Nav Stats ─────────────────────────────────────────
function updateNav() {
  const learned = $('nav-learned');
  const streak  = $('nav-streak');
  const xp      = $('nav-xp');
  if (learned) learned.textContent = state.learned.size;
  if (streak)  streak.textContent  = state.streak;
  if (xp)      xp.textContent      = state.totalXP;
}

// ─── HOME SCREEN ─────────────────────────────────────
function renderHome() {
  const lang = state.language;
  const pct  = Math.round((state.learned.size / 99) * 100);

  // Progress
  const pFill  = $('progress-fill');
  const pPct   = $('progress-pct');
  const pCount = $('progress-count');
  if (pFill)  pFill.style.width  = pct + '%';
  if (pPct)   pPct.textContent   = pct + '%';
  if (pCount) pCount.textContent = state.learned.size + ' / 99';

  // Names grid
  const grid = $('names-grid');
  if (!grid) return;
  grid.innerHTML = '';

  ASMA_UL_HUSNA.forEach(name => {
    const isLearned = state.learned.has(name.number);
    const tile = document.createElement('div');
    tile.className = 'name-tile' + (isLearned ? ' learned' : '');
    tile.innerHTML = `
      <div class="tile-num">${name.number}</div>
      <div class="tile-arabic">${name.arabic}</div>
      <div class="tile-transliteration">${name.transliteration}</div>
      <div class="tile-meaning">${name.meanings[lang]}</div>
    `;
    tile.addEventListener('click', () => openNameModal(name));
    grid.appendChild(tile);
  });

  updateNav();
}

// ─── NAME MODAL ──────────────────────────────────────
function openNameModal(name) {
  const lang = state.language;
  $('modal-number').textContent = `Name ${name.number} of 99`;
  $('modal-arabic').textContent = name.arabic;
  $('modal-transliteration').textContent = name.transliteration;

  const meaningsEl = $('modal-meanings');
  meaningsEl.innerHTML = Object.entries(LANGUAGES)
    .map(([code, info]) => `
      <div class="modal-meaning-row">
        <span class="modal-flag">${info.flag}</span>
        <span class="modal-meaning-text"><strong>${info.label}:</strong> ${name.meanings[code]}</span>
      </div>
    `).join('');

  $('modal-desc').textContent = name.description[lang];
  $('modal-overlay').classList.add('open');
}

function closeModal() {
  $('modal-overlay').classList.remove('open');
}

// ─── FLASHCARD SESSION ───────────────────────────────
function startFlashcards() {
  // Prioritize unlearned names, then fill with all
  const unlearned = ASMA_UL_HUSNA.filter(n => !state.learned.has(n.number));
  const pool = unlearned.length >= 10
    ? shuffle(unlearned).slice(0, 10)
    : shuffle([...ASMA_UL_HUSNA]).slice(0, 10);

  state.session = {
    type: 'flashcard',
    queue: pool,
    index: 0,
    knew: 0,
    revealed: false
  };

  showScreen('flashcard-screen');
  renderFlashcard();
}

function renderFlashcard() {
  const sess = state.session;
  const lang = state.language;
  const total = sess.queue.length;
  const name  = sess.queue[sess.index];
  sess.revealed = false;

  // Dots
  const dotsEl = $('fc-dots');
  dotsEl.innerHTML = sess.queue.map((_, i) => {
    const cls = i < sess.index ? 'done' : (i === sess.index ? 'current' : '');
    return `<div class="dot ${cls}"></div>`;
  }).join('');

  $('fc-counter').textContent = `${sess.index + 1} / ${total}`;

  // Front face
  $('fc-number').textContent  = `${name.number} of 99`;
  $('fc-arabic').textContent  = name.arabic;
  $('fc-translit').textContent = name.transliteration;

  // Back face
  $('fc-arabic-back').textContent = name.arabic;
  $('fc-meaning').textContent = name.meanings[lang];
  $('fc-desc').textContent    = name.description[lang];

  // Reset flip
  const card = $('flashcard');
  card.classList.remove('flipped');

  // Show/hide action buttons
  $('fc-actions').style.display = 'none';
  $('fc-reveal-btn').style.display = 'block';
}

function revealFlashcard() {
  const sess = state.session;
  if (sess.revealed) return;
  sess.revealed = true;
  $('flashcard').classList.add('flipped');
  $('fc-reveal-btn').style.display = 'none';
  $('fc-actions').style.display = 'flex';
}

function fcAnswer(knew) {
  const sess = state.session;
  const name = sess.queue[sess.index];

  if (knew) {
    sess.knew++;
    state.learned.add(name.number);
    state.totalXP += 10;
    showToast('✓ Memorised! +10 XP');
  }

  sess.index++;
  saveState();

  if (sess.index >= sess.queue.length) {
    endSession();
  } else {
    renderFlashcard();
  }
}

// ─── QUIZ SESSION ─────────────────────────────────────
function startQuiz() {
  const pool = shuffle([...ASMA_UL_HUSNA]).slice(0, 10);
  state.session = {
    type: 'quiz',
    queue: pool,
    index: 0,
    correct: 0,
    answered: false
  };
  showScreen('quiz-screen');
  renderQuiz();
}

function renderQuiz() {
  const sess = state.session;
  const lang = state.language;
  const name = sess.queue[sess.index];
  sess.answered = false;

  // Header
  const dotsEl = $('quiz-dots');
  dotsEl.innerHTML = sess.queue.map((_, i) => {
    const cls = i < sess.index ? 'done' : (i === sess.index ? 'current' : '');
    return `<div class="dot ${cls}"></div>`;
  }).join('');
  $('quiz-counter').textContent = `${sess.index + 1} / ${sess.queue.length}`;

  // Prompt
  $('quiz-arabic').textContent   = name.arabic;
  $('quiz-translit').textContent = name.transliteration;

  // Generate 4 options (1 correct + 3 wrong)
  const others = shuffle(ASMA_UL_HUSNA.filter(n => n.number !== name.number)).slice(0, 3);
  const options = shuffle([name, ...others]);
  const letters = ['A', 'B', 'C', 'D'];

  const optionsEl = $('quiz-options');
  optionsEl.innerHTML = '';
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt.meanings[lang]}`;
    btn.addEventListener('click', () => answerQuiz(btn, opt.number === name.number, name, options, lang));
    optionsEl.appendChild(btn);
  });

  // Clear feedback
  const fb = $('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
}

function answerQuiz(clickedBtn, isCorrect, name, options, lang) {
  const sess = state.session;
  if (sess.answered) return;
  sess.answered = true;

  const allBtns = $$('#quiz-options .quiz-option');
  allBtns.forEach(btn => btn.classList.add('disabled'));

  if (isCorrect) {
    clickedBtn.classList.add('correct');
    sess.correct++;
    state.learned.add(name.number);
    state.totalXP += 15;
    saveState();
    showFeedback(true, 'Correct! ما شاء الله');
  } else {
    clickedBtn.classList.add('wrong');
    // Highlight correct
    allBtns.forEach((btn, i) => {
      if (options[i].number === name.number) btn.classList.add('correct');
    });
    showFeedback(false, `The answer was: ${name.meanings[lang]}`);
  }

  setTimeout(() => {
    sess.index++;
    if (sess.index >= sess.queue.length) {
      endSession();
    } else {
      renderQuiz();
    }
  }, 1800);
}

function showFeedback(correct, msg) {
  const fb = $('quiz-feedback');
  fb.textContent = msg;
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
}

// ─── MATCHING GAME ────────────────────────────────────
function startMatch() {
  // Pick 6 names for matching
  const unlearned = ASMA_UL_HUSNA.filter(n => !state.learned.has(n.number));
  const pool = shuffle(unlearned.length >= 6 ? unlearned : [...ASMA_UL_HUSNA]).slice(0, 6);

  state.session = {
    type: 'match',
    pool,
    selected: null,
    matched: new Set(),
    moves: 0
  };

  showScreen('match-screen');
  renderMatch();
}

function renderMatch() {
  const sess = state.session;
  const lang = state.language;

  // Create shuffled arabic and meaning cards separately
  const arabicCards  = shuffle(sess.pool.map(n => ({ id: n.number, type: 'arabic',  text: n.arabic,          name: n })));
  const meaningCards = shuffle(sess.pool.map(n => ({ id: n.number, type: 'meaning', text: n.meanings[lang],  name: n })));

  // Interleave
  const allCards = [];
  for (let i = 0; i < 6; i++) {
    allCards.push(arabicCards[i], meaningCards[i]);
  }

  sess.cards = allCards;
  sess.selected = null;

  const grid = $('match-grid');
  grid.innerHTML = '';

  allCards.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'match-card' + (card.type === 'arabic' ? ' arabic-card' : '');
    el.textContent = card.text;
    el.dataset.idx = idx;
    el.addEventListener('click', () => onMatchClick(idx));
    grid.appendChild(el);
  });

  $('match-moves').textContent = '0';
}

function onMatchClick(idx) {
  const sess   = state.session;
  const card   = sess.cards[idx];
  const cards  = $$('#match-grid .match-card');
  const el     = cards[idx];

  if (el.classList.contains('matched') || el.classList.contains('selected')) return;

  if (sess.selected === null) {
    sess.selected = idx;
    el.classList.add('selected');
    return;
  }

  // Second selection
  const firstIdx  = sess.selected;
  const firstCard = sess.cards[firstIdx];
  const firstEl   = cards[firstIdx];

  sess.moves++;
  $('match-moves').textContent = sess.moves;

  firstEl.classList.remove('selected');
  sess.selected = null;

  if (firstCard.id === card.id && firstCard.type !== card.type) {
    // Match!
    el.classList.add('matched');
    firstEl.classList.add('matched');
    sess.matched.add(card.id);
    state.learned.add(card.id);
    state.totalXP += 20;
    saveState();
    showToast(`✓ Matched! +20 XP`);

    if (sess.matched.size === sess.pool.length) {
      setTimeout(endSession, 800);
    }
  } else {
    // Wrong
    el.classList.add('wrong-shake');
    firstEl.classList.add('wrong-shake');
    setTimeout(() => {
      el.classList.remove('wrong-shake');
      firstEl.classList.remove('wrong-shake');
    }, 500);
  }
}

// ─── REVERSE QUIZ (Meaning → Arabic) ─────────────────
function startReverseQuiz() {
  const pool = shuffle([...ASMA_UL_HUSNA]).slice(0, 10);
  state.session = {
    type: 'reverse',
    queue: pool,
    index: 0,
    correct: 0,
    answered: false
  };
  showScreen('quiz-screen');
  renderReverseQuiz();
}

function renderReverseQuiz() {
  const sess = state.session;
  const lang = state.language;
  const name = sess.queue[sess.index];
  sess.answered = false;

  const dotsEl = $('quiz-dots');
  dotsEl.innerHTML = sess.queue.map((_, i) => {
    const cls = i < sess.index ? 'done' : (i === sess.index ? 'current' : '');
    return `<div class="dot ${cls}"></div>`;
  }).join('');
  $('quiz-counter').textContent = `${sess.index + 1} / ${sess.queue.length}`;

  // Show meaning as prompt, guess the Arabic
  $('quiz-arabic').innerHTML = `<span style="font-family:var(--font-title);font-size:1.4rem;color:var(--gold-light)">${name.meanings[lang]}</span>`;
  $('quiz-translit').textContent = 'Select the correct Arabic name';

  const others = shuffle(ASMA_UL_HUSNA.filter(n => n.number !== name.number)).slice(0, 3);
  const options = shuffle([name, ...others]);
  const letters = ['A', 'B', 'C', 'D'];

  const optionsEl = $('quiz-options');
  optionsEl.innerHTML = '';
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.style.fontFamily = "var(--font-arabic)";
    btn.style.fontSize = "1.2rem";
    btn.style.direction = "rtl";
    btn.style.textAlign = "right";
    btn.innerHTML = `<span class="option-letter" style="font-family:var(--font-body);font-size:0.7rem;direction:ltr">${letters[i]}</span>${opt.arabic}`;
    btn.addEventListener('click', () => answerReverseQuiz(btn, opt.number === name.number, name, options));
    optionsEl.appendChild(btn);
  });

  const fb = $('quiz-feedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
}

function answerReverseQuiz(clickedBtn, isCorrect, name, options) {
  const sess = state.session;
  if (sess.answered) return;
  sess.answered = true;

  const allBtns = $$('#quiz-options .quiz-option');
  allBtns.forEach(btn => btn.classList.add('disabled'));

  if (isCorrect) {
    clickedBtn.classList.add('correct');
    sess.correct++;
    state.learned.add(name.number);
    state.totalXP += 15;
    saveState();
    showFeedback(true, 'Correct! بَارَكَ اللَّهُ فِيكَ');
  } else {
    clickedBtn.classList.add('wrong');
    allBtns.forEach((btn, i) => {
      if (options[i].number === name.number) btn.classList.add('correct');
    });
    showFeedback(false, `The answer was: ${name.arabic} — ${name.transliteration}`);
  }

  setTimeout(() => {
    sess.index++;
    if (sess.index >= sess.queue.length) {
      endSession();
    } else {
      renderReverseQuiz();
    }
  }, 1800);
}

// ─── SESSION END ──────────────────────────────────────
function endSession() {
  const sess = state.session;
  let correct = 0;
  let total   = 0;

  if (sess.type === 'flashcard') {
    correct = sess.knew;
    total   = sess.queue.length;
  } else if (sess.type === 'quiz' || sess.type === 'reverse') {
    correct = sess.correct;
    total   = sess.queue.length;
  } else if (sess.type === 'match') {
    correct = sess.matched.size;
    total   = sess.pool.length;
  }

  // Update streak
  state.streak++;
  saveState();
  updateNav();

  // Render complete
  $('complete-correct').textContent = correct;
  $('complete-total').textContent   = total;
  $('complete-xp').textContent      = state.totalXP;
  $('complete-learned').textContent = state.learned.size;

  const pct = Math.round((correct / total) * 100);
  let msg = '';
  if (pct === 100)      msg = '🌟 Perfect! سُبْحَانَ اللَّهِ';
  else if (pct >= 80)   msg = '✨ Excellent! الْحَمْدُ لِلَّهِ';
  else if (pct >= 60)   msg = '👍 Good effort! Keep going.';
  else                  msg = '💪 Keep practising — you\'ll get there!';

  $('complete-message').textContent = msg;
  showScreen('complete-screen');
}

// ─── Utilities ─────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Init ─────────────────────────────────────────────
function init() {
  loadState();

  // Language buttons
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    if (btn.dataset.lang === state.language) btn.classList.add('active');
  });

  // Nav logo → home
  $('nav-logo').addEventListener('click', () => {
    showScreen('home');
    renderHome();
  });

  // Mode cards
  $('mode-flashcard').addEventListener('click', startFlashcards);
  $('mode-quiz').addEventListener('click', startQuiz);
  $('mode-match').addEventListener('click', startMatch);
  $('mode-reverse').addEventListener('click', startReverseQuiz);

  // Flashcard controls
  $('flashcard').addEventListener('click', () => {
    if (!state.session?.revealed) revealFlashcard();
  });
  $('fc-reveal-btn').addEventListener('click', revealFlashcard);
  $('fc-knew').addEventListener('click',   () => fcAnswer(true));
  $('fc-review').addEventListener('click', () => fcAnswer(false));

  // Back buttons
  $$('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('home');
      renderHome();
    });
  });

  // Complete screen
  $('btn-again').addEventListener('click',   () => {
    const t = state.session?.type;
    if (t === 'flashcard')  startFlashcards();
    else if (t === 'quiz')  startQuiz();
    else if (t === 'match') startMatch();
    else if (t === 'reverse') startReverseQuiz();
    else renderHome();
  });
  $('btn-home').addEventListener('click', () => {
    showScreen('home');
    renderHome();
  });

  // Modal
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) closeModal();
  });
  $('modal-close').addEventListener('click', closeModal);

  // Keyboard: Esc closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (state.currentScreen === 'flashcard-screen') {
      if (e.key === ' ' || e.key === 'Enter') {
        if (!state.session?.revealed) revealFlashcard();
      }
      if (e.key === 'ArrowRight' || e.key === '1') fcAnswer(true);
      if (e.key === 'ArrowLeft'  || e.key === '2') fcAnswer(false);
    }
  });

  // Initial render
  showScreen('home');
  renderHome();
}

document.addEventListener('DOMContentLoaded', init);
