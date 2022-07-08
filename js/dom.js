// pakeisti antraste i Dynamic Heading

// issisaugom nuoroda i h1 el
const h1El = document.getElementById('main-heading');
console.log('h1El ===', h1El);
h1El.textContent = 'Dynamic Heading';

// nusitaikyti i el su id text
const textEl = document.getElementById('text');
// paimam texta is elemento
const rez = textEl.textContent;
console.log('rez ===', rez);

// prideti nauja elementa i div su id box
// memoryLocation 00xxlsq
const boxEl = document.getElementById('box');
// innerHTML - sugeneruoti html struktura is string
boxEl.innerHTML = '<h3>As esu dinamiskas <i>elementas</i></h3>';
// boxEl.textContent = '<h3>As esu dinamiskas <i>elementas</i></h3>';