import React from 'react';
import styled from 'styled-components';
import IInputProps from '../interface/IInputProps';
import IStyledProps from '../interface/IStyledProps';
import {Colors, Dims} from '../constants';
import {Sizes, Styles} from '../enums';
import {getColors} from '../helpers';

interface IProps extends IInputProps {
    onChange: (value: boolean) => void;
}

/**
 * Component for displaying switch wich replaces by it self the boolean checkbox input.
 */
export const Switch: React.FC<IProps> = ({ style = Styles.default, size = Sizes.xs, ...props }) => {
    const colors = getColors(style);
    const dims = Dims[size];
    return (
        <Wrapper>
            <Trigger
                state={props.value}
                dims={dims}
                colors={colors}
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

interface StyledProps extends IStyledProps {
    state?: boolean | null;
}

const Wrapper = styled.label`
    display: flex;
    align-items: center;
    
    & + & {
        margin-left: 10px;
    }
`;

const Trigger = styled.div<StyledProps>`
    box-sizing: border-box;
    position: relative;
    width: ${props => props.dims.elementHeight * 2}px;
    height: ${props => props.dims.elementHeight}px;
    border-radius: ${props => props.dims.elementHeight}px;
    background-color: ${props => props.colors.idleColor};
    cursor: pointer;
    box-shadow: inset 0.5px 0.5px 3px ${props => props.colors.shadowColor};
    transition: background-color 0.15s ease-in-out;
    
    &:hover {
        background-color: ${props => props.colors.hoverColor};
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
        transform: translateX(${props => props.state ? props.dims.elementHeight : 0}px);
        box-shadow: 0.5px 0.5px 3px ${props => props.colors.shadowColor};
        transition: transform 0.15s ease-in-out;
    }
    
    ${props => props.state && `
        background-color: ${Colors[Styles.success].a400};
        
        &:hover {
        background-color: ${Colors[Styles.success].a350};
        }
    `}
`;

const Hidden = styled.div`
    margin: 0;
    position: absolute;
    visibility: hidden;
    opacity: 0;
`;
