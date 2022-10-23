import styled from 'styled-components';

const InputBox = styled.input`
padding: ${props => props.padding || '10px 0 10px 0 '};
`;
export function TextInput({
    type = 'text',
    placeholder = 'Placeholder',
    label = 'Label',
    id = 'id',
}){
    return (
        <>
            <label for = {id}> {label}</label>
            <InputBox id = {id} type={type} placeholder={placeholder} />
        </>
    );
};