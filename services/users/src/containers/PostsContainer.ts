import {connect} from 'react-redux';
import {Posts} from '../components/Posts';
import {IRootState} from '../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  list: state.posts.list
});

export const PostsContainer = connect(mapStateToProps)(Posts);
