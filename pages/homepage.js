import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FlexBox, ModalBackdrop, Wrapper } from '../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { NewPostModal } from '../components/Organisms/NewPostModal';
import { BaseCard } from '../components/Organisms/BaseCard';
import axios from 'axios';
import {NewPost} from '../components/Templates/NewPost';
import { PostTagBox } from '../components/Molecules/PostTagBox';

export default function Homepage(props){

    const r = useRouter();
    
    return(
        <Wrapper width='0' height='0'>
            <FlexBox justify = 'flex-start' dir = 'column' align = 'flex-start' flex = '0'> Queery of the day </FlexBox>
            {/* <BaseCard posts = {props.posts}/> */}
            {props.posts.map((post) => (
                <NewPost
                    key = {post.postId}
                    username={post.authorUser.username} 
                    date={post.createdAt} 
                    title={post.postTitle}
                    content={post.postContent}
                    tags={post.postTags}
                />
            ))}
            {/* {postModal && <NewPostModal onClick = {closePostModal}/>}
            {postModal && <ModalBackdrop onClick = {closePostModal}/>} */}
        </Wrapper>
    );
}

export async function getServerSideProps(context) {
    const res = await axios.get('http://localhost:8080/posts');
    const posts = res.data;
    console.log(res.data);
    return {
        props: {posts}, // will be passed to the page component as props
    };
}