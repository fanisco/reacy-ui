import { observable, computed } from 'mobx';
import Popup from './Popup';

export default class Manager {
    index: number = 1000;
    popups: Dictionary = {};

    constructor() {
        this.documentClickHandler = this.documentClickHandler.bind(this);
        document.addEventListener('click', this.documentClickHandler, false);
    }

    register(popup: Popup) {
        this.popups[popup.id] = popup;
    }
    unregister(popup: Popup) {
        delete this.popups[popup.id];
    }
    documentClickHandler(event: Event) {
        for (const id in this.popups) {
            if (this.popups.hasOwnProperty(id)) {
                const popup = this.popups[id];
                const target = <Node>event.target;
                const parent = popup.node.parentNode;
                if (parent && target) {
                    if (parent.contains(target)) {
                        popup.toggle();
                    } else {
                        popup.hide();
                    }
                }
            }
        }
    }

    static instance: Manager;
    static getInstance(): Manager {
        if (Manager.instance === undefined) {
            Manager.instance = new Manager();
        }
        return Manager.instance;
    }
}

type Dictionary = {
    [x: number]: Popup
};
