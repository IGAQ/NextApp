import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useRouter } from 'next/router';

export function BackArrow (props){
    const r = useRouter();
    return(
        <ArrowBackRoundedIcon onClick = {()=>r.goBack()} />
    );
}