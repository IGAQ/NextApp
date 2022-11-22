
import { useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../../styles/globals';
import timeAgo from '../../../../utils/timeAgo';
import { ProfileIcon } from '../../../Atoms/Common/Icons/ProfileIcon';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { Text } from '../../../Atoms/Common/Text';
import { PostDate } from '../../../Atoms/Post/PostDate';
import { PostSetting } from '../../../Atoms/Post/PostSetting';
import { PostUsername } from '../../../Atoms/Post/PostUsername';
import { PostFooter } from '../../../Organisms/Post/PostFooter';
import { PostHeader } from '../../../Organisms/Post/PostHeader';
import { PostSettingsModal } from '../../../Organisms/Post/PostSettingsModal';
import { CommentPrompt } from '../CommentPrompt';


const WrappedFlexBox = styled(FlexBox)`
flex-wrap: wrap;

`;
const StyledCard = styled.div`
       text-align: left;
       padding: 24px;
       background: #f5f5f5;
       border-radius: 8px;
`;

const ChildCard = styled(CommentCard)`
margin-left: 1.5rem;
`;

export function CommentCard({comment, firstParent, props}) {
    const [createPrompt, setCommentPrompt] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    function handleSettings() {
        setShowSettings(true);
    }
    

    return (
        <StyledCard>
            <FlexBox align = "stretch"
                key = {comment.id}
                id = {comment.id}
                className = {firstParent ? 'child' : ''}>
                <WrappedFlexBox dir = "row" justify = "space-between">
                    <PostHeader weight = "400" username = {comment.authorUser.username} date = {timeAgo(comment.createdAt)} />
                    {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                </WrappedFlexBox>
                <Spacer size={25} />
                <FlexBox>
                    <Text text = {comment.content}/>
                </FlexBox>
                <Spacer size={25} />
                <FlexBox>
                    <PostFooter score = {comment.totalVotes} numComments = {comment.numComments} onClick = {togglePrompt}/>
                    <Spacer size={10} />
                </FlexBox>
                {createPrompt && <CommentPrompt 
                    username={comment.authorUser?.username ?? 'Anonymous'}
                    parentComment={comment._id}
                    firstParent={firstParent || comment._id}
                />}
                <Spacer size={10} />
                {comment.childComments && (
                    <FlexBox>
                        {comment.childComments.map(childComment => (
                            <CommentCard
                                comment={childComment}
                                key={childComment._id}
                                firstParent = {firstParent || comment._id}
                            />
                        ))}
                    </FlexBox>
                )}
            </FlexBox>
        </StyledCard>
    );
}
     
