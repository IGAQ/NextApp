import { OTDCard, OTDStory } from '../../../Organisms/OfTheDay/OTDCard';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import * as postService from '../../../../lib/services/postService';
import { useEffect } from 'react';
import { InPageQueeryLoader } from '../../../Atoms/Common/Loader';
import { useRouter } from 'next/router';
import {getPostsOfTheDay} from '../../../../lib/services/postService';


export function OTDBase({activeTab}){
    const [showQueery, setShowQueery] = useState(null);
    const [showStory, setShowStory] = useState(null);
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

    const render = () => {
        if (activeTab === 'queery') {
            if (showQueery.length === 0) {
                return <div style={{height: '350px'}}>No Queeries found 😭</div>;
            }
            return showQueery.map((queeryOfTheDay) => (
                <Carousel.Slide key={'queeryOfTheDay-' + queeryOfTheDay.postId}>
                    <OTDCard  title="Queery of the day" prompt={queeryOfTheDay.postTitle} onClick={()=>r.push(`/homepage/${queeryOfTheDay.postId}`)} replies={queeryOfTheDay.totalComments}/>
                </Carousel.Slide>
            ));
        } else {
            if (showStory.length === 0) {
                return <div style={{height: '350px'}}>No Stories found 😭</div>;
            }
            return showStory.map((storyOfTheDay) => (
                <Carousel.Slide key={'storyOfTheDay-' + storyOfTheDay.postId}>
                    <OTDCard color='#C2ADFF' title="Story of the day" prompt={storyOfTheDay.postTitle} onClick={()=>r.push(`/homepage/${storyOfTheDay.postId}`)} replies={storyOfTheDay.totalComments}/>
                </Carousel.Slide>
            ));
        }
    };

    return (
        
        <>
            {(!showQueery || !showStory) ? (
                <InPageQueeryLoader/>
            ) : (
                <Carousel
                    slideGap='md'
                    controls="arrows"
                    loop
                    mx='auto'
                    sx={{ maxWidth: 730 }}
                >
                    {render()}
                </Carousel>
            )}
        </>
    );
}