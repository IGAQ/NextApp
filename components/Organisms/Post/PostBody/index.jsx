import {PostContent, SinglePostContent} from '../../../Atoms/Post/PostContent';
import {PostTitle} from '../../../Atoms/Post/PostTitle';
import {PostTagBox} from '../../../Molecules/Post/PostTagBox';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {useContext} from 'react';
import {PostContext} from '../../../../lib/contexts';

const PostBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export function PostBody() {
    const post = useContext(PostContext);

    const router = useRouter();
    return (
        <PostBodyDiv>
            <Spacer axis="vertical" size={15}/>
            <PostTitle title={post.postTitle} onClick={() => router.push('/homepage/' + post.postId)}/>
            <Spacer axis="vertical" size={5}/>
            <PostContent content={post.postContent}/>
            <Spacer axis="vertical" size={35}/>
            <PostTagBox tags={post.postTags}/>
        </PostBodyDiv>
    );
}

export function SinglePostBody(){
    const content = useContext(PostContext);

    const router = useRouter();
    return (
        <PostBodyDiv>
            <Spacer axis="vertical" size={15}/>
            {content.postTitle && <PostTitle title={content.postTitle} onClick={() => router.push('/homepage/' + content.postId)}/>}
            <Spacer axis="vertical" size={5}/>
            <SinglePostContent content={content.postContent || content.commentContent}/>
            <Spacer axis="vertical" size={35}/>
            {content.postTags && <PostTagBox tags={content.postTags}/>}
        </PostBodyDiv>
    );
}
