import styled from 'styled-components';
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
  width: 76%;
  min-width: 270px;
`;

export function SearchBar() {
    const [searchInputValue, setSearchInputValue] = useState('');
    const {handleSearchTermChange} = useContext(UserActionsHandlersContext);

    return (
        <BarBase>
            <Input variant="unstyled" style={{ width: '100%'}} rightSectionWidth={500} placeholder="Search topics you want to read" value={searchInputValue} onChange={(e) => {
                setSearchInputValue(e.target.value);
                handleSearchTermChange(e.target.value);
            }}/>
            <BiSearch size={25}/>
        </BarBase>
    );
}

