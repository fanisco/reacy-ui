import React from 'react'
import styled from 'styled-components';
import IPerson from '../../core/interface/IPerson';

export const Person: React.FC<IPerson & {descr?: string; photoSize?: number;}> = ({id, name, descr, photo, photoSize = 32, ...props}) => {
  return(
    <Wrapper photoSize={photoSize}>
      {photo ? <Photo src={photo} alt={name} photoSize={photoSize}/> : ''}
      <Name isDescr={!!descr}>{name}</Name>
      {descr ? <Descr>{descr}</Descr> : ''}
    </Wrapper>
  )
};

const Wrapper = styled.div<{photoSize: number;}>`
  display: grid;
  grid-template-areas:
    "a b"
    "c d"
  ;
  grid-template-columns: ${props => props.photoSize}px 1fr;
  grid-template-rows: ${props => props.photoSize / 2}px ${props => props.photoSize / 2}px;
`;

const Photo = styled.img<{photoSize: number;}>`
  grid-row-start: a;
  grid-column-start: a;
  grid-row-end: c;
  grid-column-end: c;
  width: ${props => props.photoSize}px;
  height: ${props => props.photoSize}px;
`;

const Name = styled.span<{isDescr?: boolean}>`
  grid-row-start: b;
  grid-column-start: b;
  grid-row-end: ${props => props.isDescr ? 'b' : 'd'};
  grid-column-end: ${props => props.isDescr ? 'b' : 'd'};
  font-size: var(--rcy-fs-sm);
`;

const Descr = styled.div`
  grid-row-start: d;
  grid-column-start: d;
  grid-row-end: d;
  grid-column-end: d;
  font-size: var(--rcy-fs-xs);
`;
