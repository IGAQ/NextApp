import { FlexBox, Wrapper } from '../../styles/globals';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NotificationBox } from '../../components/Molecules/NotificationBox';
import { Text } from '../../components/Atoms/Text';
import styled from 'styled-components';
import { PostTitle } from '../../components/Molecules/PostTitle';

const NotificationDiv = styled(FlexBox)`
    width: 100%;
    height: 95vh;
    background-color: #A5CEFF;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;


export default function Notifications(props){

    return(
        <NotificationDiv>
            <PostTitle title = "Notifications"/>
            <FlexBox align = "stretch" >
                <FlexBox align = "flex-start" bgColor = '#DFEEFF' >
                    <Text weight = "500" size = "1.25rem" textAlign = "left" text  = "New"/>
                    <FlexBox bgColor = '#DFEEFF' align = 'flex-start'>
                        <NotificationBox AvaPic = "/profileIcon2.svg" text = "Anyaaa replied to your queery 'Is there a term for ..."/>
                        <NotificationBox AvaPic = "/profileIcon5.svg" text = "BorutoLover replied to your queery 'have you told ..."/>
                        <NotificationBox AvaPic = "/profileIcon4.svg" text = "flybi replied to your story 'AITA?'"/>
                    </FlexBox>
                </FlexBox>
                <FlexBox align = "flex-start" bgColor = '#DFEEFF' >       
                    <Text weight = "500" size = "1.25rem" textAlign = "left" text  = "Old"/>
                    <FlexBox bgColor = '#DFEEFF' align = 'flex-start'>
                        <NotificationBox AvaPic = "/profileIcon3.svg" text = "ace replied to your story 'AITA?'"/>
                        <NotificationBox AvaPic = "/profileIcon6.svg" text = "btsmarmy7 replied to your queery 'Am I gay"/>
                        <NotificationBox AvaPic = "/profileIcon2.svg" text = "TheSadPotato replied to your comment in your story ..."/>
                        <NotificationBox AvaPic = "/profileIcon4.svg" text = "flybi replied to your queery 'Is there a term for ..." />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            
        </NotificationDiv>
    );


}