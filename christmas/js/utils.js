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
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.2);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (_) {}
}
