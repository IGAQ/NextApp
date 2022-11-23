import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const ArrowCont = styled.div`
  margin: 25px 0 0 25px;
`;

export function BackArrow(props) {
    const r = useRouter();
    return (
        <ArrowCont>
            <ArrowBackRoundedIcon margin="25px 0 0 25px" onClick={() => r.back()}/>
        </ArrowCont>
    );
}