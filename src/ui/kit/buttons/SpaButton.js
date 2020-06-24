import React from 'react';
import {withRouter} from 'react-router';
import Button from './Button';

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
}

export default withRouter(SpaButton);
