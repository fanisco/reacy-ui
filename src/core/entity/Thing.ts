import IData from '../interface/IData';
import IThing from '../interface/IThing';

/**
 * Class that fullfils itself with given data.
 */
export default class Thing implements IThing {
  public data: IData = {};

  constructor(data: any) {
    if (data instanceof Thing) {
      data = data.data
    }
    Object.keys(data).map(key => {
      this.data[key] = data[key]
    });
  }
}
