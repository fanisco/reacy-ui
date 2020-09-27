import {connect} from 'react-redux';

import {Comform} from '../components/Comform';
import {postComment} from '../actions/commentsActions';
import {IComment} from '../types/IComment';

const mapDispatchToProps = (dispatch: any) => ({
  postComment: (comment: IComment) => dispatch(postComment(comment))
});

export const ComformContainer = connect(null, mapDispatchToProps)(Comform);
