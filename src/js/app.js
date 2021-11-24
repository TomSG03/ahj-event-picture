const link = document.querySelectorAll('input');
const addButton = document.querySelector('[data-button=add]');
const flow = document.querySelector('[data-flow=picture]');

function createBox(linkPickture, namePicture) {
  const htmlText = `<div class="delete"></div>
    <img src=${linkPickture} alt=${namePicture}>`;
  const div = document.createElement('div');
  div.classList = 'picture';
  div.innerHTML = htmlText;
  flow.append(div);
}

function evenAdd() {
  createBox(link[1].value, link[0].value);
  flow.scrollLeft = flow.scrollWidth;
}

link[1].addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    evenAdd();
  }
});

addButton.addEventListener('click', () => {
  evenAdd();
});

flow.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
});
