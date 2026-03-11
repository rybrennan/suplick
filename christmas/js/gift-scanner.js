/**
 * Gift Gateway — sweater conflict scanner gag.
 */

import { openModal, closeModal, intervals } from './modals.js';

const GIFT_GAGS = [
  { img: 'https://www.cvs.com/bizcontent/merchandising/productimages/high_res/4203710300.jpg?im=Resize=(300,300),aspect=ignore', text: 'DUPLICATE DETECTED: Beano — Already on Ryan\'s list.' },
  { img: 'https://i.ebayimg.com/images/g/PlsAAOSwEIFduIEw/s-l400.jpg', text: 'CONFLICT RESOLVED: Peter Heater — Assigned to Greg.' },
  { img: 'https://cdn.thisiswhyimbroke.com/buying-guides-thumb/35/merry-chrithmith-ugly-sweater_400x.jpg', text: 'WARNING: "Merry Chrithmith" — Ryan, Michelle & Greg requested. Lottery winner: You.' },
  { img: 'https://cdn.thisiswhyimbroke.com/thumb/grinch-arm-christmas-tree-ornament-2_400x333.jpg', text: 'CLEAR — No duplicate sweaters. Grinch arm ornament approved.' },
];
const SCAN_NAMES = ['Ryan', 'Michelle', 'Greg'];

export function initGiftScanner(modal, featureBtn, closeBtn, elements) {
  const { logEl, resultEl, resultImg, resultText } = elements;

  featureBtn.addEventListener('click', () => {
    openModal(modal, 'gift');
    resultEl.style.display = 'none';
    logEl.textContent = 'SCANNING...';
    let i = 0;
    const scanInterval = setInterval(() => {
      logEl.textContent = 'SCANNING... ' + SCAN_NAMES[i % SCAN_NAMES.length] + '...';
      i++;
      if (i >= 4) {
        clearInterval(scanInterval);
        const gag = GIFT_GAGS[Math.floor(Math.random() * GIFT_GAGS.length)];
        resultImg.src = gag.img;
        resultImg.alt = gag.text;
        resultText.textContent = gag.text;
        resultEl.style.display = 'block';
        logEl.textContent = 'SCAN COMPLETE.';
      }
    }, 600);
    intervals.gift = [scanInterval];
  });
  closeBtn.addEventListener('click', () => closeModal(modal, 'gift'));
}
