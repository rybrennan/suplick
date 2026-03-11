/**
 * Launch Christmas — snow, glow, falling photos, music.
 */

import { playChime } from './utils.js';
import { createSnowflakes, createFallingPhotos, fallingPhotoSrcs } from './snow.js';

export function initLaunch(deps) {
  const {
    snowContainer,
    glowOverlay,
    launchBtn,
    launchBtnBottom,
    bgMusic,
    musicToggle,
  } = deps;

  function launchChristmas() {
    playChime();
    snowContainer.classList.add('active');
    glowOverlay.classList.add('active');
    launchBtn.classList.add('launched');
    if (launchBtnBottom) launchBtnBottom.classList.add('launched');
    createSnowflakes(snowContainer);
    createFallingPhotos(deps.fallingPhotosEl, fallingPhotoSrcs);
    if (bgMusic.paused && !musicToggle.classList.contains('playing')) {
      bgMusic.play().then(() => {
        musicToggle.textContent = '🎵 Music On';
        musicToggle.classList.add('playing');
      }).catch(() => {});
    }
  }

  launchBtn.addEventListener('click', launchChristmas);
  if (launchBtnBottom) launchBtnBottom.addEventListener('click', launchChristmas);

  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicToggle.textContent = '🎵 Music On';
        musicToggle.classList.add('playing');
      }).catch(() => {});
    } else {
      bgMusic.pause();
      musicToggle.textContent = '🎵 Music Off';
      musicToggle.classList.remove('playing');
    }
  });
}
