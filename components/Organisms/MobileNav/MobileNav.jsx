import styled from 'styled-components';
import{ motion } from 'framer-motion';
import Link from 'next/link';
import {AiFillHome}from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import {FaBell}from 'react-icons/fa';
import {BsPlusLg}from 'react-icons/bs';
import {BsPersonFill}from 'react-icons/bs';
import { NewPostModal } from '../NewPostModal';
import { ModalBackdrop } from '../../../styles/globals';
import { useEffect, useState } from 'react';
import styles from './MobileNav.module.css';
import { useRouter } from 'next/router';

const NavBase = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
position: fixed;
width: 100vw;
bottom: 0;
padding: 15px 25px 10px;
z-index: 15;
background-color: #FFF9F2;
box-shadow: 0px 7px 15px 3px rgb(117 37 37 / 35%);
border-radius: 10px 10px 0px 0px;
`;

const StyledLink = styled.a`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 0.85rem;
`;

const IconHolder = styled(motion.div)`
align-items: center;
margin: ${props => props.margin || '0'};
`;

const Middle = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: none;
border-radius: 100%;
background-color: #ff758c;
color: #ffffff;
padding: 12px 14px 10px;
`;

export function MobileNav() {
    const r = useRouter();
    const {events} = useRouter;

    const [postModal, setPostModal] = useState(false);

    function closePostModal(){
        setPostModal(false);
    }
   
    function openPostModal(){
        setPostModal(true);

    }
    
    useEffect(()=> {
        r.events.on('routeChangeStart', closePostModal);
        return()=> {r.events.off('routeChangeStart', closePostModal);
        };
    }, [r.events]);

    return (
        <>
            {postModal && <NewPostModal onClick = {closePostModal}/>}
            {postModal && <ModalBackdrop onClick = {closePostModal}/>}
            <NavBase>
                <Link href='/homepage' scroll = {false}>
                    <StyledLink className = {r.pathname == '/homepage' ? styles.activePage :' '}>
                        <IconHolder>
                            <AiFillHome size = {28}/>
                        </IconHolder>
                    Home
                    </StyledLink>
                </Link>
                <Link href='/resources' scroll = {false}>
                    <StyledLink className = {r.pathname == '/resources' ? styles.activePage :' '}>
                        <IconHolder>
                            <ImBooks size = {28}/>
                        </IconHolder>
                    Resources
                    </StyledLink>
                </Link>
                <Middle onClick = {openPostModal}>
                    <IconHolder>
                        <BsPlusLg size = {26}/>
                    </IconHolder>
                    {/* <Spacer axis="vertical" size={10}/> */}
                </Middle>
                <Link href='/notifications' scroll = {false}>
                    <StyledLink className = {r.pathname == '/notifications' ? styles.activePage :' '}>
                        <IconHolder margin = "0 0 4px 0">
                            <FaBell size = {22}/>
                        </IconHolder>
                    Notifications
                    </StyledLink>
                </Link>
                <Link href='/profile' scroll = {false}>
                    <StyledLink className = {r.pathname == '/profile' ? styles.activePage :' '}>
                        <IconHolder>
                            <BsPersonFill size = {28}/>
                        </IconHolder>
                    Profile
                    </StyledLink>
                </Link>

            </NavBase>
        </>
    );
}