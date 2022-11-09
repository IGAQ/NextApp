import { FlexBox, Wrapper } from '../../styles/globals';
import { Spacer } from '../../components/Atoms/Spacer';
import { PostForm } from '../../components/Organisms/PostForm';
import { PostTitle } from '../../components/Molecules/PostTitle';
import axios from 'axios';
import * as storage from '../../lib/storage';
import {API_SERVER, JWT_TOKEN_LOCAL_STORAGE_KEY} from '../../lib/constants';


export async function getStaticProps() {
    const res = await axios.get(`${API_SERVER}/postTags`);
    const postTags = res.data.filter((tag) => tag.tagName.toLowerCase() !== 'serious' && tag.tagName.toLowerCase() !== 'casual');
    return{
        props:{postTags},
    }; 
}

export default function NewStoryPage({postTags}) {

    async function handleStorySubmit(postTitle, postContent, postTagId, postTone, anonymous){
        const post = {
            postTitle: postTitle,
            postContent: postContent,
            postTagIds: [postTagId, postTone],
            anonymous: anonymous,
            // postTypeId: '95aaf886-064e-44b3-906f-3a7798945b7b',   
        };

        //check here with fullstack
        // try {
        //     let result = await axios.post('/api/story/create', post ,{
        //         headers: {
        //             Authorization: `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
        //         },
        //     });
        //     return result.data;
        // }
        // catch (error) {
        //     return false;
        // }
        try {
            let result = await axios.post('/api/posts/create', post ,{
                headers: {
                    Authorization: `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
                },
            });
            return result.data;
        }
        catch (error) {
            return false;
        }

    }
  
    return (
        <Wrapper align = "stretch" bgColor = "#C2ADff">
            <Spacer axis="vertical" size={15}/>
            <PostTitle title = "Post a Story"/>
            <Spacer axis="vertical" size={25}/>
            <FlexBox bgColor = "#DFEEFF" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
                <Spacer axis="vertical" size={25}/>
                <PostForm type = "story" handleSubmit={handleStorySubmit} postTags = {postTags}></PostForm>
                <Spacer axis="vertical" size={25}/>
            </FlexBox>
        </Wrapper>
    );
}
