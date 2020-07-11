import React, {useContext} from 'react'
import styled from 'styled-components';
import {Lists} from 'reacy-ui';
import {Context} from '../../state/Context';
import {Person} from './Person';

export const List: React.FC<{}> = ({...props}) => {
  const {state, dispatch} = useContext(Context);
  return (
    <Wrapper>
      <Lists.List>
        {state.comments.meta.authors.map(author => <Person {...author}/>)}
      </Lists.List>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin-bottom: 3px;
  display: flex;
  width: 100%;
`;
