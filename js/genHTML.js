const boxEl = document.getElementById('box');

// <li>item 1</li>
let liStirng = '<ul>';
console.time('generuoti 1000 items');
for (let i = 1; i <= 10; i++) {
  // console.log(`<li>item ${i}</li>`);
  liStirng += `<li>item ${i}</li>`;
  // itemsUlEl.innerHTML += `<li>item ${i}</li>`;
}
// console.log('liStirng ===', liStirng);
liStirng += '</ul>';
boxEl.innerHTML = liStirng;

// boxEl.innerHTML = `<ul>${liStirng}</ul>`;
console.timeEnd('generuoti 1000 items');