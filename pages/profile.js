
import { FlexBox, Wrapper } from '../styles/globals';
import { Spacer } from '../components/Atoms/Spacer';
import { HamburgerIcon } from '../components/Atoms/HamburgerIcon';
import { PostTitle } from '../components/Molecules/PostTitle';
import { Text } from '../components/Atoms/Text';
import {Badge} from '../components/Atoms/Badge';
import { Button } from '../components/Atoms/Button';
import { ProfileIcon } from '../components/Atoms/ProfileIcon';
import { PostTag } from '../components/Atoms/PostTag';
import { BadgeShowcase } from '../components/Molecules/BadgeShowcase';
export default function Profile(props){    
    return(
        <Wrapper align = "stretch" justify = "center">
            <HamburgerIcon/>
            <PostTitle title = "Profile"/>
            <FlexBox padding = "25px 0px" align = "center" bgColor = "#fff9f2">
                <ProfileIcon />
                <Text text = "dubumelts" weight = "600" size = "1.5rem"/>
                <Spacer axis="vertical" size={15}/>
                <FlexBox margin = "0 20px" bgColor = "#ff758c" borderRadius = "0.5rem" boxShadow = "0 2px 4px -1px rgb(117 37 37 / 35%)">
                    <FlexBox margin = "10px 0 0 0">
                        <PostTag text = "2pts" tagBgColor = "#ff9eaf" tagColor='#000'/>
                    </FlexBox>
                    <FlexBox padding = "25px" margin = "5px 25px 15px 25px" bgColor = "#ff9eaf" borderRadius = "0.5rem" >
                        <Text text = "BIO" weight = "500" size = "0.85rem"/>
                        <Spacer axis="vertical" size={5}/>
                        <Text text = "i love playing video games and coding in my spare time. just trying to feel more comfortable about my sexuality!" size = "0.75rem"/>
                    </FlexBox>
                    <FlexBox padding = "0 0 15px 0"dir = "row" wrap = "nowrap" gap = "1rem">
                        <Badge/>
                        <Badge/>
                        <Badge/>
                    </FlexBox>
                </FlexBox>
                <Spacer axis="vertical" size={25}/>
                <FlexBox>
                    <Button size= "long" label = "View post history"/>
                    <Spacer axis="vertical" size={25}/>
                    <Button size= "long" label = "Saved resources"/>
                    <Spacer axis="vertical" size={25}/>
                    <Button size= "long" label = "Saved posts"/>
                </FlexBox>
            </FlexBox>
            <BadgeShowcase/>
        </Wrapper>


    );


}