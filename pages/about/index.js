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
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Our Purpose'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Our Audience'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Spacer axis='vertical' size={40} />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}