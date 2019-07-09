import React from 'react'
import styled from 'styled-components';
import colors from '../colors';

interface IAuthorProps {
  id: number
  name: string
  photo?: string
  time?: string
}

/**
 * Component for displaying person card.
 */
const Author = (props: IAuthorProps) => {
  let
    photo = props.photo && <Photo src={props.photo}/>,
    time = props.time && <Time>{props.time}</Time>;

  return(
    <Wrapper>
      {photo}
      <NameWrapper>
        <Name>{props.name}</Name>
        {time}
      </NameWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  width: 100%;
`;

const Photo = styled.img`
  margin-right: 5px;
  width: 32px;
  height: 32px;
  border: 0 none;
  border-radius: 2px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h5`
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: ${colors.grayDark}
`;

const Time = styled.time`
  font-size: 12px;
  line-height: 12px;
  color: ${colors.gray}
`;

export default Author;
