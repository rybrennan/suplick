/**
 * Turkey protocol dashboard.
 */

import { openModal, closeModal } from './modals.js';

function updateTurkeyDashboard(elements) {
  const { tempEl, timeEl, crispEl, statusEl } = elements;
  const temp = 158 + Math.floor(Math.random() * 12);
  const mins = 25 + Math.floor(Math.random() * 35);
  const crisp = 72 + Math.floor(Math.random() * 18);
  tempEl.textContent = temp + '°F';
  timeEl.textContent = mins + ' min';
  crispEl.textContent = crisp + '%';
  if (temp >= 165) statusEl.textContent = 'PROTOCOL COMPLETE — Rest 15 min before carving.';
  else if (temp >= 155) statusEl.textContent = 'Almost there. Basting recommended.';
  else statusEl.textContent = 'Cooking nominal. Oven stable at 325°F.';
}

export function initTurkey(modal, featureBtn, closeBtn, elements) {
  featureBtn.addEventListener('click', () => {
    openModal(modal, 'turkey', () => {
      updateTurkeyDashboard(elements);
      return setInterval(() => updateTurkeyDashboard(elements), 2000);
    });
  });
  closeBtn.addEventListener('click', () => closeModal(modal, 'turkey'));
}
