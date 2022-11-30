import { FlexBox } from '../../../../styles/globals';
import { Text } from '../../../Atoms/Common/Text';
import { PostTag } from '../../../Atoms/Post/PostTag';
import { Badge } from '../../../Atoms/Common/Badge';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { ProfileIcon } from '../../../Atoms/Common/Icons/ProfileIcon';
import {useContext} from 'react';
import {UserContext} from '../../../../lib/contexts';
import {badgesPaths} from '../../../../lib/constants/badgesPaths';

const opennessLevelToSvgs = {
    '-1': badgesPaths.openness.notSure,
    0: badgesPaths.openness.notOut,
    1: badgesPaths.openness.outToFew,
    2: badgesPaths.openness.semiOut,
    3: badgesPaths.openness.fullyOut,
    4: badgesPaths.openness.ally,
};

export function ProfileBio() {
    const user = useContext(UserContext);

    console.log(user, opennessLevelToSvgs[user?.openness?.opennessLevel]);

    return (
        <>
            <FlexBox padding='0 3rem 0 3rem' align="stretch" justify="center" bgColor="#DFEEFF">
                <FlexBox padding='1rem 2rem 1rem 2rem' bgColor='#ffffff' borderRadius='0.5rem'>
                    <Spacer axis='vertical' size={5} />
                    <ProfileIcon marginRight='0' AvaPic={badgesPaths.avatars[user.avatar ?? 'default']} />
                    <Text text={user.username ?? ''} weight='600' size='1.5rem' />
                    <PostTag text='2pts' tagBgColor='#C0DDFF' tagColor='#000' />
                    <Spacer axis='vertical' size={20} />
                    <Text text='ABOUT ME' weight='500' size='0.85rem' />
                    <Text
                        text={user.bio ?? ''}
                        size='0.9rem'
                        padding='1em' />
                </FlexBox>
                <Spacer axis='vertical' size={30} />
                <FlexBox dir='row' flexWrap='wrap' justify='space-around' bgColor='#ffffff' padding='1rem 2rem 1rem 2rem' borderRadius='0.5rem'>
                    <Badge badge={badgesPaths.flags.pride} />
                    <Badge badge={badgesPaths.pronouns[user.gender.genderPronouns.toLowerCase()] ?? ''} />
                    <Badge badge={opennessLevelToSvgs[user.openness.opennessLevel] ?? ''} />
                </FlexBox>
            </FlexBox>
        </>
    );
}