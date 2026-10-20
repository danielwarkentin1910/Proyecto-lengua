const searchInput = document.getElementById('search');
const cards = [...document.querySelectorAll('.project-card')];
const filters = [...document.querySelectorAll('.filter')];
const empty = document.getElementById('empty');
let activeFilter = 'todos';
function updateCards(){
  const term = searchInput.value.trim().toLocaleLowerCase('es');
  let shown = 0;
  cards.forEach(card => {
    const categoryMatch = activeFilter === 'todos' || card.dataset.category === activeFilter;
    const searchMatch = !term || (card.dataset.search + ' ' + card.innerText).toLocaleLowerCase('es').includes(term);
    const visible = categoryMatch && searchMatch;
    card.hidden = !visible;
    if(visible) shown++;
  });
  empty.hidden = shown !== 0;
}
filters.forEach(btn => btn.addEventListener('click', () => {
  activeFilter = btn.dataset.filter;
  filters.forEach(item => item.classList.toggle('active', item === btn));
  updateCards();
}));
searchInput.addEventListener('input', updateCards);
