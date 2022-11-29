import styled from 'styled-components';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {AiFillHome} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {FaBell} from 'react-icons/fa';
import {BsPlusLg} from 'react-icons/bs';
import {BsPersonFill} from 'react-icons/bs';
import {NewPostModal} from '../../Post/NewPostModal';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import { Logo } from '../../../Atoms/Common/Logo';
import {SearchAndFilter} from '../SearchAndFilter';
import {FilterContext, UserActionsHandlersContext, UserContext} from '../../../../lib/contexts';
import styles from './WebNav.module.css';
import { SearchBar } from '../../../Molecules/Common/SearchBar';
import { Text } from '../../../Atoms/Common/Text';
import { Spacer } from '../../../Atoms/Common/Spacer';

const NavBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 15;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  padding: 0 15px;
`;

const IconHolder = styled(motion.div)`
  align-items: center;
  margin: ${props => props.margin || '0'};
`;

const Middle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: #ff758c;
  color: #ffffff;
  padding: 12px 14px 10px;
  width: 15em;
`;

const WebNavBase = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 15px 25px 10px;
    z-index: 15;
    background-color: #F5F5F5;
    // box-shadow: 0 7px 15px 3px rgb(117 37 37 / 35%);
    top: 0;
    width: 100%;
    height: 70px;
    `;

export function WebNav() {
    const r = useRouter();
    const [postModal, setPostModal] = useState(false);
    const [filterMenu, openFilterMenu] = useState(false);
    const [filteringAndSorting, setFilteringAndSorting] = useState(null);
    
    function closePostModal() {
        setPostModal(false);
    }

    function openPostModal() {
        setPostModal(true);

    }

    function handleAppliedFilters({filters, sorts}) {
        setFilteringAndSorting({filters, sorts});
        openFilterMenu(false);
    }

    const handleSearchTermChange = (term) => {
        if (lastTimeSearchTermChanged.current + 50 < Date.now()) {
            searchTerm.current = term;
            lastTimeSearchTermChanged.current = Date.now();

            // search
            eventService.emit('search-triggered', term);
        }
    };

    useEffect(() => {
        r.events.on('routeChangeStart', closePostModal);
        return () => {
            r.events.off('routeChangeStart', closePostModal);
        };
    }, [r.events]);

    return (
        <WebNavBase>
            <div onClick={()=> r.push('/homepage')}>
                <Logo height={95} width={95} />
            </div>
            <Spacer axis="horizontal" size={20}/>

            <UserActionsHandlersContext.Provider value={{
                handleSearchTermChange,
            }}>
                <SearchBar/>
                <Spacer axis="horizontal" size={125}/>
            </UserActionsHandlersContext.Provider>
            {postModal && <NewPostModal onClick={closePostModal}/>}
            <NavBase>
                <Link href='/resources' scroll={false}>
                    <StyledLink className={r.pathname === '/resources' ? styles.activePage : ' '}>
                        <IconHolder>
                            <ImBooks size={24}/>
                        </IconHolder>
                        <Spacer axis="horizontal" size={5}/>
                        Resources
                    </StyledLink>
                </Link>
                
                <Link href='/notifications' scroll={false}>
                    <StyledLink className={r.pathname === '/notifications' ? styles.activePage : ' '}>
                        
                        <IconHolder margin="0 0 0 0">
                            <FaBell size={18}/>
                        </IconHolder>
                        <Spacer axis="horizontal" size={5}/>
                        Notifications
                    </StyledLink>
                </Link>
                <Link href='/profile' scroll={false}>
                    <StyledLink className={r.pathname === '/profile' ? styles.activePage : ' '}>
                        <IconHolder>
                            <BsPersonFill size={24}/>
                        </IconHolder>
                        <Spacer axis="horizontal" size={5}/>
                        Profile
                    </StyledLink>
                </Link>
                <Spacer axis="horizontal" size={30}/>
                <Middle onClick={openPostModal}>
                    <IconHolder>
                        <BsPlusLg size={16}/>
                    </IconHolder>
                    <Spacer axis="horizontal" size={10}/>
                    <Text size = "1em" weight = "500" color = "#ffffff" text = "New queery/story"/>
                </Middle>

            </NavBase>
        </WebNavBase>
    );
}