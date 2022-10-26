import { PostHeader } from '../../Organisms/PostHeader';
import { PostBody } from '../../Organisms/PostBody';
import { PostFooter } from '../../Organisms/PostFooter';
import {PostSettingsModal} from '../../Organisms/PostSettingsModal';
import styled from 'styled-components';
import { PostSetting } from '../../Atoms/PostSetting';
import { useState } from 'react';

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

const Toprightdiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
    `;

export function NewPost({ username, date, title, content, tags, score, numComments }) {

    const [showSettings, setShowSettings] = useState(false);

    return (
        <PostDiv>
            <Toprightdiv>
                <PostHeader username={username} date={date} />
                {showSettings ? <PostSettingsModal /> : <PostSetting onClick={() => setShowSettings(true)} />}
            </Toprightdiv>
            <PostBody title={title} content={content} tags={tags} />
            <PostFooter score={score} numComments={numComments} />
        </PostDiv>
    );
}