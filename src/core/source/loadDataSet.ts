import {IDataSet, IUnmarkedDataSet} from '../interface/IDataSet';
import DataSet from './DataSet';

export const loadDataSet = (data: IUnmarkedDataSet, listType?: string): IDataSet => {
  return new DataSet(data, listType);
};

export const unloadDataSet = (dataSet: IDataSet): IUnmarkedDataSet => {
  return dataSet.unload();
};
