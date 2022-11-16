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
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Positive guidelines'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Rules and restrictions'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Authenticity'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Safety'
                        size='1em'
                        weight='500' />

                    <Text
                        padding='0em 2em 0em 2em'
                        text='a bunch of text gneajngkea sj xsaxsaxasageagneajkgnejakgnjekangjnekjnjkangjekngkejsxsaxaxsaxsaxsaxsaxsaxnegkangneajgneakngejakgnksa'
                        size='0.9em' />

                    <Text
                        padding='1em 2em 1em 2em'
                        text='Consequences'
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