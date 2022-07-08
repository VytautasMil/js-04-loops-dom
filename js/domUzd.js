const artTitle = document.getElementById('art__title');
const artDate = document.getElementById('art__date');
const artText = document.getElementById('art__text');
const colorsEl = document.getElementById('colors');

// naujesnis nusitaikymas querySelector
const lastColorsLiEl = document.querySelector('#colors li:last-child');

/*
 <article>
    <h2 id="art__title" class="art__title">Main title</h2>
    <p id="art__date">Date</p>
    <p id="art__text">Lorem ipsum dolor</p>
  </article>
  <li>Yellow</li> pakeisti paskutine spalva i 'violet'
*/

lastColorsLiEl.textContent = 'Violet';
lastColorsLiEl.style.backgroundColor = 'violet';
artTitle.textContent = 'pagrindinte antraste';
artDate.textContent = new Date().toLocaleString('lt-LT', { dateStyle: 'long' });
artText.textContent = artText.textContent + ' == sugeneruotas textas';
// artText.textContent += ' == sugeneruotas textas';

// prideti prie splalvu <li>Brown</li>
colorsEl.innerHTML += '<li>Brown</li>';
console.log('colorsEl.innerHTML ===', colorsEl.innerHTML);