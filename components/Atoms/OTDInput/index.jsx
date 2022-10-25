import styled from 'styled-components';

const OTDInputField = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    padding: 0.5rem;
    border: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    `;

export function OTDInput({ placeholder = '', type = 'text', onChange = () => { } }) {
    return (
        <OTDInputField placeholder={placeholder} type={type} onChange={onChange} />
    );
}