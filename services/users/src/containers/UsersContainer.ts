import {connect} from 'react-redux';
import {setCurrentUser} from '../actions/usersActions';
import {Users} from '../components/Users';
import {IRootState} from '../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  list: state.users.list
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (data: any) => dispatch(setCurrentUser(data))
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
