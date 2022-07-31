const container = document.querySelector('.container');
for (let i = 0; i < 16 ** 2; i++) {
  let div = document.createElement('div');
  div.classList.add('children', 'long-trans');
  container.appendChild(div);
}

const squares = document.querySelectorAll('div.children');

squares.forEach(sq => {
  sq.addEventListener('mouseover', e => {
    e.target.classList.remove('long-trans');
    e.target.style.backgroundColor = 'navy';
  })
  sq.addEventListener('mouseout', e => {
    e.target.classList.add('long-trans');
    e.target.style.backgroundColor = 'turquoise';
  })
});