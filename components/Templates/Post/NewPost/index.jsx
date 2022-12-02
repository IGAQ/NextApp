import {PostHeader} from '../../../Organisms/Post/PostHeader';
import {PostBody, SinglePostBody} from '../../../Organisms/Post/PostBody';
import {PostFooter} from '../../../Organisms/Post/PostFooter';
import {PostSettingsModal} from '../../../Organisms/Post/PostSettingsModal';
import styled from 'styled-components';
import {PostSetting} from '../../../Atoms/Post/PostSetting';
import {useContext, useState} from 'react';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {PostContext} from '../../../../lib/contexts';
import { Logo, SadLogo } from '../../../Atoms/Common/Logo';
import { PostContent } from '../../../Atoms/Post/PostContent';
import { Button } from '../../../Atoms/Common/Buttons/Button';
import {eventService} from '../../../../lib/services/eventService';

const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignPost|| 'flex-start'};
  justify-content: center;
  width: 100%;
  padding: 2.25rem;
  background-color: #fff;
  max-width: 50em;
  margin: auto;
  border-radius: 10px;
`;

const Toprightdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export function NewPost() {
    const post = useContext(PostContext);

    const [showSettings, setShowSettings] = useState(false);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <>
            <PostDiv>
                <Toprightdiv>
                    <PostHeader username={post.authorUser?.username ?? 'Anonymous'} date={post.createdAt}/>
                    {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                </Toprightdiv>
                <PostBody/>
                <Spacer axis="vertical" size={5}/>
                <PostFooter />
            </PostDiv>
            <Spacer axis="vertical" size={15}/>
        </>
    );
}

export function SingleNewPost(){
    const post = useContext(PostContext);

    const [showSettings, setShowSettings] = useState(false);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <>
            <PostDiv>
                <Toprightdiv>
                    <PostHeader username={post.authorUser?.username ?? 'Anonymous'} date={post.createdAt}/>
                    {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                </Toprightdiv>
                <SinglePostBody/>
                <Spacer axis="vertical" size={5}/>
                <PostFooter />
            </PostDiv>
            <Spacer axis="vertical" size={15}/>
        </>
    );
}

export function NoPosts({onClick}) {
    return (
        <PostDiv alignPost='center'>
            <SadLogo />
            <PostContent content='No Posts Related to This Search'/>
            <Spacer axis="vertical" size={10}/>
            <Button onClick={() => {
                eventService.emit('open-creation-post');
            }} size='small' label='Create A Post'></Button>
        </PostDiv>
    );
}