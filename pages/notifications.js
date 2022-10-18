import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FlexBox, Wrapper } from '../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';



export default function Homepage(props){
       
        function getPageIndex(route) {
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
                setPage(newPage);                  // setTimeout(() =>{
        }
                
        const r = useRouter();
        const pathname = r.pathname;
        const currentPage = getPageIndex(pathname);
        const [page, setPage] = useState(currentPage);
        console.log(currentPage + " " + page + " " + pathname);
        
        return(
                <Wrapper>
                        <FlexBox>Notifications</FlexBox>
                        <BottomNavigation
                                value={page}
                                onChange={handlePageChange}
                                sx={{
                                        position: "absolute", bottom: "0", width: "100vw", zindex: 2,
                                        "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                                                color: "#131313"},
                                        "& .Mui-selected, .Mui-selected > svg": {
                                          color: "#FF758C"
                                        }
                                        
                                    }}>
                                <BottomNavigationAction value = '/homepage' label="Home" icon={<HomeRoundedIcon /> } onClick={()=>r.push("/homepage")}/>
                                <BottomNavigationAction value = '/resources' label="Resources" icon={<ImportContactsRoundedIcon />} onClick={()=>r.push("/resources")}/>
                                <BottomNavigationAction label=" " icon={<AddRoundedIcon />} />
                                <BottomNavigationAction value = '/notifications' label="Notifications" icon={<NotificationsNoneRoundedIcon />}onClick={()=>r.push("/notifications")}/>
                                <BottomNavigationAction label="Profile" value = '/profile' icon={<PersonOutlineRoundedIcon />}onClick={()=>r.push("/profile")} />
                         </BottomNavigation>
                </Wrapper>


        )


}