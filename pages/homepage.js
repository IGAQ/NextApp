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
import NewPost from '../comps/modals/newPost';
import SCard from '../comps/SCard';


export default function Homepage(props){

        function getPageIndex(route) {
                // switch (route) {
                //   case '/homepage': return 0;
                //   case '/resources': return 1;
                //   case '/notifications': return 2;
                //   case '/profile': return 3;
                //   default: return 0;
                // }

                if (route === '/homepage'){
                        return 0;
                } else if (route === '/resources'){     
                        return 1;
                } else if (route === '/notifications'){
                        return 2;
                } else if (route === '/profile'){
                        return 3;
                } else{
                         return 0;
                }

        }

        const handlePageChange = (event, newPage) => {
                // const path = event.target.getAttribute('value');
                // console.log("value from event :"+ path);
                // r.push(path);
                setPage(newPage);             
        }

        function closePostModal(){
                setPostModal(false);
        }

        function openPostModal(){
                setPostModal(true);
        }
        
        const r = useRouter();
        const pathname = r.pathname;
        const currentPage = getPageIndex(pathname);
        const [page, setPage] = useState(0);
        const [ postModal, setPostModal] = useState(false);
        
        return(
                <Wrapper>
                        {/* <FlexBox justify = 'flex-start' dir = 'column' align = 'flex-start' flex = '1'> Queery of the day </FlexBox> */}
                        {/* <FlexBox flex = '6'>homepage feed!! </FlexBox> */}
                        <SCard/>

                        {postModal && <NewPost onClick = {closePostModal}/>}
                        {postModal && <ModalBackdrop onClick = {closePostModal}/>}

                        <BottomNavigation
                                value={page}
                                onChange={handlePageChange}
                                sx={{
                                        position: "fixed", bottom: "0", width: "100vw", zindex: 2,
                                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                                                color: "#131313"},
                                        "& .Mui-selected, .Mui-selected > svg": {
                                          color: "#FF758C"
                                        }
                                        
                                    }}>
                                <BottomNavigationAction value = '/homepage' label="Home" icon={<HomeRoundedIcon /> } onClick={()=>r.push("/homepage")}/>
                                <BottomNavigationAction value = '/resources' label="Resources" icon={<ImportContactsRoundedIcon />} onClick={()=>r.push("/resources")}/>
                                <BottomNavigationAction label=" " icon={<AddRoundedIcon />} onClick = {openPostModal}/>
                                <BottomNavigationAction value = '/notifications' label="Notifications" icon={<NotificationsNoneRoundedIcon />}onClick={()=>r.push("/notifications")}/>
                                <BottomNavigationAction label="Profile" value = '/profile' icon={<PersonOutlineRoundedIcon />}onClick={()=>r.push("/profile")} />
                         </BottomNavigation>
                </Wrapper>
        )
}