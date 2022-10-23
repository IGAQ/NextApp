import { PostHeader } from '../../Organisms/PostHeader';
import { PostBody } from '../../Organisms/PostBody';
import { PostFooter } from '../../Organisms/PostFooter';
import styled from 'styled-components';

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e6e6e6;
    `;

export function NewPost({ username, date, title, content, text, tagBgColor, tagColor, score, comment }) {
    return (
        <PostDiv>
            <PostHeader username={username} date={date} />
            <PostBody title={title} content={content} text={text} tagBgColor={tagBgColor} tagColor={tagColor} />
            <PostFooter score={score} comment={comment} />
        </PostDiv>
    );
}