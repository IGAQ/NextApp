import styled from 'styled-components';

const OTDInputField = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    padding: 0.5rem;
    border: transparent;
    &:focus {
        onover: expand height;
    }
    `;

export function OTDInput({ placeholder = '', type = 'text', onChange = () => { } }) {
    return (
        <OTDInputField placeholder={placeholder} type={type} onChange={onChange} />
    );
}