import { PostHeader } from '../../Organisms/PostHeader';
import { PostBody } from '../../Organisms/PostBody';
import { PostFooter } from '../../Organisms/PostFooter';
import { PostSettingsButton } from '../../Molecules/PostSettingsButton';
import styled from 'styled-components';

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    max-width: 50em;
    margin: auto;
    `;

export function NewPost({ username, date, title, content, tags, score, numComments }) {
    return (
        <PostDiv>
            <PostHeader username={username} date={date} />
            <PostBody title={title} content={content} tags={tags} />
            <PostFooter score={score} numComments={numComments} />
        </PostDiv>
    );
}