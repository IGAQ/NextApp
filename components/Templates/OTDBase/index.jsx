import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import { Navigation } from 'swiper';
import { OTDCard } from '../../Organisms/OTDCard';
import 'swiper/css';
import 'swiper/css/navigation';

export function OTDBase({title, prompt, replies, qotdData}){
    return (
        <Swiper
            slidePerView={1}
            centeredSlides={true}
            modules={[Navigation]}
            onSwiper={(swiper) => console.log(swiper)}
            spaceBetween={30}
            navigation={true}
            loop={true}
        >
            <SwiperWrapper>
                {qotdData.map((qotd) => (
                    <SwiperSlide key = {qotd}>
                        <OTDCard  title="Queery of the day" prompt={qotd.queeryQuestions} replies={replies}/>
                    </SwiperSlide>
                ))
                }
            </SwiperWrapper>
        </Swiper>
    );
}