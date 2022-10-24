import { Swiper, SwiperSlide } from 'swiper/react';
import { OTDCard } from '../../Organisms/OTDCard';

export function OTBase(){
    return (
        <Swiper
            slidePerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            spaceBetween={30}
        >
            <SwiperSlide>
                <OTDCard />
            </SwiperSlide>
        </Swiper>
    );
}