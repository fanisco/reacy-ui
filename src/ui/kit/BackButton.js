import React from 'react';
import {withRouter} from 'react-router';
import Button from './Button';
import {library, icon} from '@fortawesome/fontawesome-svg-core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);

const BackButton = (props) => {
  const {history, caption = 'Back'} = props;
  const arrowLeft = icon({prefix: 'fas', iconName: 'arrow-left'});
  console.log(arrowLeft, faArrowLeft);
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
