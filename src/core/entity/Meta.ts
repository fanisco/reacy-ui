import Thing from './Thing';
import List from '../collection/List';

/**
 * Class to present meta data.
 */
export default class Meta extends Thing {
  constructor(meta: any) {
    super(meta);

    // Converting arrays to lists of records
    Object.keys(this.data).map(prop => {
      if (Array.isArray(this.data[prop])) {
        this.data[prop] = new List(this.data[prop])
      }
    })
  }

  /**
   * Get list if it exists.
   * @param {string} key
   * @return {List}
   */
  public getList(key: string): List {
    return this.data[key]
  }
}
