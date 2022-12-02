import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import { Spacer } from '../../Spacer';

const ArrowCont = styled.div`
  margin: ${props => props.margin || 'auto'};
  position: relative;
    top: ${props => props.top || '25px'};
    width: ${props => props.width || '100%'};
    padding-left: 0.5em;
    max-width: ${props => props.maxWidth || '50em'};
    left: ${props => props.left || '0'};
    `;

const Hover = styled.div`
    width: fit-content;
    &:hover {
        cursor: pointer;
    }
    `;

export function BackArrow(props) {
    const r = useRouter();
    return (
        <>
            <ArrowCont>
                <Hover>
                    <ArrowBackRoundedIcon margin={props.margin} onClick={() => r.back()}/>
                </Hover>
            </ArrowCont>
            <Spacer size = {45}/>
        </>
        
    );
}