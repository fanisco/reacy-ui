import React from 'react'
import styled from 'styled-components';
import colors from '../colors';
import formatDate from '../../helpers/formatDate';

interface IAuthorProps {
  id: number
  name: string
  photo?: string
  time?: Date
  compact?: boolean
}

/**
 * Component for displaying person card.
 */
const Author = (props: IAuthorProps) => {
  const
    compact = !!props.compact,
    photoSize = compact ? 24 : 32,
    styledProps = { compact: compact, photoSize: photoSize };
  const
    photo = props.photo && <Photo src={props.photo} {...styledProps}/>,
    time = props.time && <Time {...styledProps}>{formatDate(props.time)}</Time>;

  return(
    <Wrapper>
      {photo}
      <NameWrapper {...styledProps}>
        <Name {...styledProps}>{props.name}</Name>
        {time}
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
