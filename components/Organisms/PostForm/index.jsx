import { TextInput } from '../../Atoms/TextInput';
import { Spacer } from '../../Atoms/Spacer';
import { MaxTextArea } from '../../Molecules/MaxTextArea';
import { Breakline } from '../../Atoms/Breakline';
import { RadioGroup } from '../../Molecules/RadioGroup';
import { ChipGroup } from '../../Molecules/ChipGroup';
import { MantineProvider } from '@mantine/core';
import { StyledSubmitButton } from '../../Atoms/SubmitButton';
import { LabelledSwitch } from '../../Molecules/LabelledSwitch';
import { FlexBox, ModalBackdrop } from '../../../styles/globals';
import { useState } from 'react';
import { ContentCheckModal } from '../ContentCheckModal';
import { SubmissionModal } from '../SubmissionModal';
import {useRouter} from 'next/router';

export function PostForm ({handleSubmit, props, postTags}){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tone, setTone] = useState('casual');
    const [tag, setTag] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [showError, setShowError] = useState(false);

    const [showSubmissionModal, setShowSubmissionModal] = useState(false);
    const [createdPostId, setCreatedPostId] = useState(null);

    const router = useRouter();

    async function handleCheckSubmission(e){
        e.preventDefault();
        let createdPost = await handleSubmit(title, content, tag, tone, anonymous);
        if (createdPost) {
            setShowSubmissionModal(true);
            setCreatedPostId(createdPost.postId);
        } else {
            setShowError(true);
        }
    }

    function closeContentCheckModal(){
        setShowError(false);
    }

    return(
        <MantineProvider 
            theme = {{
                fontFamily: 'Heebo, sans-serif',
                colors: {
                    'queeryPink': ['#ffe2e9','#ffb2bf','#ff758c','#fe4e6a','#C23950','#e40b27','#b2041f', '#800015','#4e000c','#1f0002'],
                    'storyPurple':['#eee4ff','#c6b3ff','#a880fd', '#924efc', '#821dfb','#7906e2','#6a03b0','#54017e', '#38004d','#17001d'],
                },
            }}>
            {/* <ContentCheckModal/> */}

            {(showSubmissionModal) && <SubmissionModal postId={createdPostId}/>}

            {(showError) && <ContentCheckModal onClick = {closeContentCheckModal}/>}
            <form onSubmit = {(e)=> handleCheckSubmission(e)}>
                <FlexBox align ="stretch">
                    <TextInput onChange={(e) => setTitle(e.target.value)} text = {title} name = "title" label = "Post title" id = "title" placeholder = "Enter your title"/>
                    <Spacer axis="vertical" size={25}/>
                    <MaxTextArea onChange={(e) => setContent(e.target.value)}name = "content" id = "content" text = {content}  label = "Queery" placeholder = "Enter your queery" maxLength = "250"  />
                    <Spacer axis="vertical" size={25}/>
                    <Breakline/>
                    <Spacer axis="vertical" size={25}/>
                    <FlexBox>
                        <RadioGroup tone = {tone} setTone = {setTone} />
                        <Spacer axis="vertical" size={35}/>
                        <ChipGroup onChange = {setTag} postTags = { postTags } />
                        <Spacer axis="vertical" size={35}/>
                        <LabelledSwitch checked = {anonymous} setChecked = {()=> setAnonymous(!anonymous)} label = 'Post anonymously' ></LabelledSwitch>
                    </FlexBox>
                    <Spacer axis="vertical" size={35}/>
                    <StyledSubmitButton text = "Submit queery"/>
                </FlexBox>
            </form>
            
        </MantineProvider>

    );
}