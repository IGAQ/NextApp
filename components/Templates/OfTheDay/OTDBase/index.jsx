import { OTDCard, OTDStory } from '../../../Organisms/OfTheDay/OTDCard';
import { queeryQuestions } from '../../../../data/qotd';
import { storyPrompts } from '../../../../data/sotd';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import * as postService from '../../../../lib/postService';
import { useEffect } from 'react';
import { InPageLoader } from '../../../Atoms/Common/Loader';
import { useRouter } from 'next/router';


export function OTDBase({title, prompt, replies, activeTab}){
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
            {showQueery.length === 0 ? (
                <InPageLoader/>
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
                    {activeTab === 'queery' && showQueery.map((qotd) => (
                        <Carousel.Slide key = {qotd.postId}>
                            <OTDCard  title="Queery of the day" prompt={qotd.postTitle} onClick={()=>r.push(`/homepage/${qotd.postId}`)} replies='1'/>
                        </Carousel.Slide>
                    ))}
                    {activeTab === 'story' && showStory.map((sotd) => (
                        <Carousel.Slide key={sotd.postId}>
                            <OTDCard color='#C2ADFF' title="Story of the day" prompt={sotd.postTitle} onClick={()=>r.push(`/homepage/${sotd.postId}`)} replies='0'/>
                        </Carousel.Slide>
                    ))} 
                </Carousel>
            )}
            
                
        </>
        
    );
}