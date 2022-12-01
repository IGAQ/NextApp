import styled from 'styled-components';
import {PostContent} from '../../../Atoms/Post/PostContent';
import {OTDTitle} from '../../../Atoms/OfTheDay/OTDTitle';
import {Logo} from '../../../Atoms/Common/Logo';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import {SplashImg} from '../../../Atoms/Common/SplashImg';
import {useRouter} from 'next/router';
import {useUser} from '../../../../lib/hooks/useUser';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const PostDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export function Splash() {
    const r = useRouter();
    const [user, userAuthLoaded] = useUser();
    const autoplay = useRef(Autoplay({delay: 4000}));

    return (
        <>
            <PostDiv>
                <Logo/>
                <OTDTitle color ="#ff758c" title="I got a queery" fontSize="2em"/>
                <Spacer size="20"/>
            </PostDiv>
            <Carousel 
                sx={{ maxWidth: 720 }}
                mx="auto"
                withIndicators
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                loop
                styles={{
                    indicators: {
                        bottom: -20,
                        color: 'black',
                    },
                }}
            >
                <Carousel.Slide>
                    <ImageDiv>
                        <SplashImg img='/assets/images/carousels/Carousel_1.svg'/>
                        <PostContent textAlign="center" maxHeight='auto'
                            content="Safely ask a question (“Queery”) or share a story with like-minded LGBTQA+ users seeking to share experiences."/>
                    </ImageDiv>
                </Carousel.Slide>
                <Carousel.Slide>
                    <ImageDiv>
                        <SplashImg img='/assets/images/carousels/Carousel_2.svg'/>
                        <PostContent textAlign="center" text-align="center" maxHeight='auto'
                            content="Access curated resources such as informative articles about LGBTQA+ related content."/>
                    </ImageDiv>
                </Carousel.Slide>
                <Carousel.Slide>
                    <ImageDiv>
                        <SplashImg img='/assets/images/carousels/Carousel_3.svg'/>
                        <PostContent textAlign="center" maxHeight='auto'
                            content="Customize your profile and easily view your saved articles and saved posts."/>
                    </ImageDiv>
                </Carousel.Slide>
            </Carousel>
            <Spacer size="25"/>
            <PostDiv>
                {
                    userAuthLoaded ?
                        (
                            <>
                                {
                                    !!(user?.userId) ?
                                        (
                                            <>
                                                <OTDTitle title={`Welcome, ${user.username}!`} fontSize="1.6em"/>
                                                <Spacer size="20"/>
                                                <Button size='long' onClick={() => r.push('/CustomProfile')}
                                                    label="Profile Setup"/>
                                                <Spacer size="20"/>
                                                <Button size='long' onClick={() => r.push('/homepage')}
                                                    label="Homepage"/>
                                                <Spacer size="20"/>
                                                <Button size='long' onClick={() => r.push('/test/temporaryLogout')}
                                                    label="Logout"/>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <Spacer size="40"/>
                                                <Button size='long' label="Login"
                                                    onClick={() => r.push('/login')}/>
                                                <Spacer size="20"/>
                                                <Button size='long' label="Sign up"
                                                    onClick={() => r.push('/signup')}/>
                                            </>
                                        )
                                }

                            </>
                        ) :
                        (
                            <p>Loading...</p>
                        )
                }
            </PostDiv>
            <Spacer size="35"/>
        </>

    );
}