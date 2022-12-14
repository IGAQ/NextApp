import { FlexBox } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { Text } from '../../components/Atoms/Common/Text';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';
import { BackArrow } from '../../components/Atoms/Common/Buttons/BackArrow';

export default function CommunityGuidelines() {
    return (
        <FlexBox align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox style = {{alignSelf: 'center'}} align='center' bgColor='white' maxWidth = "50em">
                <PostTitle title='Community Guidelines' />
                <Spacer axis='vertical' size={35} />
                <FlexBox align='flex-start' bgColor='white' padding = "0 2em">
                    <Text
                        text='We want IGAQ to be an authentic and safe place for our users to explore their sexualities. Help us foster this community by treating everyone with respect. Don’t post hate, troll, or spam. To meet the collective goals of our community, it’s important that all members feel safe and supported. To help everyone have the best possible experience, please take a look at our community guidelines:'
                        size='0.9em' />
                    <Spacer axis='vertical' size={45} />

                    <Text
                        text='Positive guidelines'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    <ul>
                        <li>
                            <Text text='Feel free to post questions and start discussions on any topics relating to your sexuality, identity, or coming-out stories.' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Treat others as you would treat them in real life' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Be polite and communicate with respect' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Respect the privacy of other community members' size='0.9em' />
                        </li>
                    </ul>
                    <Spacer axis='vertical' size={45} />
                    <Text
                        text='Rules and restrictions'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    
                    <ul>
                        <li>
                            <Text text='Don’t share personal or private information' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Don’t use homophobic slurs' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Don’t post fake stories to gain sympathy or pity' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Don’t post promotional content' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Understand their identity or sexuality' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Don’t post explicit, rude, or aggressive content' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Personal attacks, trolling, and abuse will not be tolerated' size='0.9em' />
                        </li>
                    </ul>
                    <Spacer axis='vertical' size={45} />
                    <Text
                        text='Authenticity'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    <Text
                        text='We want to make sure the posts here are authentic. An authentic environment creates an authentic community, and that’s why we don’t allow fake stories or troll posts on our platform that will negatively affect the reputation of I Got A Queery.'
                        size='0.9em' />
                    <Spacer axis='vertical' size={45} />
                    <Text
                        text='Safety'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    <Text
                        text='We strive to make I Got A Queery a safe space. We will remove content that we deem as harmful to people’s privacy and security. Threats, bullying, and hate speech are prohibited.'
                        size='0.9em' />
                    <Spacer axis='vertical' size={45} />
                    <Text
                        text='Consequences'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    <Text
                        text='In the event of someone violating these guidelines, we will take action to protect other members of the group. This might include a warning or in the event of extreme or repeated behavior, the user may be banned from the platform. 
                        If you experience or witness any behavior that doesn’t follow our community guidelines, please contact us at ReportIGAQ@gmail.com. All reports are kept confidential.'
                        size='0.9em' />
                    <Spacer axis='vertical' size={100} />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}