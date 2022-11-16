import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { Text } from '../../components/Atoms/Text';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { BackArrow } from '../../components/Atoms/BackArrow';
import Image from 'next/image';

export default function About() {

    return (
        <Wrapper align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='About Us' />
                <Image src='/IGAQLogo.svg' width={100} height={100} alt="Logo" />
                <FlexBox align='flex-start' bgColor='white'>
                    <Text
                        padding='1em 2em 1em 2em'
                        text='I Got A Queery'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, vent, or share stories about all things LGBTQ+.'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Our Purpose'
                        size='1em'
                        weight='500' />

                    <Text padding='0em 2em 0em 2em' text='Our purpose is to help facilitate a safe space for people to find comfort and explore their identities. Users can safely ask questions and find answers regarding all things LGBTQ+ and connect with a community of like-minded users. Our platform provides access to the resources and tools to assist them in learning more about LGBTQ+.' size='0.9em' />
                    <Text padding='2em 2em 0em 2em' text='Within our platform, members can:' size='0.9em' />
                    <Text padding='1em 2em 0em 2em' text='- Relate with other members who are dealing with similar problems related to LGBTQ+' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Ask questions relating to LGBTQ+ or about coming out' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Understand their identity or sexuality' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Inspire others with their stories/experience' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Vent/rant about a bad experience' size='0.9em' />
                    <Text padding='0.25em 2em 0em 2em' text='- Learn the different types of LGBTQ+ labels' size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Our Audience'
                        size='1em'
                        weight='500' />

                    <Text padding='0em 2em 0em 2em' text='Ages 13-19 are the common age group for people to begin exploring their sexuality.' size='0.9em' />
                    <Text padding='1em 2em 0em 2em' text='We also invite members who are more experienced in order to foster a "mentor" kind of environment, where help and advice are more accessible.' size='0.9em' />
                    <Text padding='1em 2em 0em 2em' text='As always, we welcome diversity and do not discriminate against any age, race, or religion.' size='0.9em' />
                    <Spacer axis='vertical' size={90} />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}