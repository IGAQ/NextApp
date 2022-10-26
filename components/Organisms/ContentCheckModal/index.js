import styled from 'styled-components';
import { FlexBox, ModalBackdrop} from '../../../styles/globals';
import { ModalBox } from '../../Atoms/ModalBox';
import { Text } from '../../Atoms/Text';
import { Button } from '../../Atoms/Button';
import { Spacer } from '../../Atoms/Spacer';

export function ContentCheckModal(props) {

    return(
        <FlexBox>
            <ModalBox border ="5px solid #FF758C" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch" borderRadius = "20px"
                initial= {{y:500}}
                animate = {{y:-300, opacity:1}}  
                transiton={{duration: 100, delay:500}}
                exit={{y:1000, opacity: 0}}>
                <FlexBox>
                    <Text weight = "700" color = "#FF758C" text = "Oops!"></Text>
                    <Spacer axis="vertical" size={15}/>
                    <Text textAlign = "center" size = "1.25rem" text =  "Looks like you tried to post something that doesn't fit within our community guidelines!"></Text>
                    <Spacer axis="vertical" size={5}/>
                    <Text textAlign = "center" size = "1rem" text =  "Please rephrase your post and try again."></Text>
                    <Spacer axis="vertical" size={25}/>
                    <Button size = "long" label = "Rephrase post" onClick = {props.onClick}> </Button>
                </FlexBox>       
            </ModalBox>  
            <ModalBackdrop onClick = {props.onClick}/>
        </FlexBox>
    );
    


}