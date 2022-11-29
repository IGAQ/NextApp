import React from 'react';

import styled from 'styled-components';
import {getFilterFromHex} from '../../../../../lib/colorsHelper';
import {iconsPaths} from '../../../../../lib/constants/iconsPaths';

const StyledIcon = styled.div`
  width: ${props => `${props.size}rem` || '1rem'};
  height: ${props => `${props.size}rem` || '1rem'};
  background-image: url(${props => props.icon || iconsPaths.reportIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${props => props.cssTransform || 'none'};
  ${props => getFilterFromHex(props.colorHexCode ?? '#000')}
`;

export function Icon({icon = iconsPaths.reportIcon, size, cssTransform, colorHexCode, ...props}) {
    return (
        <StyledIcon icon={icon} size={size} cssTransform={cssTransform} {...props} />
    );
}
