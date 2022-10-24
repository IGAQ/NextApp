import { PostTag } from '../../Atoms/PostTag';
import styled from 'styled-components';

const PostTagBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    `;

export function PostTagBox({ tags }) {
    return (
        <PostTagBoxDiv>
            {tags.map((tag) => (
                <PostTag key={tag.tagId} text={tag.tagName} tagBgColor={tag.tagColor}/>
            ))}
        </PostTagBoxDiv>
    );
}