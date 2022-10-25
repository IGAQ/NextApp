import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
import { Navigation } from 'swiper';
import { OTDCard } from '../../Organisms/OTDCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { queeryQuestions } from '../../../data/qotd';

export function OTDBase({title, prompt, replies}){
    console.log(queeryQuestions);
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
                {queeryQuestions.map((qotd) => (
                    <SwiperSlide key = {qotd.id}>
                        <OTDCard  title="Queery of the day" prompt={qotd.question} replies={replies}/>
                    </SwiperSlide>
                ))
                }
            </SwiperWrapper>
        </Swiper>
    );
}