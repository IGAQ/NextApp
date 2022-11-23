import { FlexBox } from '../../../../styles/globals';
import { Text } from '../../../Atoms/Common/Text';
import { PostTag } from '../../../Atoms/Post/PostTag';
import { Badge } from '../../../Atoms/Common/Badge';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { ProfileIcon } from '../../../Atoms/Common/Icons/ProfileIcon';

export function ProfileBio() {

    return (
        <>
            <FlexBox padding='0 3rem 0 3rem' align="stretch" justify="center" bgColor="#DFEEFF">
                <FlexBox padding='1rem 2rem 1rem 2rem' bgColor='#ffffff' borderRadius='0.5rem'>
                    <Spacer axis='vertical' size={5} />
                    <ProfileIcon marginRight='0' />
                    <Text text='John' weight='600' size='1.5rem' />
                    <PostTag text='2pts' tagBgColor='#C0DDFF' tagColor='#000' />
                    <Spacer axis='vertical' size={20} />
                    <Text text='ABOUT ME' weight='500' size='0.85rem' />
                    <Text
                        text='i love playing video games and coding in my spare time. just trying to feel more comfortable about my sexuality!'
                        size='0.9rem'
                        padding='1em' />
                </FlexBox>
                <Spacer axis='vertical' size={30} />
                <FlexBox dir='row' flexWrap='wrap' justify='space-around' bgColor='#ffffff' padding='1rem 2rem 1rem 2rem' borderRadius='0.5rem'>
                    <Badge badge='/PrideFlag.svg' />
                    <Badge badge='/HeHim.svg' />
                    <Badge badge='/OutToFew.svg' />
                </FlexBox>
            </FlexBox>
        </>
    );
}