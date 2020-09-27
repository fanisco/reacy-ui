import React, {useState} from 'react';
import {Forms, Buttons} from 'reacy-ui';

import './Comform.scss';

export const Comform: React.FC<{postComment: Function}> = ({postComment, ...props}) => {
  const [comment, setComment] = useState('');
  const [ctrlPressed, setCtrlPressed] = useState(false);

  const submitComment = () => {
    if (comment === '') {
      return;
    }
    postComment({
      postId: 1,
      body: comment,
      name: 'new comment'
    });
    setComment('');
  };

  const onChange = (v: string) => setComment(v);
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
    <div className="comform">
      <Forms.Textarea
        className="comform__textarea"
        name="comment"
        type="textarea"
        value={comment}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
      <Buttons.Button
        className="comform__button"
        disabled={!comment}
        mods={['primary', 'outline']}
        onClick={submitComment}
      >Send</Buttons.Button>
    </div>
  );
};
