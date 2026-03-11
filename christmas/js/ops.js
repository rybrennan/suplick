/**
 * Santa Ops Center — telemetry and feed.
 */

import { openModal, closeModal } from './modals.js';

function rand(min, max, decimals) {
  const v = min + Math.random() * (max - min);
  return decimals ? v.toFixed(decimals) : Math.round(v);
}

const FEED_LINES = [
  '[22:41:03] BLITZEN: Cardiovascular output nominal',
  '[22:41:15] NAUGHTY LIST SCAN: Suplick family - CLEARED',
  '[22:41:28] WARNING: Chimney diameter within tolerance',
  '[22:41:45] PRANCER: Requested snack break - DENIED',
  '[22:42:01] DASHER: Requesting vector to SUPLICK RESIDENCE',
  '[22:42:18] COMET: V-formation holding steady',
  '[22:42:33] DANCER: Wingspan nominal, altitude stable',
  '[22:42:47] VIXEN: Requesting clearance sector 7-G',
  '[22:43:02] CUPID: Cargo manifest verified — 3 packages',
  '[22:43:19] DONNER: Rudolph beacon confirmed, tracking',
];

export function initOps(modal, featureBtn, closeBtn, telemetryEl, feedEl) {
  let feedIndex = 0;

  function updateTelemetry() {
    const vel = rand(4.3, 5.1, 1);
    const alt = rand(28500, 34500, 0);
    const payload = rand(81, 87, 1);
    const lumens = rand(820, 875, 0);
    const cookies = rand(8, 15, 0);
    const milk = rand(36, 40, 0);
    const eta = Math.random() > 0.3 ? 'CALCULATING...' : rand(8, 47, 0) + 'm ' + rand(12, 59, 0) + 's';
    const lat = (40 + Math.random() * 2).toFixed(2);
    const lon = (-78 - Math.random() * 2).toFixed(2);
    telemetryEl.innerHTML = [
      'SLEIGH VELOCITY ........ Mach ' + vel,
      'ALTITUDE ............... ' + alt.toLocaleString() + ' ft',
      'CURRENT POS ............ ' + lat + '°N, ' + lon + '°W',
      'PRESENT PAYLOAD ........ ' + payload + '%',
      'REINDEER BIOMETRICS .... NOMINAL',
      'RUDOLPH LUMINOSITY ..... ' + lumens + ' lumens',
      'COOKIE RESERVES ........ CRITICAL (' + cookies + '%)',
      'MILK TEMPERATURE ....... ' + milk + '°F (OPTIMAL)',
      'ETA TO CHIMNEY ......... ' + eta,
    ].map(l => '<span>' + l + '</span><br>').join('');
  }

  function updateFeed() {
    const scroll = FEED_LINES.slice(feedIndex).concat(FEED_LINES.slice(0, feedIndex)).join('\n');
    feedEl.innerHTML = '<div class="ops-feed-line">' + scroll.replace(/\n/g, '</div><div class="ops-feed-line">') + '</div>';
    feedIndex = (feedIndex + 1) % FEED_LINES.length;
  }

  updateTelemetry();
  updateFeed();

  featureBtn.addEventListener('click', () => {
    openModal(modal, 'ops', () => [
      setInterval(updateFeed, 2000),
      setInterval(updateTelemetry, 1500),
    ]);
  });
  closeBtn.addEventListener('click', () => closeModal(modal, 'ops'));
}
