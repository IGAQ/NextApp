import {PostHeader} from '../../../Organisms/Post/PostHeader';
import {PostBody} from '../../../Organisms/Post/PostBody';
import {PostFooter} from '../../../Organisms/Post/PostFooter';
import {PostSettingsModal} from '../../../Organisms/Post/PostSettingsModal';
import styled from 'styled-components';
import {PostSetting} from '../../../Atoms/Post/PostSetting';
import {useState} from 'react';
import {Spacer} from '../../../Atoms/Common/Spacer';

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2.25rem;
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

export function NewPost({postId, username, date, title, content, tags, score, numComments, onClick}) {

    const [showSettings, setShowSettings] = useState(false);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <>
            <PostDiv>
                <Toprightdiv>
                    <PostHeader username={username} date={date}/>
                    {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                </Toprightdiv>
                <PostBody postId={postId} title={title} content={content} tags={tags}/>
                <Spacer axis="vertical" size={5}/>
                <PostFooter score={score} numComments={numComments} onClick ={onClick}/>
            </PostDiv>
            <Spacer axis="vertical" size={15}/>
        </>
    );
}
