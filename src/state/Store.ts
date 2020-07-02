import { observable, autorun } from 'mobx';

class Store {
  @mobx.observable prop1 = 999;
  @mobx.observable prop2 = [100, 200];

  constructor() {
    this.load();
    autoSave(this, this.save.bind(this));
  }

  load() {
    if (/* there is data in sessionStorage */) {
      const data = /* somehow get the data from sessionStorage or anywhere else */;
      mobx.extendObservable(this, data);
    }
  }

  save(json) {
    // Now you can do whatever you want with `json`.
    // e.g. save it to session storage.
    alert(json);
  }
}
