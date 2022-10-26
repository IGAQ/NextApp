import { Button } from '../../Atoms/Button';
import { ModalBox } from '../../Atoms/ModalBox';


export function SubmissionModal({ }) {
    return (
        <ModalBox border ="5px solid #FF758C" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch" borderRadius = "20px"
            initial= {{y:500}}
            animate = {{y:-300, opacity:1}} 
            transiton={{duration: 100, delay:500}}
            exit={{y:1000, opacity: 0}}>
            <Button label = "take me to my post"></Button>
        </ModalBox>
    );
}