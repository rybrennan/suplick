/**
 * Christmas countdown timer.
 */

const XMAS_2026 = new Date('2026-12-25T00:00:00');

const ELF_MESSAGES = [
  'The elves are warming up',
  'Workshop dust bunnies: EVICTED',
  'Hot cocoa supplies: STOCKED',
  'Reindeer cardio: IN PROGRESS',
  'North Pole WiFi: STRONG',
  'Toy prototypes: PILING UP',
  'Sleigh in the shop for a tune-up',
  'Mrs. Claus has the cookies in the oven',
  'Elves are doing stretches',
  'Naughty list: Being double-checked',
];

function getStatus(days, hours, mins) {
  if (days >= 30) return ELF_MESSAGES[Math.floor(Date.now() / 8000) % ELF_MESSAGES.length];
  if (days >= 7) return 'GIFT WRAPPING PROTOCOLS ENGAGED';
  if (days >= 1 || hours >= 1) return 'FINAL COUNTDOWN - ALL STATIONS REPORT';
  return 'SLEIGH LAUNCH IMMINENT';
}

export function initCountdown(elements) {
  const { daysEl, hoursEl, minsEl, secsEl, statusEl } = elements;

  function update() {
    const now = new Date();
    const diff = XMAS_2026 - now;
    if (diff <= 0) {
      daysEl.textContent = '0';
      hoursEl.textContent = '0';
      minsEl.textContent = '0';
      secsEl.textContent = '0';
      statusEl.textContent = 'SLEIGH HAS LANDED';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
    statusEl.textContent = getStatus(days, hours, mins);
  }

  update();
  setInterval(update, 1000);
}
