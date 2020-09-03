import {connect} from 'react-redux';
import {App} from '../App';
import {fetchUsers} from '../actions/usersActions';
import {fetchPost} from '../actions/postsActions';
import {fetchComments} from '../actions/commentsActions';

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (data: any) => dispatch(fetchUsers(data)),
  fetchPost: (postId: number) => dispatch(fetchPost(postId)),
  fetchComments: (postId: number) => dispatch(fetchComments(postId))
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
