import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FlexBox, ModalBox } from '../../styles/globals';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import  { Box, Button, TextField } from '@mui/material';

export default function NewPost(props) {
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
                        
            <Typography variant='h5' align='left' gutterBottom color = "#FF758C" fontWeight='600'>
                                        What do you want to post today?
            </Typography>
            <br/>
            <Typography variant = 'body' align = 'left' gutterBottom >
                                        Choose whether you want to post a question or a story
            </Typography>
            <br/>

            <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "15px" borderRadius = "10px" margin = "0 0 15px 0"  boxShadow = "0px 4px 8px -1px rgb(117 37 37 / 35%)" onClick = {()=>r.push('/newQueery')}>
                <Typography variant='h6' align='center' gutterBottom color = "#FF758C" component = 'div'>
                                                I got a  <Box component = "span" fontWeight = '500'>Queery</Box>
                </Typography>
                <Typography variant = 'subtitle1' align = 'center' gutterBottom >
                                                Post a question
                </Typography>
            </FlexBox>
                                
            <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "15px" borderRadius = "10px"  boxShadow = "0px 4px 8px -1px rgb(117 37 37 / 35%)">
                <Typography variant='h6' align='center' gutterBottom color = "#FF758C">
                                                I got a Story
                </Typography>
                <Typography variant = 'subtitle1' align = 'center' gutterBottom >
                                                Post a story or experience
                </Typography>
            </FlexBox>
        </ModalBox>

    );
        
}

