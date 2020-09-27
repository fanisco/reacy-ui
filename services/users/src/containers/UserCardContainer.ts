import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsActions';
import {UserCard} from '../components/UserCard';
import {IRootState} from '../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  user: state.users.user
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchPosts: (userId: number) => dispatch(fetchPosts(userId))
});

export const UserCardContainer = connect(mapStateToProps, mapDispatchToProps)(UserCard);
