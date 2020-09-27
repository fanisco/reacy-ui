import React from 'react';
import {withRouter} from 'react-router';
import {Buttons, Misc} from 'reacy-ui';

const BackButton = (props) => {
  const {history, children = 'Back'} = props;
  return (
    <Buttons.Button
      {...props}
      mods={['inline', 'bold', 'lg']}
      onClick={(e) => {
        e.preventDefault();
        history.goBack();
      }}><Misc.Icon name="arrow-left" size="lg"/>{children}</Buttons.Button>
  );
};

export default withRouter(BackButton);
