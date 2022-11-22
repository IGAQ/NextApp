import styled from 'styled-components';
import IGAQLoader from '../../../../public/IGAQ_loader.json';
import Lottie from 'lottie-react';
import { Loader } from '@mantine/core';
import { FlexBox } from '../../../../styles/globals';


const OutsideLoader = styled.div`
  position: fixed;
  z-index: 1700;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: ${props => props.display || 'flex'};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


export function InPageLoader() {
    return (
        <FlexBox>
            <Loader color='pink' size='xl'/>
        </FlexBox>
    );
}


export function PageLoader() {
    return (
        <OutsideLoader>
            <Lottie animationData={IGAQLoader} loop={true} />
        </OutsideLoader>
    );
}