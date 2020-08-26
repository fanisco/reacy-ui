import * as React from 'react';
import {Context} from './Context';

/**
 * Adds popupManager to props
 */
export function withPopups(managerName: string = 'popupManager'): any {
  return (WrappedComponent: any): any => {
    return (props: any) => {
      return (
        <Context.Consumer>
          {context => (
            <WrappedComponent
              {...props}
              {...{[managerName]: context.popupManager}}
            />
          )}
        </Context.Consumer>
      );
    };
  };
}
