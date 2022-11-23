import styled from 'styled-components';
import { JsonInput } from '@mantine/core';

const OTDInputField = styled.textarea`
    width: 100%;
    border-radius: 5px;
    border: transparent;
    overflow: auto;
    word-wrap: break-word;
    word-break: break-all;
    resize: vertical;
    `;

export function OTDInput({ placeholder = '', type = 'text', onChange = () => { } }) {
    return (
        // <OTDInputField placeholder={placeholder} type={type} onChange={onChange} />
        <JsonInput size='sm' placeholder={placeholder} type={type} onChange={onChange} styles={{input: {height: '16px'}}} />
    );
}