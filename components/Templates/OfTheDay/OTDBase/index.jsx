import { OTDCard, OTDStory } from '../../../Organisms/OfTheDay/OTDCard';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import * as postService from '../../../../lib/services/postService';
import { useEffect } from 'react';
import { InPageQueeryLoader } from '../../../Atoms/Common/Loader';
import { useRouter } from 'next/router';
import {getPostsOfTheDay} from '../../../../lib/services/postService';


export function OTDBase({activeTab}){
    const [showQueery, setShowQueery] = useState([]);
    const [showStory, setShowStory] = useState([]);
    const r = useRouter();

    useEffect (() => {
        (async function () {
            const queeries = await postService.getPostsOfTheDay('queery');

            setShowQueery([...queeries]);
        })();
    }, []);

    useEffect (() => {
        (async function () {
            const stories = await postService.getPostsOfTheDay('story');

            setShowStory([...stories]);
        })();
    }, []);

    return (
        
        <>
            {(showQueery.length === 0 || showStory.length === 0) ? (
                <InPageQueeryLoader/>
            ) : (
                <Carousel 
                    slideGap='md'
                    slidesPerView={1}
                    controlsPosition="outside"
                    controls="arrows"
                    arrowsColor="gray"
                    arrowsSize="lg"
                    arrowsClassName="mantine-arrow"
                    arrowsStyle={{ backgroundColor: 'white' }}
                    loop
                    mx='auto'
                    sx={{ maxWidth: 730 }}
                >
                    {activeTab === 'queery' && showQueery.map((queeryOfTheDay) => (
                        <Carousel.Slide key = {queeryOfTheDay.postId}>
                            <OTDCard  title="Queery of the day" prompt={queeryOfTheDay.postTitle} onClick={()=>r.push(`/homepage/${queeryOfTheDay.postId}`)} replies={queeryOfTheDay.totalComments}/>
                        </Carousel.Slide>
                    ))}
                    {activeTab === 'story' && showStory.map((storyOfTheDay) => (
                        <Carousel.Slide key={Math.random() + storyOfTheDay.postId}>
                            <OTDCard color='#C2ADFF' title="Story of the day" prompt={storyOfTheDay.postTitle} onClick={()=>r.push(`/homepage/${storyOfTheDay.postId}`)} replies={storyOfTheDay.totalComments}/>
                        </Carousel.Slide>
                    ))} 
                </Carousel>
            )}
            
                
        </>
        
    );
}