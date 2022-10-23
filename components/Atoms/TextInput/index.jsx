import styled from 'styled-components';

const InputBox = styled.input`
font-family: 'Heebo', sans-serif;
padding: ${props => props.padding || '10px 10px 10px 15px'};
border: none;
border-bottom: ${props => props.borderBottom ||' 2px solid #ffb6c3'};
height: ${props => props.height || 'auto'};
border-radius: 6px;
font-size: 1rem;
&:focus {
    box-shadow: ${props => props.boxShadow || '0 0 2px 2px #C23950'};
    outline: none;
    border-bottom: 2px solid #C2395000;
}
`;
export function TextInput({
    type = 'text',
    placeholder = 'Placeholder',
    label = 'Label',
    name = 'name',
}){
    return (
        <>
            <label htmlFor = {name}> {label}</label>
            <InputBox required name = {name} id = {name} type={type} placeholder={placeholder} />
        </>
    );
};