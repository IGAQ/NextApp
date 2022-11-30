import styled from 'styled-components';
import {FlexBox, ModalBackdrop} from '../../../../../styles/globals';
import {ModalBox} from '../../../../Atoms/Common/ModalBox';
import {Text} from '../../../../Atoms/Common/Text';
import {Button} from '../../../../Atoms/Common/Buttons/Button';
import {Spacer} from '../../../../Atoms/Common/Spacer';

export const unknownErrorProps = {
    modalBoxPadding: '25px 50px 50px 50px',

    title: 'Oops!',
    content: 'Something went wrong. Please try again later.',
    enableMoreText: true,
    moreText: 'Please try again later.',
    buttonText: 'Okay',
};

export const moderationFailedProps = {
    modalBoxPadding: '25px 50px 50px 50px',

    title: 'Oops!',
    content: 'Looks like you tried to post something that doesn\'t fit within our community guidelines!',
    enableMoreText: true,
    moreText: 'Please rephrase your post and try again.',
    buttonText: 'Rephrase post',
};

export function ModalAlert({
    onClick,

    modalBoxPadding = '25px 50px 50px 50px',

    title,
    titleColor = '#FF758C',
    titleTextWeight = 700,

    content,
    contentColor = '',
    contentTextWeight = '',
    contentTextSize = '1.25rem',

    enableMoreText = true,
    moreText,
    moreTextSize = '1rem',

    buttonText = 'Okay',
    CustomButton,
}) {

    return (
        <FlexBox>
            <ModalBox padding={modalBoxPadding} align="stretch"
                borderRadius="20px"
                initial={{y: 500}}
                animate={{y: -300, opacity: 1}}
                transiton={{duration: 100, delay: 500}}
                exit={{y: 1000, opacity: 0}}>
                <FlexBox>
                    <Spacer axis="vertical" size={5}/>
                    <Text weight={titleTextWeight} color={titleColor} text={title}/>
                    <Spacer axis="vertical" size={15}/>
                    <Text textAlign="center" size={contentTextSize} weight={contentTextWeight} text={content} color={contentColor} />
                    {enableMoreText && (
                        <>
                            <Spacer axis="vertical" size={5}/>
                            <Text textAlign="center" size={moreTextSize} text={moreText}/>
                        </>
                    )}
                    <Spacer axis="vertical" size={25}/>
                    {CustomButton ? <CustomButton/> : <Button size="short" label={buttonText} onClick={onClick}/>}
                </FlexBox>
            </ModalBox>
            <ModalBackdrop onClick={onClick}/>
        </FlexBox>
    );
}
