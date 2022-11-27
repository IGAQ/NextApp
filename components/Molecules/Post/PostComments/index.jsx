import {PostCommentsText} from '../../../Atoms/Post/PostCommentsText';
import {CommentsIcon} from '../../../Atoms/Post/CommentsIcon';
import styled from 'styled-components';
import {useContext} from 'react';
import {PostContext, UserActionsHandlersContext} from '../../../../lib/contexts';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export function PostComments() {
    const post = useContext(PostContext);
    const {handleTogglePrompt} = useContext(UserActionsHandlersContext);

    return (
        <PostFooterDiv>
            <CommentsIcon onClick={handleTogglePrompt}/>
            {post.postId && <PostCommentsText numComments={post.totalComments ?? 0}/>}
        </PostFooterDiv>
    );
}