import { OTDCard, OTDStory } from '../../../Organisms/OfTheDay/OTDCard';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import * as postService from '../../../../lib/postService';
import { useEffect } from 'react';
import { InPageQueeryLoader } from '../../../Atoms/Common/Loader';
import { useRouter } from 'next/router';


export function OTDBase({activeTab}){
    const [showQueery, setShowQueery] = useState([]);
    const [showStory, setShowStory] = useState([]);
    const r = useRouter();

    useEffect (() => {
        (async function () {
            const post = await postService.getPosts('queery');
            console.log(post);
            
            for (let i = 0; i < 3; i++) {
                setShowQueery(showQueery => [...showQueery, post[Math .floor(Math.random() * post.length)]]);
            }
        })();
    }, []);

    useEffect (() => {
        (async function () {
            const post = await postService.getPosts('story');
            console.log(post);
            
            for (let i = 0; i < 3; i++) {
                setShowStory(showStory => [...showStory, post[Math .floor(Math.random() * post.length)]]);
            }
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