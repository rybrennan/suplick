/**
 * Modal overlay logic — open, close, intervals, click-outside, Escape.
 */

import { playChime } from './utils.js';

export const intervals = {};

export function openModal(modal, key, onOpen) {
  modal.classList.add('open');
  playChime();
  (intervals[key] || []).forEach(id => clearInterval(id));
  intervals[key] = onOpen ? [].concat(onOpen()).filter(Boolean) : [];
}

export function closeModal(modal, key) {
  modal.classList.remove('open');
  (intervals[key] || []).forEach(id => clearInterval(id));
  intervals[key] = [];
}

export function initModals(modals) {
  modals.forEach(({ el, key }) => {
    el.addEventListener('click', e => {
      if (e.target === el) closeModal(el, key);
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modals.forEach(({ el, key }) => {
        if (el.classList.contains('open')) closeModal(el, key);
      });
    }
  });
}
