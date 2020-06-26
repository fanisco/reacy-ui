import React from 'react';
import {withRouter} from 'react-router';
import {Button} from 'reacy-ui';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = (props) => {
  const {history, caption = 'Back'} = props;
  return (
    <Button
      {...props}
      caption={caption}
      mods={['inline', 'gray', 'lg']}
      icon={faArrowLeft}
      onClick={(e) => {
        e.preventDefault();
        history.goBack();
      }}/>
  );
};

export default withRouter(BackButton);
