import { SearchBar } from '../../Molecules/SearchBar';
import { FilterIcon } from '../../Atoms/FilterIcon';
import { FlexBox } from '../../../styles/globals';
import { Spacer } from '../../Atoms/Spacer';

export function SearchAndFilter(){
    return (
        <FlexBox dir = "row" justify-content = "space-between" align = "center" >
            <SearchBar/> 
            <Spacer axis="horizontal" size={15}/>          
            <FilterIcon/>
        </FlexBox>


    );
       

} 