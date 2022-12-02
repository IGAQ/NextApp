import styled from 'styled-components';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {AiFillHome} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {FaBell} from 'react-icons/fa';
import {BsPlusLg} from 'react-icons/bs';
import {BsPersonFill} from 'react-icons/bs';
import {NewPostModal} from '../../Post/NewPostModal';
import React, {useEffect, useState} from 'react';
import styles from './MobileNav.module.css';
import Router, {useRouter} from 'next/router';
import {eventService} from '../../../../lib/services/eventService';

const NavBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding: 15px 25px 10px;
  z-index: 15;
  background-color: #F5F5F5;
  box-shadow: 0 7px 15px 3px rgb(117 37 37 / 35%);
  border-radius: 10px 10px 0 0;
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

const NotificationBadge = styled.span`
  position: absolute;
  top: ${props => props.activePage ? '-10px' : '10px'};
  right: ${props => props.activePage ? '17px' : ''};
  border-radius: 200px;
  color: white;
  text-align: center;
  background: #ff758c;
  width: 20px;
  height: 20px;
`;

export function MobileNav({notificationBadge}) {
    const r = useRouter();
    const [postModal, setPostModal] = useState(false);

    function closePostModal() {
        setPostModal(false);
    }

    function openPostModal() {
        setPostModal(true);
    }

    useEffect(() => {
        r.events.on('routeChangeStart', closePostModal);

        eventService.on('open-creation-post', openPostModal);

        return () => {
            r.events.off('routeChangeStart', closePostModal);
            eventService.off('open-creation-post', openPostModal);
        };
    }, [r.events]);

    return (
        <>
            {postModal && <NewPostModal onClick={closePostModal}/>}
            {/* {postModal && <ModalBackdrop onClick = {closePostModal}/>} */}
            <NavBase>
                <Link href='/homepage' scroll={false}>
                    <StyledLink className={r.pathname === '/homepage' ? styles.activePage : ' '}>
                        <IconHolder>
                            <AiFillHome size={28}/>
                        </IconHolder>
                        Home
                    </StyledLink>
                </Link>
                <Link href='/resources' scroll={false}>
                    <StyledLink className={r.pathname === '/resources' ? styles.activePage : ' '}>
                        <IconHolder>
                            <ImBooks size={28}/>
                        </IconHolder>
                        Resources
                    </StyledLink>
                </Link>
                <Middle onClick={openPostModal}>
                    <IconHolder>
                        <BsPlusLg size={26}/>
                    </IconHolder>
                    {/* <Spacer axis="vertical" size={10}/> */}
                </Middle>
                <Link href='/notifications' scroll={false}>
                    <StyledLink className={r.pathname === '/notifications' ? styles.activePage : ''}>
                        <IconHolder margin="0 0 4px 0">
                            <FaBell size={22}/>
                            {notificationBadge > 0 && <NotificationBadge activePage={r.pathname === '/notifications'}>{notificationBadge}</NotificationBadge>}
                        </IconHolder>
                        Notifications
                    </StyledLink>
                </Link>
                <Link href='/profile' scroll={false}>
                    <StyledLink className={r.pathname === '/profile' ? styles.activePage : ' '}>
                        <IconHolder>
                            <BsPersonFill size={28}/>
                        </IconHolder>
                        Profile
                    </StyledLink>
                </Link>

            </NavBase>
        </>
    );
}