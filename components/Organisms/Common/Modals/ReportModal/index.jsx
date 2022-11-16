import styled from 'styled-components';
import { FlexBox, ModalBackdrop} from '../../../../../styles/globals';
import { ModalBox } from '../../../../Atoms/Common/ModalBox';
import { Text } from '../../../../Atoms/Common/Text';
import { Button } from '../../../../Atoms/Common/Buttons/Button';
import { Spacer } from '../../../../Atoms/Common/Spacer';


export function ReportModal(props) {
    return (
        <FlexBox>
            <ModalBox border ="5px solid #FF758C" minWidth="50%" padding = "50px 50px 50px 50px" align = "stretch" borderRadius = "20px"
                initial= {{y:500}}
                animate = {{y:-300, opacity:1}} 
                transiton={{duration: 100, delay:500}}
                exit={{y:1000, opacity: 0}}>
                <FlexBox>
                    <Text textAlign = "center" weight = "600" size = "1.25rem" color = "#FF758C" text = "Thank you! You've reported this post."></Text>
                    <Spacer axis="vertical" size={15}/>
                    <Text textAlign = "center" size = "1rem" text =  "Our moderators will review this post. "></Text>
                    <Spacer axis="vertical" size={25}/>
                    <Button size = "short" label = "Okay!" onClick = {props.onClose}> </Button>
                </FlexBox>
            </ModalBox>
            <ModalBackdrop onClick = {props.onClose}/>
        </FlexBox>
    );
}