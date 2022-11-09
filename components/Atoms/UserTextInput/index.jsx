import styled from 'styled-components';

const UserTextLabel = styled.label`
padding-left: 1em;
`
const UserTextInputField = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`
export function UserTextInput({
    type = 'text',
    placeholder = 'Placeholder',
    label = 'Label',
}) {
    return (
        <>
            <UserTextLabel>{label}</UserTextLabel>
            <UserTextInputField type={type} placeholder={placeholder} />
        </>
    );
}
