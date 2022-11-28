import { useContext } from 'react';
import styled from 'styled-components';
import { PostContext } from '../../../../lib/contexts';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { SinglePostContent } from '../../../Atoms/Post/PostContent';


const PostBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export function CommentBody(){
    const content = useContext(PostContext);
    return (
        <PostBodyDiv>
            <Spacer axis="vertical" size={15}/>
            <SinglePostContent content={content.commentContent}/>
            <Spacer axis="vertical" size={35}/>
        </PostBodyDiv>
    );
}
