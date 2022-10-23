import { PostContent } from '../../Atoms/PostContent';
import { PostTitle } from '../../Atoms/PostTitle';
import { PostTagBox } from '../../Molecules/PostTagBox';
import styled from 'styled-components';

const PostBodyDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;

export function PostBody ({title, content, text, tagBgColor, tagColor}) {
    return (
        <PostBodyDiv>
            <PostTitle title={title}/>
            <PostContent content={content}/>
            <PostTagBox text={text} tagBgColor={tagBgColor} tagColor={tagColor}/>
        </PostBodyDiv>
    );
}
