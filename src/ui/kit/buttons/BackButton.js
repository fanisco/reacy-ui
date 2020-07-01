import React from 'react';
import {withRouter} from 'react-router';
import {Button, Icon} from 'reacy-ui';

const BackButton = (props) => {
  const {history, children = 'Back'} = props;
  return (
    <Button
      {...props}
      mods={['inline', 'bold', 'lg']}
      onClick={(e) => {
        e.preventDefault();
        history.goBack();
      }}><Icon name="arrow-left" size="lg"/>{children}</Button>
  );
};

export default withRouter(BackButton);
