import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Form, Button, Icon} from 'reacy-ui';
import {Context} from '../../state/Context';

export const Comform: React.FC<{}> = () => {
  const [comment, setComment] = useState('');
  const {state, dispatch} = useContext(Context);
  return (
    <Wrapper>
      <FormWrapper>
        <Form fields={[{name: 'comment', type: 'textarea', placeholder: 'Type your comment here...'}]}
              data={{comment}}
              onChange={(name: string, value: string) => setComment(value)}/>
      </FormWrapper>
      <ButtonWrapper>
        <Button onClick={() => {
          // Create a new comment
          state.comments.records.create({
            text: comment,
            author_id: 1,
            comment_id: 0,
            date: (new Date()).getTime()
          });

          // Empty the textbox
          setComment('');
        }}
                mods={['outline', 'rounded', 'primary', 'bold']}
                disabled={!comment.length}
        ><Icon name="reply"/>Send</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 10px;
`;

const FormWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
