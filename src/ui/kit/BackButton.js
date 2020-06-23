import React from 'react';
import {withRouter} from 'react-router';
import Button from './Button';

const BackButton = (props) => {
  const {history, caption = 'Back'} = props;
  return (
    <Button
      {...props}
      caption={caption}
      mods={['inline', 'gray']}
      onClick={(e) => {
        e.preventDefault();
        history.goBack();
      }}
    />
  );
}

export default withRouter(BackButton);
