import {SearchBar} from '../../../Molecules/Common/SearchBar';
import {FilterIcon} from '../../../Atoms/Common/Icons/FilterIcon';
import {FlexBox} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';

export function SearchAndFilter() {
    return (
        <FlexBox  dir='row' justify-content='space-between' align='center'>
            <SearchBar/>
            <Spacer axis='horizontal' size={50}/>
            <FlexBox>
                <FilterIcon/>
            </FlexBox>
        </FlexBox>
    );
} 