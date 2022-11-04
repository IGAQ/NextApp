import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';

const StyledScrollToTopButton = styled.button`
    position: fixed;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    right: 2rem;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: #FF758C;
    color: #FFF;
    width: 3rem;
    height: 3rem;
    margin : 0;
    cursor: pointer;
    padding: initial;
    z-index: 100;
`;

export function ScrollToTopButton({isVisible, ...otherProps}) {
    const handleClick = async () => {
        if (window) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <StyledScrollToTopButton {...otherProps} style={{ display: isVisible ? 'flex' : 'none' }} onClick={() => handleClick()}>
            <Icon icon={'/arrow.svg'} size={1} cssTransform={'rotate(0.25turn)'} />
        </StyledScrollToTopButton>
    );
}