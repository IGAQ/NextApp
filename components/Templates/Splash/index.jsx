import styled from 'styled-components';
import { PostContent } from '../../Atoms/PostContent';
import { OTDTitle } from '../../Atoms/OTDTitle';
import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import { Logo } from '../../Atoms/Logo';
import { Spacer } from '../../Atoms/Spacer';

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
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
`;

export function Splash({ title, content }) {
    return (
        <>
            <PostDiv>
                <Logo />
                <OTDTitle title="I got a queery" fontSize="2em"/>
                <Spacer size="20" />
            </PostDiv>
            <Swiper
                slidePerView={1}
                centeredSlides={true}
                pagination={true}
                modules={[Pagination]}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{delay: 1000}}
            >
                <SwiperSlide>
                    <ImageDiv>
                        <Image src="/Login_Carousel.png" width={300} height={300} alt="Image 1" />
                        <PostContent textAlign="center" content="Safely ask a question (“Queery”) or share a story with like-minded LGBTQA+ users seeking to share experiences." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <Image src="/Login_Carousel-1.png" width={300} height={300} alt="Image 2" />
                        <PostContent textAlign="center" text-align="center" content="Access curated resources such as informative articles about LGBTQA+ related content." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <Image src="/Login_Carousel-2.png" width={300} height={300} alt="Image 3" />
                        <PostContent textAlign="center" content="Customize your profile and easily view your saved articles and saved posts." />
                    </ImageDiv>
                </SwiperSlide>
            </Swiper>   
        </>
    );
}