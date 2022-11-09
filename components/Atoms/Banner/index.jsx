import styled from 'styled-components';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { FlexBox } from '../../../styles/globals';
import { useRouter } from 'next/router';

const ArrowCont = styled.div`
position: absolute;
left: 1.5em;
top: 2.5em;`;

const BannerBackground = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
width: 100vw;
height: 33vh;
background-color: ${props => props.bannerBgColor || '#DFEEFF'};
`

const BannerText = styled.p`
text-align: center;
font-weight: 300;
font-size: ${props => props.fontSize || '5em'};
font-family: 'AmaticSC-Bold'; 
text-transform: uppercase;
padding: 1em`


export function Banner({
    bannerTitle = 'default text',
    bannerBgColor = '#DFEEFF'
}) {
    const r = useRouter();

    return (
        <FlexBox>
            <ArrowCont onClick={() => r.push('/')}>
                <ArrowBackRoundedIcon style={{ width: 40, height: 40 }} />
            </ArrowCont>
            <BannerBackground bannerBgColor={bannerBgColor}><BannerText>{bannerTitle}</BannerText></BannerBackground>
        </FlexBox>
    );
}
