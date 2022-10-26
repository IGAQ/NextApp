import { PostContent } from '../../Atoms/PostContent';
import { PostTitle } from '../../Atoms/PostTitle';
import { PostTagBox } from '../../Molecules/PostTagBox';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { Spacer } from '../../Atoms/Spacer';
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
            <Spacer axis="vertical" size={15} />
            <PostTitle title={title} onClick={() => router.push('/homepage/' + postId)}/>
            <Spacer axis="vertical" size={5} />
            <PostContent content={content}/>
            <Spacer axis="vertical" size={35} />
            <PostTagBox tags={tags}/>
        </PostBodyDiv>
    );
}
