import { useContext } from 'react';
import styled from 'styled-components';
import { PostContext, UserActionsHandlersContext } from '../../../../lib/contexts';
import { CommentsIcon } from '../../../Atoms/Comment/CommentsIcon';
import { PostCommentsText } from '../../../Atoms/Post/PostCommentsText';

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