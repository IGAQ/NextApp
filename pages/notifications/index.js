import { FlexBox, Wrapper } from '../../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NotificationBox } from '../../components/Molecules/NotificationBox';
import { Text } from '../../components/Atoms/Text';

export default function Notifications(props){
    const r = useRouter();
    const [page, setPage] = useState(0);
    const [postModal, setPostModal] = useState(false);

    return(
        <Wrapper align = "stretch">
            <FlexBox align = "stretch" >
                <Text as = "h1" weight = "600" size = "2.5rem" textAlign = "center" text  = "Index"/>
                <FlexBox align = "stretch">
                    <Text weight = "500" size = "1.25rem" textAlign = "left" text  = "New"/>
                    <NotificationBox/>
                </FlexBox>
                <FlexBox align = "stretch">       
                    <Text weight = "500" size = "1.25rem" textAlign = "left" text  = "Old"/>
                    <NotificationBox/>
                    <NotificationBox/>
                    <NotificationBox/>
                </FlexBox>
            </FlexBox>
            
        </Wrapper>
    );


}