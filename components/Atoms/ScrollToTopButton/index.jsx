import React, {useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../Icon';

const StyledScrollToTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: #FF758C;
    color: #FFF;
    padding: 0.75em 1.5em;
    width: 5rem;
    height: 5rem;
    min-width: fit-content;
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
    margin : 0;
    cursor: pointer;
    z-index: 100;
`;

export function ScrollToTopButton({isVisible, ...otherProps}) {
    const [_isVisible] = useState(isVisible);

    const handleClick = async () => {
        if (window) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <StyledScrollToTopButton {...otherProps} style={{ display: _isVisible ? 'block' : 'none' }} onClick={() => handleClick()}>
            <Icon icon={'/arrow.svg'} size={1.4} cssTransform={'rotate(0.25turn)'} />
        </StyledScrollToTopButton>
    );
}