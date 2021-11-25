export default class Flow {
  constructor(host) {
    this.host = host;
    this.init();
  }

  init() {
    this.host.addEventListener('click', (e) => {
      if (e.target.className === 'delete') {
        e.target.parentElement.remove();
      }
    });
  }

  addFlow(img) {
    const htmlText = '<div class="delete"></div>';
    const div = document.createElement('div');
    div.classList = 'picture';
    div.innerHTML = htmlText;
    div.append(img);
    this.host.append(div);
    this.host.scrollLeft = this.host.scrollWidth;
  }
}
