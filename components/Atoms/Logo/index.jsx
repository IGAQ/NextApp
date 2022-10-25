import styled from 'styled-components';
import Image from 'next/image';

const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 10em;
    `;

export function Logo() {
    return (
        <LogoDiv>
            <Image src='/IGAQLogo.svg' width={250} height={250} alt="Logo" />
        </LogoDiv>
    );
}