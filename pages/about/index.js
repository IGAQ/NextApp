import { FlexBox } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { Text } from '../../components/Atoms/Common/Text';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';
import { BackArrow } from '../../components/Atoms/Common/Buttons/BackArrow';
import Image from 'next/image';

export default function About() {

    return (
        <FlexBox align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox style = {{alignSelf: 'center'}} align='center' bgColor='white' maxWidth = "50em">
                <PostTitle title='About Us' />
                <Image src='/IGAQLogo.svg' width={100} height={100} alt="Logo" />
                <Spacer axis='vertical' size={55} />
                <FlexBox align='flex-start' bgColor='white' padding = "0 2em">
                    <Text
                        text='I Got A Queery'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />

                    <Text
                        text='I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, vent, or share stories about all things LGBTQ+.'
                        size='0.9em' />
                    <Spacer axis='vertical' size={45} />

                    <Text
                        text='Our Purpose'
                        size='1.5em'
                        weight='500' />
                    <Spacer axis='vertical' size={5} />
                    <Text text='Our purpose is to help facilitate a safe space for people to find comfort and explore their identities. Users can safely ask questions and find answers regarding all things LGBTQ+ and connect with a community of like-minded users. Our platform provides access to the resources and tools to assist them in learning more about LGBTQ+.' size='0.9em' />
                    <Spacer axis='vertical' size={5} />
                    <Text text='Within our platform, members can:' size='0.9em' />
                    <ul>
                        <li>
                            <Text text='Relate with other members who are dealing with similar problems related to LGBTQ+' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Ask questions relating to LGBTQ+ or about coming out' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Understand their identity or sexuality' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Inspire others with their stories/experience' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Vent/rant about a bad experience' size='0.9em' />
                        </li>
                        <li>
                            <Text text='Learn the different types of LGBTQ+ labels' size='0.9em' />
                        </li>
                    </ul>
                    
                    <Spacer axis='vertical' size={45} />
                    <Text
                        text='Our Audience'
                        size='1.5em'
                        weight='500' />

                    <Text text='Ages 13-19 are the common age group for people to begin exploring their sexuality.' size='0.9em' />
                    <Text text='We also invite members who are more experienced in order to foster a "mentor" kind of environment, where help and advice are more accessible.' size='0.9em' />
                    <Text text='As always, we welcome diversity and do not discriminate against any age, race, or religion.' size='0.9em' />
                    <Spacer axis='vertical' size={100} />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}