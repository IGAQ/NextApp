import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { Text } from '../../components/Atoms/Text';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { BackArrow } from '../../components/Atoms/BackArrow';

export default function CommunityGuidelines() {
    return (
        <Wrapper align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='Community Guidelines' />
                <Spacer axis='vertical' size={10} />
                <FlexBox align='flex-start' bgColor='white'>
                    <Text
                        padding='0em 2em 0em 2em'
                        text='We want IGAQ to be an authentic and safe place for our users to explore their sexualities. Help us foster this community by treating everyone with respect. Don’t post hate, troll, or spam. To meet the collective goals of our community, it’s important that all members feel safe and supported. To help everyone have the best possible experience, please take a look at our community guidelines:'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Positive guidelines'
                        size='1em'
                        weight='500' />


                    <Text padding='0em 2em 0em 2em' text='- Feel free to post questions and start discussions on any topics relating to your sexuality, identity, or coming-out stories.' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Treat others as you would treat them in real life' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Be polite and communicate with respect' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Respect the privacy of other community members' size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Rules and restrictions'
                        size='1em'
                        weight='500' />

                    <Text padding='0em 2em 0em 2em' text='- Don’t share personal or private information' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Don’t use homophobic slurs' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Don’t post fake stories to gain sympathy or pity' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Don’t post promotional content' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Understand their identity or sexuality' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Don’t post explicit, rude, or aggressive content' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Personal attacks, trolling, and abuse will not be tolerated' size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Authenticity'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='We want to make sure the posts here are authentic. An authentic environment creates an authentic community, and that’s why we don’t allow fake stories or troll posts on our platform that will negatively affect the reputation of I Got A Queery.'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Safety'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='We strive to make I Got A Queery a safe space. We will remove content that we deem as harmful to people’s privacy and security. Threats, bullying, and hate speech are prohibited.'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Consequences'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='In the event of someone violating these guidelines, we will take action to protect other members of the group. This might include a warning or in the event of extreme or repeated behavior, the user may be banned from the platform. 

                        If you experience or witness any behavior that doesn’t follow our community guidelines, please contact us at ReportIGAQ@gmail.com. All reports are kept confidential.'
                        size='0.9em' />

                    <Spacer axis='vertical' size={40} />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}