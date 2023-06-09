import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {FlexBox } from '../../../../styles/globals';
import {ModalBox, ResponsiveModal} from '../../../Atoms/Common/ModalBox';
import {useRouter} from 'next/router';
import {Text} from '../../../Atoms/Common/Text';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {ModalBackdrop} from '../../../../styles/globals';
import { HappyLogo } from '../../../Atoms/Common/Logo';
export function NewPostModal(props) {
    const r = useRouter();

    function handleQueery() {
        {
            props.onClick;
        }
        r.push('/newQueery');
    }

    function handleStory() {
        {
            props.onClick;
        }
        r.push('/newStory');
    }

    return (
        <FlexBox style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, zIndex: 99 }}>
            <ResponsiveModal padding="0 10% 0 10%" paddingMd="0 30% 0 30%">
            <ModalBox flex="1" maxWidth="100%"  bgColor="#ffffff" margin="0" position="unset" minWidth="50%" padding = "25px 50px 50px 50px" align = "stretch" borderRadius = "20px"
                initial= {{y:1000}}
                animate = {{y:0, opacity:1}} 
                transiton={{duration: 100, delay:500}}
                exit={{y:1000, opacity: 0}}>
                <FlexBox justify = 'flex-end' dir = 'column' align = 'flex-end' flex = '1' padding = '0 0 15px 0' >
                    <CloseRoundedIcon onClick = {props.onClick}></CloseRoundedIcon>
                </FlexBox>
                <HappyLogo height={95} width={95} />
                <Spacer axis="vertical" size={10}/>
                <Text lineHeight={'1em'} weight = "600" color = "#000000"  size = "2rem" text  = "What do you want to post today?"/>
                <Spacer axis="vertical" size={10}/>
                <Text size = "1rem" text  = "Choose whether you want to post a question or a story"/>
                <Spacer axis="vertical" size={35}/>
                <FlexBox bgColor = "#F5f5f5" minWidth="50%" padding = "25px 15px" borderRadius = "10px" margin = "0 0 15px 0"  boxShadow = "0px 4px 8px -1px rgb(117 37 37 / 35%)" onClick = {handleQueery}>
                    <div>
                        <Text weight = "500"  display = "inline"textAlign = "center" size = "1.5rem" color = "#000000" text  = "I got a "/>
                        <Text weight = "500" size = "1.5rem" display = "inline" textAlign = "center" color = "#FF758C" text  = "Queery"/>
                        <Text weight = "500" size = "1.5rem" display = "inline" textAlign = "center" color = "#000000" text  = "!"/>
                    </div>
                    <Text textAlign = "center" size = "0.75rem"  text  = "Post a question"/>
                </FlexBox>
                                
                <FlexBox bgColor = "#F5f5f5" minWidth="50%" padding = "25px 15px" borderRadius = "10px"  boxShadow = "0px 4px 8px -1px rgb(117 74 143 / 35%)" onClick = {handleStory}>
                    <div>
                        <Text weight = "500"  display = "inline"textAlign = "center" size = "1.5rem" color = "#000000" text  = "I got a "/>
                        <Text weight = "500" size = "1.5rem" display = "inline" textAlign = "center" color = "#8054ff" text  = "Story"/>
                        <Text weight = "500" size = "1.5rem" display = "inline" textAlign = "center" color = "#000000" text  = "!"/>
                    </div>
                    <Text textAlign = "center" size = "0.75rem"  text  = "Share a story or experience "/>

                </FlexBox>
            </ModalBox>
            </ResponsiveModal>
            <ModalBackdrop onClick = {props.onClick}/>
        </FlexBox>
    );
}
