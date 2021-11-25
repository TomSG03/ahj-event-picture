import Flow from './flow';

export default class Control {
  constructor(host) {
    this.host = host;
    this.flow = new Flow(host.querySelector('[data-flow=picture]'));
    this.link = this.host.querySelectorAll('input');
    this.addButton = this.host.querySelector('[data-button=add]');
    this.error = this.host.querySelector('[data-error=URL]');
  }

  createBox(linkPickture, namePicture) {
    this.error.style.visibility = 'hidden';
    const img = document.createElement('img');
    img.src = linkPickture;
    img.alt = namePicture;
    img.title = namePicture;
    img.addEventListener('error', () => {
      this.showError();
    });
    img.addEventListener('load', () => {
      this.flow.addFlow(img);
    });
  }

  showError() {
    this.error.style.visibility = 'visible';
  }

  start() {
    this.link[1].addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.evenAdd();
      }
    });

    this.addButton.addEventListener('click', () => {
      this.evenAdd();
    });
  }

  evenAdd() {
    this.createBox(this.link[1].value, this.link[0].value);
    this.clearInput();
  }

  clearInput() {
    [...this.link].forEach((e) => {
      e.value = '';
    });
  }
}
