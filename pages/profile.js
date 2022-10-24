
import { FlexBox, Wrapper } from '../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Profile(props){
    const r = useRouter();
    
    return(
        <Wrapper>
            <FlexBox>Profile </FlexBox>
             
        </Wrapper>


    );


}