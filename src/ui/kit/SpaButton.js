import React from 'react';
import {withRouter} from 'react-router';
import Button from './Button';

const SpaButton = (props) => {
  return (
    <Button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        props.history.push(props.href);
      }}
    />
  );
}

export default withRouter(SpaButton);
