import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FlexBox} from '../../../styles/globals';
import {ModalBox} from '../../Atoms/ModalBox';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import  { Box, Button, TextField } from '@mui/material';
import { Text } from '../../Atoms/Text';
import { Spacer } from '../../Atoms/Spacer';

export function NewPostModal(props) {
    const r = useRouter();
    return(
        <ModalBox border ="5px solid #FF758C" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch" position = "fixed" borderRadius = "20px"
            initial= {{y:500}}
            animate = {{y:-30, opacity:1}} 
            transiton={{duration: 100, delay:500}}
            exit={{y:1000, opacity: 0}}>
            <FlexBox justify = 'flex-end' dir = 'column' align = 'flex-end' flex = '1' padding = '0 0 25px 0' >
                <CloseRoundedIcon onClick = {props.onClick}></CloseRoundedIcon>
            </FlexBox>
            <Text weight = "600" color = "#FF758C" size = "2rem" text  = "What do you want to post today?"/>
            <Spacer axis="vertical" size={10}/>
            <Text size = "1rem" text  = "Choose whether you want to post a question or a story"/>
            <Spacer axis="vertical" size={35}/>

            <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "25px 15px" borderRadius = "10px" margin = "0 0 15px 0"  boxShadow = "0px 4px 8px -1px rgb(117 37 37 / 35%)" onClick = {()=>r.push('/newQueery')}>
                <Text weight = "500"  textAlign = "center" size = "1.5rem" color = "#FF758C" text  = "I got a queery!"/>
                <Text textAlign = "center" size = "0.75rem"  text  = "Post a question"/>
            </FlexBox>
                                
            <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "25px 15px" borderRadius = "10px"  boxShadow = "0px 4px 8px -1px rgb(117 37 37 / 35%)">
                <Text weight = "500"  textAlign = "center" size = "1.5rem" color = "#FF758C" text  = "I got a story!"/>
                <Text textAlign = "center" size = "0.75rem"  text  = "Post a story or experience"/>
            </FlexBox>
        </ModalBox>

    );
        
}
