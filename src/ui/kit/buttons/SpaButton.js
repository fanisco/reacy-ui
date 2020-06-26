import React from 'react';
import {withRouter} from 'react-router';
import {Button} from 'reacy-ui';

const SpaButton = (props) => {
  const {history, href} = props;
  return (
    <Button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        history.push(href);
      }}
    />
  );
};

export default withRouter(SpaButton);
