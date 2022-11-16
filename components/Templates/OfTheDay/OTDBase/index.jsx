import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { OTDCard } from '../../../Organisms/OfTheDay/OTDCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { queeryQuestions } from '../../../../data/qotd';

export function OTDBase({title, prompt, replies}){
    console.debug('queeryQuestions', queeryQuestions);
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
            <>
                {queeryQuestions.map((qotd) => (
                    <SwiperSlide key = {qotd.id}>
                        <OTDCard  title="Queery of the day" prompt={qotd.question} replies={replies}/>
                    </SwiperSlide>
                ))
                }
            </>
        </Swiper>
    );
}