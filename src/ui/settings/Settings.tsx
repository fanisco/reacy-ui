import React, {useContext} from 'react';
import styled from 'styled-components';
import {Form} from 'reacy-ui';
import {Context} from '../../state/Context';
import {setSettings} from '../../state/actions';

export const Settings: React.FC<{}> = () => {
  const {state, dispatch} = useContext(Context);
  return (
    <div>
      <Form fields={[
        {name: 'compact', title: 'Compact', type: 'switch'},
        {name: 'stacked', title: 'Stacked', type: 'switch'}
      ]}
            wrap={true}
            data={state.settings}
            onChange={(name, value) => setSettings({dispatch, name, value})}/>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;
