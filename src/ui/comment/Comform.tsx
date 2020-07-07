import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Form, Button, Icon} from 'reacy-ui';
import {Context} from '../../state/Context';
import {addComment} from '../../state/actions';

export const Comform: React.FC<{}> = () => {
  const [comment, setComment] = useState('');
  const {dispatch} = useContext(Context);
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const submitComment = async () => {
    if (!comment) {
      return;
    }
    // Create a new comment
    await addComment({
      dispatch,
      text: comment,
      authorId: 1,
      parentId: 0,
      date: (new Date()).getTime()
    });
    // Empty the textbox
    setComment('');
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setCtrlPressed(true);
    }
    if (e.key === 'Enter' && ctrlPressed) {
      submitComment();
    }
  };
  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setCtrlPressed(false);
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Form fields={[{name: 'comment', type: 'textarea', placeholder: 'Type your comment here...', onKeyDown, onKeyUp}]}
              data={{comment}}
              onChange={(name: string, value: string) => setComment(value)}/>
      </FormWrapper>
      <ButtonWrapper>
        <Button onClick={submitComment}
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
