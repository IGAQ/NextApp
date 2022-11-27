import styled from 'styled-components';
import {InputBox} from '../../../Atoms/Common/Inputs/TextInput';
import {PostUsername} from '../../../Atoms/Post/PostUsername';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import {useContext, useState} from 'react';
import {FlexBox} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {Text} from '../../../Atoms/Common/Text';
import {UserActionsHandlersContext, UserContext, PostContext} from '../../../../lib/contexts';
import {CommentCard} from '../CommentCard';
import {useRouter} from 'next/router';
import {InPageLoader} from '../../../Atoms/Common/Loader';

const StyledInputBox = styled(InputBox)`
  min-width: 75%;
  height: 5rem;
  vertical-align: top;
  border: 2px solid #ffb6c3;
  padding-top: 0;
`;

export function CommentPrompt({}) {
    const router = useRouter();
    const {data, handleSubmitComment} = useContext(UserActionsHandlersContext);
    const authedUser = useContext(UserContext);

    const [newlyCreatedComment, setNewlyCreatedComment] = useState(undefined);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [comment, setComment] = useState('');

    const onSubmit = async () => {
        setIsSubmitting(true);
        const createdComment = await handleSubmitComment({
            parentId: data.parentId,
            isPost: data.isPost,
            commentContent: comment,
        });
        setIsSubmitting(false);

        setNewlyCreatedComment(createdComment);
    };

    if (!authedUser) {
        router.push('/login');
    }

    if (isSubmitting) {
        return (
            <InPageLoader/>
        );
    }

    return (!newlyCreatedComment ? (
        <>
            <FlexBox bgColor="#ffb6c3">
                <Spacer size={25}/>

                <StyledInputBox
                    placeholder="Comments? Questions? Concerns?"
                    minRows={1}
                    name="comment"
                    defaultValue={comment}
                    onChange={value => {
                        setComment(value.target.value);
                    }}
                />
                <Spacer size={10}/>

                <FlexBox flexWrap={'wrap'} justify="space-between" minWidth="75%" dir="row" flex="1">
                    <FlexBox dir="row">
                        <Text width="7.5rem" size="1rem" text="Commenting as"/>
                        <PostUsername size="1.2rem" weight="400" username={authedUser?.username ?? 'Anonymous'}/>
                    </FlexBox>
                    <Spacer size={25}/>
                    <Button type="submit" size="5rem" label="Post comment" onClick={onSubmit}/>
                </FlexBox>
                <Spacer size={25}/>
            </FlexBox>
            <Spacer size={35}/>
        </>
    ) : (
        <PostContext.Provider key={newlyCreatedComment.commentId} value={newlyCreatedComment}>
            <CommentCard nestedLevel={data.nestedLevel}/>
        </PostContext.Provider>
    ));
}
