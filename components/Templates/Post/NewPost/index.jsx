import {PostHeader} from '../../../Organisms/Post/PostHeader';
import {PostBody, SinglePostBody} from '../../../Organisms/Post/PostBody';
import {PostFooter} from '../../../Organisms/Post/PostFooter';
import {PostSettingsModal} from '../../../Organisms/Post/PostSettingsModal';
import styled from 'styled-components';
import {PostSetting} from '../../../Atoms/Post/PostSetting';
import {useContext, useState} from 'react';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {PostContext} from '../../../../lib/contexts';
import { Logo } from '../../../Atoms/Common/Logo';
import { PostContent } from '../../../Atoms/Post/PostContent';

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

export function NoPosts() {
    return (
        <PostDiv alignPost='center'>
            <Logo />
            <PostContent content='No Posts Related to This Search'/>
        </PostDiv>
    );
}