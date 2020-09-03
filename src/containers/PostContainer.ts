import {connect} from 'react-redux';
import {Post} from '../components/Post';
import {IRootState} from '../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  post: state.posts.post
});

export const PostContainer = connect(mapStateToProps, null)(Post);
