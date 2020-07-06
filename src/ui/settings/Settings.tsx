import React, {useContext} from 'react';
import styled from 'styled-components';
import {Form} from 'reacy-ui';
import {Context} from '../../state/Context';
import {setSettings} from '../../state/actions';

export const Settings: React.FC<{}> = () => {
  const {state, dispatch} = useContext(Context);
  return (
    <Wrapper>
      <Form fields={[
        {name: 'compact', title: 'Compact', type: 'checkbox'},
        {name: 'stacked', title: 'Stacked', type: 'checkbox'}
      ]}
            wrap={true}
            data={state.settings}
            onChange={(name, value) => setSettings({dispatch, name, value})}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;
