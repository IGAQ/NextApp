import styled from 'styled-components';
import { Text } from '../Text';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Spacer } from '../Spacer';
import { Button } from '@mantine/core';

const StyledSubBtn = styled.button`
type: 'submit';
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
 type = "submit";
 width: "10%";
 border-radius: 6px; 
 background-color: #FF758C;
 outline: none;
 border: none;
 padding: 10px 0px;
`;

export function StyledSubmitButton({
    text = 'Submit',
}) {
    return (
        <StyledSubBtn type="submit" sx={{
            '&:hover': {
                backgroundColor: '#C23950',
            },
        }}>
            <Text size="1.25rem" text={text} color="white"></Text>
            <Spacer axis="horizontal" size={15} />
            <SendRoundedIcon
                sx={{
                    color: 'white'
                }} />
        </StyledSubBtn>
    );
} 