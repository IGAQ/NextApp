import styled from 'styled-components';
import { PostContent } from '../../Atoms/PostContent';
import { OTDTitle } from '../../Atoms/OTDTitle';
import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
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
        <PostDiv>
            <OTDTitle title="I got a queery" />
            <Swiper
                slidePerView={1}
                centeredSlides={true}
                pagination={true}
                modules={[Pagination]}
                height={500}
                width={500}
            >
                <SwiperSlide>
                    <ImageDiv>
                        <img src="https://picsum.photos/200/300" width={200} height={200} alt="Image 1" />
                        <PostContent content="Safely ask a question (“Queery”) or share a story with like-minded LGBTQA+ users seeking to share experiences." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <img src="https://picsum.photos/200/300" width={200} height={200} alt="Image 2" />
                        <PostContent content="Access curated resources such as informative articles about LGBTQA+ related content." />
                    </ImageDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageDiv>
                        <img src="https://picsum.photos/200/300" width={200} height={200} alt="Image 3" />
                        <PostContent content="Customize your profile and easily view your saved articles and saved posts." />
                    </ImageDiv>
                </SwiperSlide>
            </Swiper>   
        </PostDiv>
    );
}