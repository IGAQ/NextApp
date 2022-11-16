import {FlexBox} from '../../../../styles/globals';
import {Text} from '../../../Atoms/Common/Text';
import {PostTag} from '../../../Atoms/Post/PostTag';
import {Badge} from '../../../Atoms/Common/Badge';
import {Spacer} from '../../../Atoms/Common/Spacer';

export function ProfileBio() {

    return (
        <FlexBox margin="0 20px" bgColor="#ff758c" borderRadius="0.5rem"
            boxShadow="0 2px 4px -1px rgb(117 37 37 / 35%)">
            <FlexBox margin="10px 0 0 0">
                <Spacer axis="vertical" size={5}/>

                <PostTag text="2pts" tagBgColor="#ff9eaf" tagColor='#000'/>
                <Spacer axis="vertical" size={10}/>
            </FlexBox>
            <FlexBox padding="25px" margin="5px 25px 15px 25px" bgColor="#ff9eaf" borderRadius="0.5rem">
                <Text text="BIO" weight="500" size="0.85rem"/>
                <Spacer axis="vertical" size={5}/>
                <Text
                    text="i love playing video games and coding in my spare time. just trying to feel more comfortable about my sexuality!"
                    size="0.75rem"/>
            </FlexBox>
            <Spacer axis="vertical" size={5}/>
            <FlexBox padding="0 0 25px 0" dir="row" wrap="nowrap" gap="1rem">
                <Badge/>
                <Badge/>
                <Badge/>
            </FlexBox>
        </FlexBox>
    );
}