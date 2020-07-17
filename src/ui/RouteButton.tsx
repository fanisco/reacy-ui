import React from 'react';
import {withRouter} from 'react-router';
import {Buttons} from 'reacy-ui';

export const RouteButton = withRouter<any, any>((props: any) => {
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
});
