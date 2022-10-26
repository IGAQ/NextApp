import { PostContent } from '../../Atoms/PostContent';
import { PostTitle } from '../../Atoms/PostTitle';
import { PostTagBox } from '../../Molecules/PostTagBox';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const PostBodyDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;

export function PostBody ({postId, title, content, tags}) {
    const router = useRouter();
    return (
        <PostBodyDiv>
            <PostTitle title={title} onClick={() => router.push('/homepage/' + postId)}/>
            <PostContent content={content}/>
            <PostTagBox tags={tags}/>
        </PostBodyDiv>
    );
}
