import styled from 'styled-components';
import Image from 'next/image';

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}em;
  width: ${props => props.width}em;
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
    const {imageSrc, containerHeight, containerWidth, imageHeight, imageWidth, imageAlt} = props;
    return (
        <LogoDiv height={containerHeight} width={containerWidth}>
            <Image src='/IGAQLogo.svg' width='100px' height='100px' alt={imageAlt}/>
        </LogoDiv>
    );
}