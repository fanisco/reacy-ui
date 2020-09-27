import React, {useEffect} from 'react';
import {Route, useLocation} from 'react-router-dom';
import {Layout} from 'reacy-ui';

import {UsersContainer} from './containers/UsersContainer';
import {PostContainer} from './containers/PostContainer';

export const App: React.FC<{
  fetchUsers: Function;
  fetchPost: Function;
  fetchComments: Function
}> = ({fetchUsers, fetchPost, fetchComments}) => {
  const location = useLocation();
  useEffect(() => {
    switch (true) {
      case location.pathname === '/':
        fetchUsers();
        break;
      case location.pathname.includes('/posts/'):
        fetchPost(1);
        fetchComments(1);
        break;
    }
  }, [location.pathname, fetchUsers, fetchPost, fetchComments]);
  return (
    <Layout.Container>
      <Route path="/posts/:id/">
        <PostContainer/>
      </Route>
      <Route path="/" exact>
        <UsersContainer/>
      </Route>
    </Layout.Container>
  );
}
