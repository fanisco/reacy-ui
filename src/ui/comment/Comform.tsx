import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Forms, Buttons, Misc, Layout} from 'reacy-ui';
import {Context} from '../../state/Context';
import {addComment, setContextComment} from '../../state/actions';

export const Comform: React.FC<{}> = () => {
  const [comment, setComment] = useState('');
  const {state, dispatch} = useContext(Context);
  const [ctrlPressed, setCtrlPressed] = useState(false);

  const ctxComment = state.comments.list.find(c => c.id === state.contextCommentId);
  const ctxCommentAuthor = state.comments.meta.authors.find(a => a.id === (ctxComment && ctxComment.authorId));

  const submit = async () => {
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
      submit();
    }
  };
  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setCtrlPressed(false);
    }
  };
  const onCommentChange = (v: string) => setComment(v);
  const onContextCommentDismiss = () => setContextComment({dispatch, id: null});

  return (
    <Wrapper isContextComment={!!ctxComment}>
      <Pinned>
        <Layout.Container>
          <Inner>
            {ctxComment ? (
              <ReferenceWrapper>
                <Misc.Reference
                  id={ctxComment.id}
                  title={ctxCommentAuthor ? `${ctxCommentAuthor.name} said:` : 'Reply to comment'}
                  descr={ctxComment.text.length >= 40 ? ctxComment.text.slice(0, 40) + '...' : ctxComment.text}
                  onCloseClick={onContextCommentDismiss}
                />
              </ReferenceWrapper>
            ) : ''}
            <FormWrapper>
              <CommentArea
                name="comment"
                type="textarea"
                value={comment}
                placeholder="Type your comment here..."
                {...{onKeyDown, onKeyUp, onChange: onCommentChange}}
              />
              <ButtonWrapper>
                <Buttons.Button
                  onClick={submit}
                  mods={['outline', 'rounded', 'primary', 'bold']}
                  disabled={!comment.length}
                ><Misc.Icon name="paper-plane"/> Send</Buttons.Button>
              </ButtonWrapper>
            </FormWrapper>
          </Inner>
        </Layout.Container>
      </Pinned>
    </Wrapper>
  );
};

const Wrapper = styled.div<{isContextComment?: boolean}>`
  position: relative;
  padding: 10px;
  height: ${props => props.isContextComment ? 140 : 80}px;
  transition: height 0.35s ease-in-out;
`;

const Pinned = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Inner = styled.div`
  width: 100%;
  padding: 10px;
`;

const FormWrapper = styled.div`
  position: relative;
`;

const CommentArea = styled(Forms.Textarea)`
  textarea& {
    height: 80px;
    resize: none;
    padding-right: 120px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
`;

const ReferenceWrapper = styled.div`
  margin-bottom: 5px;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  bottom: 10px;
  margin: auto;
  height: 40px;
`;
