import React from 'react';
import {Layout} from 'reacy-ui';
import {Aside} from './components/layout/Aside'
import FormContainer from './containers/calc/FormContainer';

function App() {
  return (
    <Layout.Container>
      <Aside>
        <FormContainer/>
      </Aside>
    </Layout.Container>
  );
}

export default App;
