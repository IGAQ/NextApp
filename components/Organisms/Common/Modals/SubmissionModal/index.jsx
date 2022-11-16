import {Button} from '../../../../Atoms/Common/Buttons/Button';
import {ModalBox} from '../../../../Atoms/Common/ModalBox';
import Link from 'next/link';
import {Text} from '../../../../Atoms/Common/Text';
import {Spacer} from '../../../../Atoms/Common/Spacer';
import {FlexBox, ModalBackdrop} from '../../../../../styles/globals';

export function SubmissionModal({postId}) {
    return (
        <FlexBox>
            <ModalBox border="5px solid #FF758C" minWidth="50%" padding="50px 50px 50px 50px" align="stretch"
                borderRadius="20px"
                initial={{y: 500}}
                animate={{y: -300, opacity: 1}}
                transiton={{duration: 100, delay: 500}}
                exit={{y: 1000, opacity: 0}}>
                <FlexBox>
                    <Text weight="700" color="#FF758C" text="Congratulations!"></Text>
                    <Spacer axis="vertical" size={15}/>
                    <Text textAlign="center" size="1.25rem" text="Looks like you successfully posted a queery."></Text>
                    <Spacer axis="vertical" size={25}/>
                    <Link href={'/homepage/' + postId}>
                        <Button label="Take me to my post"></Button>
                    </Link>
                </FlexBox>
            </ModalBox>
            <ModalBackdrop/>
        </FlexBox>
    );
}