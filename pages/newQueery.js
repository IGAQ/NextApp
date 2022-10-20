import { Typography } from '@mui/material';
import { FlexBox, Wrapper } from '../styles/globals';
import TextField from '@mui/material/TextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';



export default function NewQueery() {
    const [value, setValue] = useState('casual');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Wrapper align = "stretch">
            <Typography variant="h1" align = "center">Post a Queery</Typography>
            <FlexBox bgColor = "#FFF9F2" padding = "15px" margin = "50px 0 0 0" align = "stretch">
                <Typography variant = "h4" align = "left" gutterBottom> Queery </Typography>
                <TextField id = "filled-helperText" label = "Enter your post title" variant = "filled" />
                {/* change ::after border to queery pink */}
                <TextField
                    id="filled-multiline-static"
                    label="Enter your queery"
                    multiline
                    rows = {4}
                    variant="filled"
                />
                {/* change this to in a box wrapper  */}
                <SendRoundedIcon sx = {{
                    color: '#FFF9f2',
                    backgroundColor: '#FF758C',
                    borderRadius: '15%',
                    width: '5%',
                    alignSelf: 'end',
                    '&:hover': {
                        backgroundColor: '#C23950',
                    },
                }} />
                <FlexBox>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Set the tone</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}>
                            <FormControlLabel value="casual" control={<Radio />} label="Casual" />
                            <FormControlLabel value="serious" control={<Radio />} label="Serious" />
                        </RadioGroup>
                    </FormControl>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    );
}