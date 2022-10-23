import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FlexBox, ModalBackdrop,Wrapper } from '../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import {NewPostModal} from '../components/Organisms/NewPostModal';


export default function Profile(props){
    const r = useRouter();
    const [page, setPage] = useState(0);
    const [postModal, setPostModal] = useState(false);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);                 
    };

    function closePostModal(){
        setPostModal(false);
    }

    function openPostModal(){
        setPostModal(true);
    }


    return(
        <Wrapper>
            <FlexBox>Profile </FlexBox>
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
                <BottomNavigationAction value = '/newPost' label=" " icon={<AddRoundedIcon />} onClick = {openPostModal} />
                <BottomNavigationAction value = '/notifications' label="Notifications" icon={<NotificationsNoneRoundedIcon />}onClick={()=>r.push('/notifications')}/>
                <BottomNavigationAction value = '/profile' label="Profile"  icon={<PersonOutlineRoundedIcon />}onClick={()=>r.push('/profile')} />
            </BottomNavigation>
        </Wrapper>


    );


}