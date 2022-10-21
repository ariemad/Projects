import Search from '../img/search-svgrepo-com.svg';
import { updateDisplay } from './weatherDisplay';

function weatherSearchBar() {
  const container = document.getElementById('container');

  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');

  const input = document.createElement('input');
  input.classList.add('input');

  const btn = document.createElement('button');
  btn.classList.add('btn');

  const img = new Image();
  img.src = Search;
  btn.append(img);

  btn.addEventListener('click', () => {
    const toSearch = input.value;
    input.value = '';
    updateDisplay(toSearch);
  });

  searchBar.append(input, btn);
  container.append(searchBar);
}

export default weatherSearchBar;
