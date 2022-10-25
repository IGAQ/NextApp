import styled from 'styled-components';
import { Text } from '../../Atoms/Text';
import {BiSearch} from 'react-icons/bi';

const BarBase = styled.div`
background-color: #FFFFFF;
border-radius: 25px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
padding: 0 10px 0 0 ;
width: 65%;
`;

export function SearchBar(){
    return(
        <BarBase>
            <Text padding= "10px 3rem 10px 19px" size = "0.75em" color ="#989898" text = "Search topics you want to read"/>
            <BiSearch size = {25} alignSelf = "flex-end"/>
        </BarBase>
    );
}

