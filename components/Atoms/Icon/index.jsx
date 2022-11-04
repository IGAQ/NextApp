import React from 'react';

import styled from 'styled-components';

const StyledIcon = styled.div`
    width: ${props => `${props.size}rem` || '1rem'};
    height: ${props => `${props.size}rem` || '1rem'};
    background-image: url(${props => props.icon || '/ReportIcon.svg'});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${props => props.cssTransform || 'none'};
`;

export function Icon({icon = '/ReportIcon.svg', size, cssTransform, ...props}) {
    return (
        <StyledIcon icon={icon} size={size} cssTransform={cssTransform} {...props} />
    );
}
