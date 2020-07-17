import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Layout} from 'reacy-ui';

import {Provider} from './state/Context';

import {Users} from './ui/Users';
import {UserCard} from './ui/UserCard';
import {Post} from './ui/Post';

function App() {
  return (
    <Provider>
      <Layout.Container>
        <Router>
          <Route path="/posts/:id/" render={props => <Post id={props.match.params.id}/>}/>
          <Route path="/" exact>
            <Users/>
            <UserCard/>
          </Route>
        </Router>
      </Layout.Container>
    </Provider>
  );
}

export default App;
