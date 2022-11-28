import { useContext, useState } from 'react';
import styled from 'styled-components';
import { PostContext, UserActionsHandlersContext, UserContext } from '../../../../lib/contexts';
import { FlexBox } from '../../../../styles/globals';
import { CommentsPinIcon } from '../../../Atoms/Comment/CommentsPinIcon';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { PostSetting } from '../../../Atoms/Post/PostSetting';
import { CommentBody } from '../../../Organisms/Comment/CommentBody';
import { PostFooter } from '../../../Organisms/Post/PostFooter';
import { PostHeader } from '../../../Organisms/Post/PostHeader';
import { PostSettingsModal } from '../../../Organisms/Post/PostSettingsModal';

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2.25rem;
  background-color: #fff;
  max-width: 50em;
  margin: auto;
`;

const Toprightdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export function SingleComment(){
    const comment = useContext(PostContext);
    const user = useContext(UserContext);
    const {handlePin, data} = useContext(UserActionsHandlersContext);

    const [showSettings, setShowSettings] = useState(false);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <>
            <PostDiv>
                <Toprightdiv>
                    <PostHeader username={comment.authorUser?.username ?? 'Anonymous'} date={comment.createdAt}/>
                    <FlexBox dir="row">
                        {comment.pinned && (
                            <>
                                <FlexBox> Author's </FlexBox>
                                <Spacer size={5}/>
                                <FlexBox> Choice </FlexBox> 
                            </>
                        )}
                        {(user && data.postAuthorId === user.userId || comment.pinned) && (
                            <CommentsPinIcon 
                                onClick={() => handlePin({commentId: comment.commentId, isPinning: !comment.pinned})} 
                                isActive={comment.pinned} 
                                isPostAuthor={user && data.postAuthorId === user.userId} />
                        )}
                        {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                    </FlexBox>
                </Toprightdiv>
                <CommentBody/>
                <Spacer axis="vertical" size={5}/>
                <PostFooter />
            </PostDiv>
            <Spacer axis="vertical" size={15}/>
        </>
    );
}