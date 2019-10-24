import React from 'react';
import styled from 'styled-components';
import IInputProps from '../IInputProps';
import { Colors, Fonts, Dims } from '../../constants';
import { Styles, Sizes } from '../../enums';

interface IProps extends IInputProps {
    onChange: (value: boolean) => void;
    size?: Sizes;
}

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
export const Switch: React.FC<IProps> = ({ size = Sizes.xs, ...props }) => {
    const dims = Dims[size];
    const captionDims = Dims.md;
    return (
        <Wrapper>
            <Caption active={props.value} dims={captionDims}>{props.name}</Caption>
            <Trigger
                active={props.value}
                dims={dims}
            />
            <Hidden>
                <input
                    type="checkbox"
                    name={props.id + ''}
                    checked={props.value}
                    onChange={() => {
                        props.onChange && props.onChange(!props.value);
                    }}
                />
            </Hidden>
        </Wrapper>
    )
};

interface StyledProps {
    active: boolean;
    dims?: any;
}

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    
    & + & {
        margin-left: 10px;
    }
`;

const Caption = styled.span<StyledProps>`
    font: ${props => props.dims.fontSize}px/${props => props.dims.lineHeight} "${Fonts.ff}";
`;

const Trigger = styled.div<StyledProps>`
    box-sizing: border-box;
    position: relative;
    margin-left: 5px;
    width: ${props => props.dims.elementHeight * 2}px;
    height: ${props => props.dims.elementHeight}px;
    border-radius: ${props => props.dims.elementHeight}px;
    background-color: ${props => props.active ? Colors[Styles.success].baseL2 : Colors[Styles.default].baseL1};
    cursor: pointer;
    box-shadow: inset 0.5px 0.5px 3px ${props => props.active ? Colors[Styles.success].baseL0 : Colors[Styles.default].baseL0};
    transition: background-color 0.15s ease-in-out;
    
    &:hover {
        background-color: ${props => props.active ? Colors[Styles.success].baseL3 : Colors[Styles.default].baseL2};
        transition: all 0.15s ease-in-out 0.15s;
    }
    &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: ${props => props.dims.elementHeight - 4}px;
        height: ${props => props.dims.elementHeight - 4}px;
        border-radius: 50%;
        background-color: white;
        transform: translateX(${props => props.active ? props.dims.elementHeight : 0}px);
        box-shadow: 0.5px 0.5px 3px ${props => props.active ? Colors[Styles.success].baseL0 : Colors[Styles.default].baseL0};
        transition: transform 0.15s ease-in-out;
    }
`;

const Hidden = styled.div`
    margin: 0;
    position: absolute;
    visibility: hidden;
    opacity: 0;
`;
