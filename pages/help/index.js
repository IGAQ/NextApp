import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { BackArrow } from '../../components/Atoms/BackArrow';
import { HelpButton } from '../../components/Atoms/HelpButton';


export default function Help() {
    return (
        <Wrapper align='stretch' justify='center' bgColor='white'>
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='Help' />
                <Spacer axis='vertical' size={10} />
                <FlexBox align='flex-start' bgColor='white'>
                    <HelpButton
                        headingtext='About Us'
                        descriptiontext='Read more about us here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                    <HelpButton
                        headingtext='Community Guidelines'
                        descriptiontext='Read the Community Guidelines here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                    <HelpButton
                        headingtext='Submit a Ticket'
                        descriptiontext='Have suggestions or need assistance with something? Submit a ticket here'
                        size='0.9em'></HelpButton>
                    <Spacer axis='vertical' size={20} />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}