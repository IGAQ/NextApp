import styled from 'styled-components';
import { Text } from '../../Atoms/Text';
import { Spacer } from '../../Atoms/Spacer';
import { FlexBox } from '../../../styles/globals';


const Area = styled.textarea`
font-size: 1rem;
padding: 10px 10px 10px 15px;
margin: 0;
font-family: 'Heebo', sans-serif;
scrollbarWidth: "none";
border-radius: 6px;
&:focus {
       box-shadow:${props => props.boxShadow || '0 0 2px 2px #C23950'};
       outline: none;
       border-bottom: 2px solid #C2395000;
   }
`;

export function MaxTextArea({
    text, setText,
    maxLength = '250',
    name = 'name',
    label = 'label',
    rows = '5',
    placeholder = 'placeholder',
}){
    const max= maxLength;
    const tooLong = '';

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value.slice(0, max));
        
        if (value.length > max) {
            //Change this to a toast message
            alert('Looks like your queery is too long!');
        };
    };

    return (
        <>
            <FlexBox align = "stretch">
                <label htmlFor = {name}> {label}</label>
                <Area required rows = {rows} name = {name} placeholder = {placeholder} value = {text} onChange = {handleChange}/>
            </FlexBox>
            <Spacer axis="vertical" size={10}/>
            <Text size = ".5rem" text = {max - text.length + ' characters left'} />
            <Text size = "1rem" text = {tooLong} />

            
        </>
    );
}