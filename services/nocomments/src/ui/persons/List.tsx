import React, {useContext, useState} from 'react'
import styled from 'styled-components';
import {Lists} from 'reacy-ui';
import {Context} from '../../state/Context';
import {Person} from './Person';

export const List: React.FC<{}> = ({...props}) => {
  const {state, dispatch} = useContext(Context);
  const [tabId, setTabId] = useState(1);
  return (
    <Wrapper>
      <Tabs
        activeId={tabId}
        items={[{id: 1, caption: 'All'}, {id: 3, caption: 'Inbox'}, {id: 2, caption: 'Sent'}]}
        onClick={(tabId: number) => setTabId(tabId)}
      />
      <Lists.List>
        {state.comments.meta.authors.map(author => <Person {...author}/>)}
      </Lists.List>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Tabs = styled(Lists.Tabs)`
  margin-bottom: 10px;
`;
