import styled from 'styled-components';

const OTDInputField = styled.input`
    width: 60%;
    height: 1rem;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 0.5rem;
    `;

export function OTDInput({ placeholder = '', type = 'text', onChange = () => { } }) {
    return (
        <OTDInputField placeholder={placeholder} type={type} onChange={onChange} />
    );
}