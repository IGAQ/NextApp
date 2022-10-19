import styled from "styled-components";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FlexBox, Box } from "../../../styles/globals";
import Typography from '@mui/material/Typography';


export default function NewPost(props) {
        return(
                <Box border ="5px solid #FF758C" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch">
                                <FlexBox justify = 'flex-end' dir = 'column' align = 'flex-end' flex = '1'>
                                        <CloseRoundedIcon onClick = {props.onClick}></CloseRoundedIcon>
                                </FlexBox>
                        
                                <Typography variant='h4' align='left' gutterBottom color = "#FF758C">
                                        What do you want to post today?
                                </Typography>
                                <Typography variant = 'body' align = 'left' gutterBottom >
                                        Choose whether you want to post a question or a story
                                </Typography>
                                <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "15px" borderRadius = "15px" margin = "0 0 15px 0">
                                        <Typography variant='h6' align='center' gutterBottom color = "#FF758C">
                                                I got a Queery
                                        </Typography>
                                        <Typography variant = 'subtitle1' align = 'center' gutterBottom >
                                                Post a question
                                        </Typography>
                                </FlexBox>
                                
                                <FlexBox bgColor = "#FFEAD4" minWidth="50%" padding = "15px" borderRadius = "15px">
                                        <Typography variant='h6' align='center' gutterBottom color = "#FF758C">
                                                I got a Story
                                        </Typography>
                                        <Typography variant = 'subtitle1' align = 'center' gutterBottom >
                                                Post a story or experience
                                        </Typography>
                                </FlexBox>
                </Box>

        )
        
}

