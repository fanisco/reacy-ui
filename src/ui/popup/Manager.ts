import { observable, computed } from 'mobx';

export default class Manager {
    @observable index: number = 1000;

    static instance: Manager;
    static getInstance(): Manager {
        if (Manager.instance === undefined) {
            Manager.instance = new Manager();
        }
        return Manager.instance;
    }
}
