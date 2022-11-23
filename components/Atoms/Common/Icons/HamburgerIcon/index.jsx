import {GiHamburgerMenu} from 'react-icons/gi';
import styled from 'styled-components';

const Icon = styled(GiHamburgerMenu)`
  position: relative;
  top: 35px;
  left: 85%;
`;

export function HamburgerIcon({onClick}) {
    return (
        <Icon size={25} onClick={onClick}/>
    );
}