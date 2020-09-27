import {connect} from 'react-redux';

import {Comment} from '../components/Comment';
import {deleteComment} from '../actions/commentsActions';

const mapDispatchToProps = (dispatch: any) => ({
  deleteComment: (commentId: number) => dispatch(deleteComment(commentId))
});

export const CommentContainer = connect(null, mapDispatchToProps)(Comment);
