import { PostTag } from '../../Atoms/PostTag';
import styled from 'styled-components';

const PostTagBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    `;

export function PostTagBox({ text, tagBgColor, tagColor }) {
    return (
        <PostTagBoxDiv>
            <PostTag text={text} tagBgColor={tagBgColor} tagColor={tagColor} />
        </PostTagBoxDiv>
    );
}