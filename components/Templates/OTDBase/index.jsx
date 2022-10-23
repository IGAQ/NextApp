import { Swiper, SwiperSlide } from 'swiper/react';
import { OTDCard } from '../../Organisms/OTDCard';

export function OTBase(){
    return (
        <Swiper
            slidePerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            spaceBetween={30}
            height={300}
            width={300}
        >
            <SwiperSlide>
                <OTDCard />
            </SwiperSlide>
        </Swiper>
    );
}