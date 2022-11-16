import { FlexBox, Wrapper } from '../../styles/globals';
import { Button } from '../../components/Atoms/Button';
import { UserTextInput } from '../../components/Atoms/UserTextInput'
import { Spacer } from '../../components/Atoms/Spacer';
import { Text } from '../../components/Atoms/Text';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { BackArrow } from '../../components/Atoms/BackArrow';

export default function SubmitTicket() {
    return (
        <Wrapper align='stretch' justify='center' bgColor='#DFEEFF'>
            <BackArrow />
            <FlexBox align='center' bgColor='#DFEEFF'>
                <PostTitle title='Submit a Ticket' />
                <FlexBox align='flex-start' bgColor='#DFEEFF'>
                    <Text text='Please fill in the form below' size='0.8em'></Text>
                    <Spacer axis='vertical' size={40} />
                    <UserTextInput type='text' label='Your email address*' placeholder='email@address.com' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='text' label='Subject*' placeholder='Subject' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput padding='1em 0em 10em 1.2em' type='text' label='Details*' placeholder='Details' />
                    <Spacer axis='vertical' size={20} />
                    <Text text='Attachments (optional)' size='0.8em'></Text>
                    <Spacer axis='vertical' size={10} />
                    <Button size='long' color='#E02947' backgroundColor='white' label='Add file' />
                    <Spacer axis='vertical' size={20} />
                    <Button size='long' backgroundColor='#E02947' label='Submit' />
                    <Spacer axis='vertical' size={90} />


                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}