import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { OTDCard } from '../../../Organisms/OfTheDay/OTDCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { queeryQuestions } from '../../../../data/qotd';
import { Carousel } from '@mantine/carousel';

export function OTDBase({title, prompt, replies}){
    console.debug('queeryQuestions', queeryQuestions);
    return (
        <Carousel 
            slideGap='md'
            slidesPerView={1}
            controlsPosition="outside"
            controls="arrows"
            arrowsColor="gray"
            arrowsSize="lg"
            arrowsClassName="mantine-arrow"
            arrowsStyle={{ backgroundColor: 'white' }}
            arrowsRadius="md"
            arrowsShadow="sm"
            loop
            mx='auto'
            sx={{ maxWidth: 730 }}
        >
            <>
                {queeryQuestions.map((qotd) => (
                    <Carousel.Slide key = {qotd.id}>
                        <OTDCard  title="Queery of the day" prompt={qotd.question} replies={replies}/>
                    </Carousel.Slide>
                ))
                }
            </>
        </Carousel>
    );
}

export function StoryOTD({title, prompt, replies}){
    console.debug('queeryQuestions', queeryQuestions);
    return (
        <Carousel 
            slideGap='md'
            slidesPerView={1}
            controlsPosition="outside"
            controls="arrows"
            arrowsColor="gray"
            arrowsSize="lg"
            arrowsClassName="mantine-arrow"
            arrowsStyle={{ backgroundColor: 'white' }}
            arrowsRadius="md"
            arrowsShadow="sm"
            loop
        >
            <>
                {queeryQuestions.map((sotd) => (
                    <Carousel.Slide key = {sotd.id}>
                        <OTDCard  title="Story of the day" prompt={sotd.question} replies={replies}/>
                    </Carousel.Slide>
                ))
                }
            </>
        </Carousel>
    );
}