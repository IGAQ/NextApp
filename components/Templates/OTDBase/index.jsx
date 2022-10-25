import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import { Navigation } from 'swiper';
import { OTDCard } from '../../Organisms/OTDCard';
import 'swiper/css';
import 'swiper/css/navigation';

export function OTDBase({title, prompt, replies}){
    return (
        <Swiper
            slidePerView={1}
            centeredSlides={true}
            modules={[Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
            spaceBetween={30}
            navigation={true}
        >
            <SwiperWrapper>
                <SwiperSlide>
                    <OTDCard title={title} prompt={prompt} replies={replies}/>
                </SwiperSlide>
                <SwiperSlide>
                    <OTDCard title={title} prompt={prompt} replies={replies}/>
                </SwiperSlide>
            </SwiperWrapper>
        </Swiper>
    );
}