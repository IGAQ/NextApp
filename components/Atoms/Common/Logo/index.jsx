import styled from 'styled-components';
import Image from 'next/image';

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const defaultProps = {
    imageSrc: '/IGAQLogo.svg',
    imageAlt: 'IGAQ Logo',
    imageWidth: 250,
    imageHeight: 250,
    containerHeight: 10,
    containerWidth: 10,
};

export function Logo(props = defaultProps) {
    const {imageSrc, containerHeight, containerWidth, imageHeight, imageWidth, width='100', height='100'} = props;
    return (
        <LogoDiv height={containerHeight} width={containerWidth}>
            <Image src='/IGAQLogo.svg' width={width} height={height} alt='logo'/>
        </LogoDiv>
    );
}