import { TextInput } from '../../Atoms/TextInput';
import { Spacer } from '../../../components/Atoms/Spacer';
import { MaxTextArea } from '../../../components/Molecules/MaxTextArea';
import { Breakline } from '../../../components/Atoms/Breakline';
import { RadioGroup } from '../../../components/Molecules/RadioGroup';
import { ChipGroup } from '../../../components/Molecules/ChipGroup';
import { postTags } from '../../../data/tags';
import { MantineProvider } from '@mantine/core';
import { StyledSubmitButton } from '../../../components/Atoms/SubmitButton';
import { LabelledSwitch } from '../../../components/Molecules/LabelledSwitch';
import { FlexBox } from '../../../styles/globals';
import { useState } from 'react';

export function PostForm (props){
    const [text, setText] = useState('');
    const [tone, setTone] = useState('casual');
    const [tag, setTag] = useState('General');
    const [anonymous, setAnonymous] = useState(false);
    
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log('some stuff');
    };

          
    return(
        <MantineProvider 
            theme = {{
                fontFamily: 'Heebo, sans-serif',
                colors: {
                    'queeryPink': ['#ffe2e9','#ffb2bf','#ff758c','#fe4e6a','#C23950','#e40b27','#b2041f', '#800015','#4e000c','#1f0002'],
                    'storyPurple':['#eee4ff','#c6b3ff','#a880fd', '#924efc', '#821dfb','#7906e2','#6a03b0','#54017e', '#38004d','#17001d'],
                },
            }}>
            <form onSubmit = {handleSubmit}>
                <FlexBox align ="stretch">
                    <TextInput name = "title" label = "Post title" id = "title" placeholder = "Enter your title"/>
                    <Spacer axis="vertical" size={25}/>
                    <MaxTextArea name = "text" id = "text" text = {text} setText = {setText} label = "Queery" placeholder = "Enter your queery" maxLength = "250"  />
                    <Spacer axis="vertical" size={25}/>
                    <Breakline/>
                    <Spacer axis="vertical" size={25}/>
                    <FlexBox>
                        <RadioGroup tone = {tone} setTone = {setTone} />
                        <Spacer axis="vertical" size={35}/>
                        <ChipGroup tag = {tag} setTag = {setTag} tagData = { postTags } />
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