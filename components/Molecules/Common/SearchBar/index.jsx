import styled from 'styled-components';
import {Text} from '../../../Atoms/Common/Text';
import {BiSearch} from 'react-icons/bi';
import { Input } from '@mantine/core';
import {UserActionsHandlersContext} from '../../../../lib/contexts';
import {useContext, useState} from 'react';

const BarBase = styled.div`
  background-color: #FFFFFF;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  width: 65%;
  min-width: 250px;
`;

export function SearchBar() {
    const [searchInputValue, setSearchInputValue] = useState('');
    const {handleSearchTermChange} = useContext(UserActionsHandlersContext);

    return (
        <BarBase>
            <Input variant="unstyled" placeholder="Search topics you want to read" value={searchInputValue} onChange={(e) => {
                setSearchInputValue(e.target.value);
                handleSearchTermChange(e.target.value);
            }}/>
            <BiSearch size={25}/>
        </BarBase>
    );
}

