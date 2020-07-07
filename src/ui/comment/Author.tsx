import React from 'react'
import styled from 'styled-components';
import colors from '../colors';
import formatDate from '../../helpers/formatDate';
import IAuthor from '../../core/interface/IAuthor';

interface IProps extends IAuthor {
  time?: number;
  compact?: boolean;
}

/**
 * Component for displaying person card.
 */
const Author: React.FC<IProps> = ({id, name, photo, time, ...props}) => {
  const
    compact = !!props.compact,
    photoSize = compact ? 24 : 32,
    styledProps = {compact: compact, photoSize: photoSize};

  return(
    <Wrapper>
      {photo ? <Photo src={photo} {...styledProps}/> : ''}
      <NameWrapper {...styledProps}>
        <Name {...styledProps}>{name}</Name>
        {time ? <Time {...styledProps}>{formatDate(new Date(time))}</Time> : ''}
      </NameWrapper>
    </Wrapper>
  )
};

interface StyledProps {
  compact?: boolean
  photoSize?: number
}

const Wrapper = styled.div`
  margin-bottom: 3px;
  display: flex;
  width: 100%;
`;

const Photo = styled.img<StyledProps>`
  margin-right: 5px;
  width: ${props => props.photoSize}px;
  height: ${props => props.photoSize}px;
  border: 1px solid #00000085;
  border-radius: 2px;
`;

const NameWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${props => props.compact ? 'row' : 'column'};
`;

const Name = styled.h5<StyledProps>`
  margin: 0;
  margin-bottom: ${props => props.compact ? 0 : 4}px;
  font-weight: 500;
  font-size: 14px;
  line-height: ${props => props.compact ? props.photoSize : 16}px;
  color: ${colors.dark}
`;

const Time = styled.time<StyledProps>`
  margin-left: ${props => props.compact ? 5 : 0}px;
  font-size: 12px;
  line-height: ${props => props.compact ? props.photoSize : 12}px;
  color: ${colors.gray}
`;

export default Author;
