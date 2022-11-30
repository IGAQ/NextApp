import {FlexBox} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {HamburgerIcon} from '../../components/Atoms/Common/Icons/HamburgerIcon';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {Text} from '../../components/Atoms/Common/Text';
import {Button} from '../../components/Atoms/Common/Buttons/Button';
import {ProfileIcon} from '../../components/Atoms/Common/Icons/ProfileIcon';
import {BadgeShowcase} from '../../components/Molecules/Common/BadgeShowcase';
import {ProfileBio} from '../../components/Molecules/Common/ProfileBio';
import {Drawer, Group} from '@mantine/core';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useUser} from '../../lib/hooks/useUser';
import {InPageLoader} from '../../components/Atoms/Common/Loader';
import React from 'react';
import {UserContext} from '../../lib/contexts';

export default function Profile(props) {
    const [user, userAuthLoaded] = useUser({redirectTo: '/login'});

    const [drawerOpened, setDrawerOpened] = useState(false);
    const r = useRouter();

    return !user || !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <UserContext.Provider value={user}>
            <FlexBox align="stretch" justify="center" bgColor="#A5CEFF">
                <Drawer
                    opened={drawerOpened}
                    onClose={() => setDrawerOpened(false)}
                    title="Username"
                    padding="md"
                    size="lg"
                    position="right"
                >
                    <Button
                        label="Edit Profile"
                        size="long"
                        onClick={() => r.push('/profileSetup')}
                    />
                    <Spacer axis="vertical" size={25} />
                    <Button
                        label="Settings"
                        size="long"
                        onClick={() => r.push('/settings')}
                    />
                    <Spacer axis="vertical" size={25} />
                    <Button
                        label="Help"
                        size="long"
                        onClick={() => r.push('/help')}
                    />
                    <Spacer axis="vertical" size={25} />
                    <Button
                        label="Log Out"
                        size="long"
                        onClick={() => r.push('/test/temporaryLogout')}
                    />
                </Drawer>
                <HamburgerIcon onClick={() => setDrawerOpened(true)} />
                <PostTitle title="Profile" />
                <Spacer axis="vertical" size={45} />
                <FlexBox padding="25px 0px" align="center" bgColor="#DFEEFF">
                    <ProfileBio />
                    <Spacer axis="vertical" size={25} />
                    <FlexBox>
                        <Button size="long" label="View Post History" />
                        <Spacer axis="vertical" size={25} />
                        <Button size="long" label="Saved Resources" />
                        <Spacer axis="vertical" size={25} />
                        <Button size="long" label="Saved Posts" />
                    </FlexBox>
                </FlexBox>
                <Spacer axis="vertical" size={15} />
                <BadgeShowcase />
                <Spacer axis="vertical" size={55} />
            </FlexBox>
        </UserContext.Provider>
    );
}
