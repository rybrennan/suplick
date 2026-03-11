/**
 * Hallmark movie title generator.
 */

import { playChime } from './utils.js';

const PREFIXES = ['A', 'The', 'My', 'One', 'This', 'Love'];
const ADJECTIVES = ['Snowy', 'Cozy', 'Magical', 'Mistletoe', 'Gingerbread', 'Evergreen', 'Frosty'];
const NOUNS = ['Kiss', 'Prince', 'Miracle', 'Secret', 'Promise', 'Wish', 'Heart'];
const PREPOSITIONS = ['in', 'of', 'at', 'Under the'];
const LOCATIONS = ['Pinecone Falls', 'Snowflake Lane', 'Holly Springs', 'Mistletoe Manor', 'Candy Cane Creek', 'the Mistletoe Inn'];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function initHallmark(elements) {
  const { nameInput, generateBtn, poster, titleEl, taglineEl, castEl } = elements;

  generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'You';
    const template = Math.random();
    let title;
    if (template < 0.4) {
      title = pick(PREFIXES) + ' ' + pick(ADJECTIVES) + ' ' + pick(NOUNS) + ' ' + pick(PREPOSITIONS) + ' ' + pick(LOCATIONS);
    } else if (template < 0.7) {
      title = pick(PREFIXES) + ' ' + pick(ADJECTIVES) + ' ' + pick(NOUNS) + ' of ' + pick(NOUNS);
    } else {
      title = 'Love Under the ' + pick(LOCATIONS).replace(/^the /i, '');
    }
    titleEl.textContent = title;
    taglineEl.textContent = 'This Christmas, ' + name + ' discovers that the greatest gift... was love all along.';
    castEl.textContent = 'Starring ' + name + ' and a mysteriously handsome small-town baker';
    poster.style.display = 'block';
    playChime();
  });
}
