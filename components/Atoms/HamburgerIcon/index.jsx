import{ GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

const Icon = styled(GiHamburgerMenu)`
position: relative;
top: 35px;
left: 90%;
`;
export function HamburgerIcon(){
    return(
        <Icon size = {25}/>
    );
}