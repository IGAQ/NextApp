import styled from 'styled-components';
import {Text} from '../../../Atoms/Common/Text';
import {BiSearch} from 'react-icons/bi';
import { Input } from '@mantine/core';

const BarBase = styled.div`
  background-color: #FFFFFF;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 0;
  width: 65%;
`;

export function SearchBar() {
    return (
        <BarBase>
            <Input variant="unstyled" placeholder="Search topics you want to read"/>
            <BiSearch size={25} alignSelf="flex-end"/>
        </BarBase>
    );
}

