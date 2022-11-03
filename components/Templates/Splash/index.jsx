import styled from 'styled-components';
import { PostContent } from '../../Atoms/PostContent';
import { OTDTitle } from '../../Atoms/OTDTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import { Logo } from '../../Atoms/Logo';
import { Spacer } from '../../Atoms/Spacer';
import { Background } from '../../../styles/globals';
import { Button }   from '../../Atoms/Button';
import { SplashImg } from '../../Atoms/SplashImg';
import { useRouter } from 'next/router';
import {useUser} from '../../../lib/hooks/useUser';

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

    return (
        <Background height="100vh">
            <PostDiv>
                <Logo />
                <OTDTitle title="I got a queery" fontSize="2em"/>
                <Spacer size="20" />
            </PostDiv>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                pagination={true}
                modules={[Pagination]}
                autoplay={{delay: 1000}}
                loop={true}
                // navigation={true}
            >
                <SwiperSlide>
                    <ImageDiv>
                        <SplashImg img='/Carousel_1.svg' />
                        <PostContent textAlign="center" content="Safely ask a question (“Queery”) or share a story with like-minded LGBTQA+ users seeking to share experiences." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <SplashImg img='/Carousel_2.svg' />
                        <PostContent textAlign="center" text-align="center" content="Access curated resources such as informative articles about LGBTQA+ related content." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <SplashImg img='/Carousel_3.svg' />
                        <PostContent textAlign="center" content="Customize your profile and easily view your saved articles and saved posts." />
                    </ImageDiv>
                </SwiperSlide>
            </Swiper>
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
                                                <Button size='long' onClick = {() => r.push('/test/temporaryLogout')} label="Logout" />
                                            </>
                                        ) :
                                        (
                                            <>
                                                <Spacer size="40"/>
                                                <Button size='long' label="Login" onClick = {() => r.push('/test/temporaryLogin')}/>
                                                <Spacer size="20"/>
                                                <Button size='long' label="Sign up" />
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
        </Background>
    );
}