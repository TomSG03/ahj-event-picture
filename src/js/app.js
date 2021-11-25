import Control from './control';

const galeryDom = document.getElementById('galery');

const galery = new Control(galeryDom);
galery.start();

// const link = document.querySelectorAll('input');
// const addButton = document.querySelector('[data-button=add]');
// const flow = document.querySelector('[data-flow=picture]');

// function createBox(linkPickture, namePicture) {
//   const img = document.createElement('img');
//   img.src = linkPickture;
//   img.alt = namePicture;
//   img.addEventListener('error', () => {
//     alert('Error');
//   });
//   img.addEventListener('load', () => {
//     const htmlText = '<div class="delete"></div>';
//     const div = document.createElement('div');
//     div.classList = 'picture';
//     div.innerHTML = htmlText;
//     div.append(img);
//     flow.append(div);
//     flow.scrollLeft = flow.scrollWidth;
//   });
// }

// function evenAdd() {
//   createBox(link[1].value, link[0].value);
// }

// link[1].addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     evenAdd();
//   }
// });

// addButton.addEventListener('click', () => {
//   evenAdd();
// });

// flow.addEventListener('click', (e) => {
//   if (e.target.className === 'delete') {
//     e.target.parentElement.remove();
//   }
// });
