import {sizes} from './sizes';
import {Core} from '../common/interfaces';

export const getElementSizes = ({blockSize: size}: Core.IStyled) => `
  height: ${sizes.elementHeight[size]};
  padding: ${sizes.spacingY[size]} ${sizes.spacingX[size]};
  font-size: ${sizes.fontSize[size]};
  border-radius: ${sizes.borderRadius[size]};
`;