import Flow from './flow';

export default class Control {
  constructor(host) {
    this.host = host;
    this.flow = new Flow(host.querySelector('[data-flow=picture]'));
    this.link = this.host.querySelectorAll('input');
    this.addButton = this.host.querySelector('[data-button=add]');
  }

  createBox(linkPickture, namePicture) {
    const img = document.createElement('img');
    img.src = linkPickture;
    img.alt = namePicture;
    img.title = namePicture;
    img.addEventListener('error', () => {
      alert('Error');
    });
    img.addEventListener('load', () => {
      this.flow.addFlow(img);
    });
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
  }
}
