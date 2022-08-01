const btn = document.querySelector('#grid-size');
const container = document.querySelector('.container');

btn.addEventListener('click', e => {
  const size = prompt('Enter grid side length: ');

  for (let i = 0; i < size ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('children', 'long-trans');
    div.style.width = `calc(98vw/${size})`;
    div.style.height = `calc(98vw/${size})`;
    container.appendChild(div);
  }
})


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