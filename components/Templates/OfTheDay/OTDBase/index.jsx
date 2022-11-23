import { OTDCard, OTDStory } from '../../../Organisms/OfTheDay/OTDCard';
import { queeryQuestions } from '../../../../data/qotd';
import { storyPrompts } from '../../../../data/sotd';
import { Carousel } from '@mantine/carousel';

export function OTDBase({title, prompt, replies, activeTab}){
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
                {activeTab === 'queery' && queeryQuestions.map((qotd) => (
                    <Carousel.Slide key = {qotd.id}>
                        <OTDCard  title="Queery of the day" prompt={qotd.question} replies={replies}/>
                    </Carousel.Slide>
                ))}
                {activeTab === 'story' && storyPrompts.map((sotd) => (
                    <Carousel.Slide key={sotd.id}>
                        <OTDStory color='#C2ADFF' title="Story of the day" prompt={sotd.prompt} replies={replies}/>
                    </Carousel.Slide>
                ))}
        

                {/* {queeryQuestions.map((qotd) => (
                    <Carousel.Slide key = {qotd.id}>
                        <OTDCard  title="Queery of the day" prompt={qotd.question} replies={replies}/>
                    </Carousel.Slide>
                ))
                } */}
            </>
        </Carousel>
    );
}

// export function StoryOTD({title, prompt, replies}){
//     console.debug('queeryQuestions', queeryQuestions);
//     return (
//         <Carousel 
//             slideGap='md'
//             slidesPerView={1}
//             controlsPosition="outside"
//             controls="arrows"
//             arrowsColor="gray"
//             arrowsSize="lg"
//             arrowsClassName="mantine-arrow"
//             arrowsStyle={{ backgroundColor: 'white' }}
//             arrowsRadius="md"
//             arrowsShadow="sm"
//             loop
//         >
//             <>
//                 {queeryQuestions.map((sotd) => (
//                     <Carousel.Slide key = {sotd.id}>
//                         <OTDCard  title="Story of the day" prompt={sotd.question} replies={replies}/>
//                     </Carousel.Slide>
//                 ))
//                 }
//             </>
//         </Carousel>
//     );
// }