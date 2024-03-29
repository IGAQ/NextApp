import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ModalBox = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-direction: ${props => props.dir || 'column'};
  flex: ${props => props.flex || '0'};
  background: ${props => props.bgColor || '#FBFAF7'};
  border-radius: ${props => props.borderRadius || '25px'};
  max-width: ${props => props.maxWidth || '75%'};
  min-width: ${props => props.minWidth || '150px'};
  position: ${props => props.position || 'fixed'};
  z-index: 10;
  top: 50%;
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '10px'};
  margin: ${props => props.margin || 'auto'};
`;

export const ResponsiveModal = styled('div')`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

padding: ${props => props.padding || ''};

@media only screen and (min-width: 768px) {
  padding: ${props => props.paddingMd || ''};
}
`;
