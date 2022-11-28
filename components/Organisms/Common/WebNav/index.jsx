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

const NavBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px 25px 10px;
  z-index: 15;
`;

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  padding: 0 20px;
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
    
    function handleOpenFilter() {
        openFilterMenu(true);
    }

    function handleCloseFilter() {
        openFilterMenu(false);
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
                <Logo height={50} width={50} />
            </div>
            <UserActionsHandlersContext.Provider value={{
                handleOpenFilter,
                handleSearchTermChange,
            }}>
                <SearchAndFilter/>
            </UserActionsHandlersContext.Provider>
            {postModal && <NewPostModal onClick={closePostModal}/>}
            <NavBase>
                <Link href='/homepage' scroll={false}>
                    <StyledLink className={r.pathname === '/homepage' ? styles.activePage : ' '}>
                        Home
                        <IconHolder>
                            <AiFillHome size={28}/>
                        </IconHolder>
                        
                    </StyledLink>
                </Link>
                <Link href='/resources' scroll={false}>
                    <StyledLink className={r.pathname === '/resources' ? styles.activePage : ' '}>
                        Resources
                        <IconHolder>
                            <ImBooks size={28}/>
                        </IconHolder>
                        
                    </StyledLink>
                </Link>
                <Middle onClick={openPostModal}>
                    <IconHolder>
                        <BsPlusLg size={26}/>
                    </IconHolder>
                    {/* <Spacer axis="vertical" size={10}/> */}
                </Middle>
                <Link href='/notifications' scroll={false}>
                    <StyledLink className={r.pathname === '/notifications' ? styles.activePage : ' '}>
                        Notifications
                        <IconHolder margin="0 0 4px 0">
                            <FaBell size={22}/>
                        </IconHolder>
                        
                    </StyledLink>
                </Link>
                <Link href='/profile' scroll={false}>
                    <StyledLink className={r.pathname === '/profile' ? styles.activePage : ' '}>
                        Profile
                        <IconHolder>
                            <BsPersonFill size={28}/>
                        </IconHolder>
                        
                    </StyledLink>
                </Link>

            </NavBase>
        </WebNavBase>
    );
}