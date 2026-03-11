/**
 * Snowflakes and falling photos.
 */

const SNOW_CHARS = ['❄', '✻', '❅', '•'];
const ASSETS = '/assets/';

export function createSnowflakes(container) {
  container.innerHTML = '';
  for (let i = 0; i < 50; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    flake.textContent = SNOW_CHARS[Math.floor(Math.random() * SNOW_CHARS.length)];
    flake.style.left = Math.random() * 100 + '%';
    flake.style.animationDuration = (8 + Math.random() * 8) + 's';
    flake.style.animationDelay = Math.random() * 5 + 's';
    flake.style.fontSize = (0.6 + Math.random() * 1) + 'rem';
    container.appendChild(flake);
  }
}

export function createFallingPhotos(container, srcs) {
  container.innerHTML = '';
  container.classList.add('active');
  srcs.forEach((src, i) => {
    const img = document.createElement('img');
    img.className = 'falling-photo falling-photo-' + i;
    img.src = src;
    img.alt = '';
    img.style.left = (18 + i * 28 + Math.random() * 8) + '%';
    img.style.animationDelay = (i * 3.5) + 's';
    container.appendChild(img);
  });
}

export const fallingPhotoSrcs = [
  `${ASSETS}falling-1.png`,
  `${ASSETS}falling-2.png`,
  `${ASSETS}falling-3.png`,
];
