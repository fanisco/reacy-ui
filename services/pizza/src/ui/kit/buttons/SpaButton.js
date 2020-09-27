import React from 'react';
import {withRouter} from 'react-router';
import {Buttons} from 'reacy-ui';

const SpaButton = (props) => {
  const {history, href} = props;
  return (
    <Buttons.Button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        history.push(href);
      }}
    />
  );
};

export default withRouter(SpaButton);
