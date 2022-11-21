import styled from 'styled-components';
import { TextInput, InputBox } from '../../../Atoms/Common/Inputs/TextInput';
import { PostUsername } from '../../../Atoms/Post/PostUsername';
import { Button } from '../../../Atoms/Common/Buttons/Button';
import { useState } from 'react';
import { FlexBox } from '../../../../styles/globals';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { Text } from '../../../Atoms/Common/Text';
const StyledInputBox = styled(InputBox)`
min-width:75%;
height: 5rem;
border: 2px solid #ffb6c3;
`;

export function CommentPrompt({props, username, parentComment,firstParent}) {
    const [comment, setComment] = useState('');

    const onSubmit = data => {
        setSubmittedFormData(data);
        setIsSending(true);

        if (parentCommentId) {
            data.parentComment= parentComment;
            data.firstParent = firstParent;
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <FlexBox bgColor = "#ffb6c3"{...props} >
                <Spacer size={25} />

                <StyledInputBox
                    placeholder="Comments? Questions? Concerns?"
                    minRows={4}
                    name = "comment"
                    defaultValue={comment}
                    onChange={value => {
                        setComment(value.target.value);
                    }}
                />
                <Spacer size={10} />

                <FlexBox justify = "space-between" minWidth = "75%" dir = "row" flex = "1">
                    <FlexBox  dir = "row">
                        <Text width = "7.5rem" size = "1rem" text = "Commenting as"> </Text>
                        <PostUsername size = "1rem" weight = "500" username = {username}/>
                    </FlexBox>
                    <Spacer size={25} />
                    <Button type = "submit" size = "5rem" label = "Post comment"/>
                </FlexBox>
                <Spacer size={25} />
            </FlexBox>
            <Spacer size={35} />
        </form>
    );
}
