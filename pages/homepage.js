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
import NewPost from '../components/Templates/NewPost';

export default function Homepage(props){

    const r = useRouter();
    
    return(
        <Wrapper width='0' height='0'>
            <FlexBox justify = 'flex-start' dir = 'column' align = 'flex-start' flex = '0'> Queery of the day </FlexBox>
            {/* <BaseCard posts = {props.posts}/> */}
            {/* props.posts.map((post) => ( */}
            <NewPost
                username={post.AuthorUser.username} 
                date={post.udatedAt} 
                title={post.postTitle}
                content={post.postContent}
                text={post.tagName}
                tagBgColor={post.tagColor}
                tagTextColor={post.tagTextColor}
                score={post.score}
                numComments={post.comments}
            />
            {/* )) */}
            {postModal && <NewPostModal onClick = {closePostModal}/>}
            {postModal && <ModalBackdrop onClick = {closePostModal}/>}

            <BottomNavigation
                value={page}
                onChange={handlePageChange}
                sx={{
                    position: 'fixed', bottom: '0', width: '100vw', zindex: 2,
                    '& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
                        color: '#131313'},
                    '& .Mui-selected, .Mui-selected > svg': {
                        color: '#FF758C',
                    },
                                        
                }}>
                <BottomNavigationAction value = '/homepage' label="Home" icon={<HomeRoundedIcon /> } onClick={()=>r.push('/homepage')}/>
                <BottomNavigationAction value = '/resources' label="Resources" icon={<ImportContactsRoundedIcon />} onClick={()=>r.push('/resources')}/>
                <BottomNavigationAction label=" " icon={<AddRoundedIcon />} onClick = {openPostModal}/>
                <BottomNavigationAction value = '/notifications' label="Notifications" icon={<NotificationsNoneRoundedIcon />}onClick={()=>r.push('/notifications')}/>
                <BottomNavigationAction label="Profile" value = '/profile' icon={<PersonOutlineRoundedIcon />}onClick={()=>r.push('/profile')} />
            </BottomNavigation>
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