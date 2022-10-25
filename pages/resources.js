import { FlexBox, ModalBackdrop, Wrapper } from '../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Resources(props){
    const r = useRouter();

    return(
        <Wrapper>
            <FlexBox>resources </FlexBox>
        </Wrapper>


    );


}