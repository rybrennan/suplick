/**
 * Pure utilities — montage carousel, chime sound.
 */

export function montage(container, images, ms, alts) {
  let i = 0;
  container.innerHTML = '';
  images.forEach((src, j) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alts ? alts[j] || '' : '';
    if (j === 0) img.classList.add('active');
    container.appendChild(img);
  });
  return setInterval(() => {
    const imgs = container.querySelectorAll('img');
    if (!imgs.length) return;
    imgs.forEach(img => img.classList.remove('active'));
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, ms);
}

export function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    gain.connect(ctx.destination);

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.connect(gain);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.25);
    });
  } catch (_) {}
}
