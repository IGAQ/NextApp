import styled from 'styled-components';
import {FlexBox, ModalBackdrop} from '../../../../../styles/globals';
import {ModalBox} from '../../../../Atoms/Common/ModalBox';
import {Text} from '../../../../Atoms/Common/Text';
import {Button} from '../../../../Atoms/Common/Buttons/Button';
import {Spacer} from '../../../../Atoms/Common/Spacer';

export const unknownErrorProps = {
    title: 'Oops!',
    content: 'Something went wrong. Please try again later.',
    moreText: 'Please try again later.',
    buttonText: 'Okay',
};

export const moderationFailedProps = {
    title: 'Oops!',
    content: 'Looks like you tried to post something that doesn\'t fit within our community guidelines!',
    moreText: 'Please rephrase your post and try again.',
    buttonText: 'Rephrase post',
};

export function ContentCheckModal({onClick, title, content, moreText, buttonText}) {

    return (
        <FlexBox>
            <ModalBox border="5px solid #FF758C" minWidth="50%" padding="25px 50px 50px 50px" align="stretch"
                borderRadius="20px"
                initial={{y: 500}}
                animate={{y: -300, opacity: 1}}
                transiton={{duration: 100, delay: 500}}
                exit={{y: 1000, opacity: 0}}>
                <FlexBox>
                    <Text weight="700" color="#FF758C" text={title}/>
                    <Spacer axis="vertical" size={15}/>
                    <Text textAlign="center" size="1.25rem" text={content}/>
                    <Spacer axis="vertical" size={5}/>
                    <Text textAlign="center" size="1rem" text={moreText}/>
                    <Spacer axis="vertical" size={25}/>
                    <Button size="short" label={buttonText} onClick={onClick}/>
                </FlexBox>
            </ModalBox>
            <ModalBackdrop onClick={onClick}/>
        </FlexBox>
    );
}