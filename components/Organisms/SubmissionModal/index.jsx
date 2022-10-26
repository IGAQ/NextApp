import { Button } from '../../Atoms/Button';
import { ModalBox } from '../../Atoms/ModalBox';
import Link from 'next/link';


export function SubmissionModal({ postId }) {
    return (
        <ModalBox border ="5px solid #FF758C" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch" borderRadius = "20px"
            initial= {{y:500}}
            animate = {{y:-300, opacity:1}} 
            transiton={{duration: 100, delay:500}}
            exit={{y:1000, opacity: 0}}>
            <Link href={'/homepage/' + postId}>
                <Button label = "take me to my post" ></Button>
            </Link>
        </ModalBox>
    );
}