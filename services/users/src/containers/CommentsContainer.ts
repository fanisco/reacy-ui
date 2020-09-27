import {connect} from 'react-redux';

import {Comments} from '../components/Comments';
import {IRootState} from '../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  list: state.comments.list
});

export const CommentsContainer = connect(mapStateToProps)(Comments);
