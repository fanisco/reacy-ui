import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Layout} from 'reacy-ui';

import {Context} from './state/Context';
import {fetchUsers} from './state/actions';

import {Users} from './ui/Users';
import {UserCard} from './ui/UserCard';
import {Post} from './ui/Post';

import {IUser} from './types/IUser';

function App() {
  const {state, dispatch} = useContext(Context);
  useEffect(() => {
    fetchUsers<IUser[]>({dispatch});
  }, []);
  return (
    <Layout.Container>
      <Router>
        <Route path="/posts/:id/" render={props => <Post id={props.match.params.id}/>}/>
        <Route path="/" exact>
          <Users/>
          <UserCard/>
        </Route>
      </Router>
    </Layout.Container>
  );
}

export default App;
