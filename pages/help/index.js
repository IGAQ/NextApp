import { FlexBox } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';
import { BackArrow } from '../../components/Atoms/Common/Buttons/BackArrow';
import { HelpButton } from '../../components/Atoms/Common/Buttons/HelpButton';


export default function Help() {
    return (
        <FlexBox align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='Help' />
                <Spacer axis='vertical' size={10} />
                <FlexBox align='flex-start' bgColor='white'>
                    <HelpButton
                        helppush='/about'
                        headingtext='About Us'
                        descriptiontext='Read more about us here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                    <HelpButton
                        helppush='/communityGuidelines'
                        headingtext='Community Guidelines'
                        descriptiontext='Read the Community Guidelines here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                    <HelpButton
                        helppush='/submitTicket'
                        headingtext='Submit a Ticket'
                        descriptiontext='Have suggestions or need assistance with something? Submit a ticket here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                </FlexBox>
            </FlexBox>
            <Spacer axis='vertical' size={55} />

        </FlexBox>
    );
}