import { FlexBox } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { HamburgerIcon } from '../../components/Atoms/Common/Icons/HamburgerIcon';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';
import { Text } from '../../components/Atoms/Common/Text';
import { Button } from '../../components/Atoms/Common/Buttons/Button';
import { ProfileIcon } from '../../components/Atoms/Common/Icons/ProfileIcon';
import { BadgeShowcase } from '../../components/Molecules/Common/BadgeShowcase';
import { ProfileBio } from '../../components/Molecules/Common/ProfileBio';

export default function Profile(props){
    return(
        <FlexBox align = "stretch" justify = "center" bgColor = "#A5CEFF">
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
        </FlexBox>


    );


}