/**
 * Suplick Christmas 2026 — main entry.
 * Wires all feature modules.
 */

import { montage } from './utils.js';
import { openModal, closeModal, initModals } from './modals.js';
import { initLaunch } from './launch.js';
import { initCountdown } from './countdown.js';
import { initHallmark } from './hallmark.js';
import { initTurkey } from './turkey.js';
import { initGiftScanner } from './gift-scanner.js';
import { initOps } from './ops.js';
import { initCookieModal } from './cookie-modal.js';

const ASSETS = '/assets/';

// --- DOM refs ---
const snowContainer = document.getElementById('snow');
const glowOverlay = document.getElementById('glow');
const launchBtn = document.getElementById('launch');
const launchBtnBottom = document.getElementById('launchBottom');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const fallingPhotosEl = document.getElementById('fallingPhotos');

const heroImages = [
  `${ASSETS}holiday-meal.png`, `${ASSETS}tree-1.png`, `${ASSETS}tree-2.png`,
  `${ASSETS}montage-lights.png`, `${ASSETS}montage-tree-decorating.png`,
  `${ASSETS}montage-cat.png`, `${ASSETS}cookies-1.png`, `${ASSETS}cookies-2.png`,
  `${ASSETS}holiday-house.png`, `${ASSETS}snow-shovel.png`, `${ASSETS}iced-tea.png`,
  `${ASSETS}cookies-3.png`, `${ASSETS}cookies-4.png`, `${ASSETS}cookies-5.png`,
];

// --- Hero montage ---
montage(document.getElementById('heroMontage'), heroImages, 4000);

// --- Music: start on load ---
bgMusic.play().then(() => {
  musicToggle.textContent = '🎵 Music On';
  musicToggle.classList.add('playing');
}).catch(() => {
  musicToggle.textContent = '🎵 Music Off';
  musicToggle.classList.remove('playing');
});

// --- Launch ---
initLaunch({
  snowContainer,
  glowOverlay,
  launchBtn,
  launchBtnBottom,
  bgMusic,
  musicToggle,
  fallingPhotosEl,
});

// --- Modals (click-outside, Escape) ---
const modals = [
  { el: document.getElementById('cookieModal'), key: 'cookie' },
  { el: document.getElementById('turkeyModal'), key: 'turkey' },
  { el: document.getElementById('videoModal'), key: 'video' },
  { el: document.getElementById('opsModal'), key: 'ops' },
  { el: document.getElementById('giftModal'), key: 'gift' },
];
initModals(modals);

// --- Cookie modal ---
initCookieModal(
  document.getElementById('cookieModal'),
  document.getElementById('cookieFeature'),
  document.getElementById('closeCookie'),
  document.getElementById('cookieMontage'),
);

// --- Video modal (close only; open may come from elsewhere) ---
document.getElementById('closeVideo').addEventListener('click', () =>
  closeModal(document.getElementById('videoModal'), 'video'));

// --- Turkey ---
initTurkey(
  document.getElementById('turkeyModal'),
  document.getElementById('turkeyFeature'),
  document.getElementById('closeTurkey'),
  {
    tempEl: document.getElementById('turkeyTemp'),
    timeEl: document.getElementById('turkeyTime'),
    crispEl: document.getElementById('turkeyCrisp'),
    statusEl: document.getElementById('turkeyStatus'),
  },
);

// --- Gift scanner ---
initGiftScanner(
  document.getElementById('giftModal'),
  document.getElementById('giftFeature'),
  document.getElementById('closeGift'),
  {
    logEl: document.getElementById('giftScanLog'),
    resultEl: document.getElementById('giftResult'),
    resultImg: document.getElementById('giftResultImg'),
    resultText: document.getElementById('giftResultText'),
  },
);

// --- Santa Ops ---
initOps(
  document.getElementById('opsModal'),
  document.getElementById('opsBtn'),
  document.getElementById('closeOps'),
  document.getElementById('opsTelemetry'),
  document.getElementById('opsFeed'),
);

// --- Countdown ---
initCountdown({
  daysEl: document.getElementById('cdDays'),
  hoursEl: document.getElementById('cdHours'),
  minsEl: document.getElementById('cdMins'),
  secsEl: document.getElementById('cdSecs'),
  statusEl: document.getElementById('countdownStatus'),
});

// --- Hallmark ---
initHallmark({
  nameInput: document.getElementById('hallmarkName'),
  generateBtn: document.getElementById('hallmarkGenerate'),
  poster: document.getElementById('hallmarkPoster'),
  titleEl: document.getElementById('hallmarkTitle'),
  taglineEl: document.getElementById('hallmarkTagline'),
  castEl: document.getElementById('hallmarkCast'),
});
