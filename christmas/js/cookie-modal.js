/**
 * Cookie gallery modal — montage carousel.
 */

import { montage } from './utils.js';
import { openModal, closeModal } from './modals.js';

const ASSETS = '/assets/';
const COOKIE_IMAGES = [
  `${ASSETS}cookies-1.png`, `${ASSETS}cookies-2.png`, `${ASSETS}cookies-3.png`,
  `${ASSETS}cookies-4.png`, `${ASSETS}cookies-5.png`,
];
const COOKIE_CAPTIONS = [
  'Peanut butter blossoms', 'Christmas tree cookies', 'Baking in progress',
  'Kitchen prep', 'Chocolate chip classics',
];

export function initCookieModal(modal, featureBtn, closeBtn, montageContainer) {
  featureBtn.addEventListener('click', () => {
    openModal(modal, 'cookie', () => montage(montageContainer, COOKIE_IMAGES, 3500, COOKIE_CAPTIONS));
  });
  closeBtn.addEventListener('click', () => closeModal(modal, 'cookie'));
}
