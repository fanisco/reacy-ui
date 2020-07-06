import {IDataSet, IUnmarkedDataSet} from '../core/interface/IDataSet';
import DataSet from '../core/source/DataSet';
import Comment from '../core/entity/Comment';
import Author from '../core/entity/Author';
import List from '../core/collection/List';
import IData from '../core/interface/IData';

export const loadComments = ({rec, meta}: IUnmarkedDataSet): IDataSet => {
  return new DataSet({
    rec,
    meta: {
      authors: meta && meta.authors ? List.fromArray(meta.authors as IData[], null, Author) : null
    }
  }, Comment);
};

export const unloadComments = (dataSet: IDataSet): IUnmarkedDataSet => {
  return dataSet.unload();
};
