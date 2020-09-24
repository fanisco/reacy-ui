import React from 'react';

import {Buttons} from './interfaces';
import {StyledButton} from './Button';

export const StyledAnchor = StyledButton.withComponent('a');
export const Anchor: React.FC<Buttons.IButton> = ({onClick, children, title, href, blockSize = 'md', colorStyle = 'gray'}) => {
  return(
    <StyledAnchor
      onClick={onClick}
      title={title}
      href={href}
      blockSize={blockSize}
      colorStyle={colorStyle}
    >
      {children}
    </StyledAnchor>
  );
};
