import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Form, Button, Icon, Reference} from 'reacy-ui';
import {Context} from '../../state/Context';
import {addComment, setContextComment} from '../../state/actions';

export const Comform: React.FC<{}> = () => {
  const [comment, setComment] = useState('');
  const {state, dispatch} = useContext(Context);
  const [ctrlPressed, setCtrlPressed] = useState(false);

  const contextComment = state.comments.list.find(c => c.id === state.contextCommentId);

  const submitComment = async () => {
    if (!comment) {
      return;
    }
    // Create a new comment
    await addComment({
      dispatch,
      text: comment,
      authorId: 1,
      parentId: state.contextCommentId || 0,
      date: (new Date()).getTime()
    });
    // Empty the textbox
    setComment('');
    // Empty context comment
    setContextComment({dispatch, id: null});
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

  const onContextCommentDismiss = () => setContextComment({dispatch, id: null});

  return (
    <Wrapper>
      {contextComment ? (
        <ReferenceWrapper>
          <Reference id={contextComment.id} text={contextComment.text} mods={['xs', 'primary']} onCloseClick={onContextCommentDismiss}/>
        </ReferenceWrapper>
      ) : ''}
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

const ReferenceWrapper = styled.div`
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
