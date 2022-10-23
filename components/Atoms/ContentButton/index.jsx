import { Button } from '@mui/material';
import { useRouter } from 'next/router';


export function ContentButton({onClick = () => {}}) {

    const r = useRouter();
    
    return (

        <Button variant='text' sx={{marginTop: '-1.5em', color: 'grey', float:'right', background:'white'}} 
            onClick={onClick}>...Read More</Button>

    );
}