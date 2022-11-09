import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { HamburgerIcon } from '../../components/Atoms/HamburgerIcon';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { Text } from '../../components/Atoms/Text';
import { Button } from '../../components/Atoms/Button';
import { ProfileIcon } from '../../components/Atoms/ProfileIcon';
import { BadgeShowcase } from '../../components/Molecules/BadgeShowcase';
import { ProfileBio } from '../../components/Molecules/ProfileBio';

export default function Profile(props){
    return(
        <Wrapper align = "stretch" justify = "center" bgColor = "#A5CEFF">
            <HamburgerIcon/>
            <PostTitle title = "Profile"/>
            <Spacer axis="vertical" size={45}/>
            <FlexBox padding = "25px 0px" align = "center" bgColor = "#DFEEFF">
                <ProfileIcon marginRight = '0'/>
                <Text text = "John" weight = "600" size = "1.5rem"/>
                <Spacer axis="vertical" size={15}/>
                <ProfileBio/>
                <Spacer axis="vertical" size={25}/>
                <FlexBox>
                    <Button size= "long" label = "View post history"/>
                    <Spacer axis="vertical" size={25}/>
                    <Button size= "long" label = "Saved resources"/>
                    <Spacer axis="vertical" size={25}/>
                    <Button size= "long" label = "Saved posts"/>
                </FlexBox>
            </FlexBox>
            <Spacer axis="vertical" size={15}/>
            <BadgeShowcase/>
            <Spacer axis="vertical" size={55}/>
        </Wrapper>


    );


}