import styled from 'styled-components';
import { StickyDiv } from '../homepage';
import { ScrollToTopButton } from '../../components/Atoms/Common/ScrollToTopButton';
import { useState, useEffect, useRef } from 'react';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {BackArrow} from '../../components/Atoms/Common/Buttons/BackArrow';
import {Link} from 'react-scroll';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { Text } from '../../components/Atoms/Common/Text';
import { FlexBox } from '../../styles/globals';
import path from 'path';
import fsPromises from 'fs/promises';
import Letter from './flags';
import Image from 'next/image';
import { renderToStaticMarkup } from 'react-dom/server';
import { IoReturnUpBack } from 'react-icons/io5';


function DisplayFlag (svg){
    return (
        <div dangerouslySetInnerHTML={{__html: svg}} /> 
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data/flags.json');
    const jsonData = await fsPromises.readFile(filePath);
    const flagData = JSON.parse(jsonData);
    return {
        props: flagData,
    };
}

export default function Flag(props) {
    const flags = props.flags;
   
    const [scrolledEnough, setScrolledEnough] = useState(false);
    // const flag1String = encodeURIComponent(renderToStaticMarkup({flags[0].svg}))
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolledEnough(true);
        } else {
            setScrolledEnough(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <FlexBox align = 'stretch' bgColor= '#A5CEFF'>
                <BackArrow/>
                <PostTitle title = 'LGBTQA+ Flags'/>
                <Spacer size = '55' />
                <FlexBox bgColor = 'white'>
                    <FlexBox minWidth = '82%' maxWidth = '12em'>
                        <Spacer size = '35' />
                        <ScrollToTopButton isVisible={scrolledEnough} />
                        <Spacer size = '15' />
                        <FlexBox align = 'flex-start' maxWidth = '50em'>
                            
                            {flags.map(flag => 
                                <div key = {flag.name}>
                                    <div>
                                        <Text weight = '500' size = '1.25em' text = {flag.name}></Text>
                                        <Spacer size = '5' />
                                        {DisplayFlag(flag.svg)}
                                    </div>
                                    <Spacer size = '35' />
                                </div>
                            )}

                            
                            {/* 

                            <Letter id = 'a'>
                                A
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(0,1).map(flag => 
                                <div key = {flag.name}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.name}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'b'>
                                B
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(3,4).map(flag => 
                                <div key = {flag.name}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.name}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'c'>
                                C
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'd'>
                                D
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'f'>
                                F
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'g'>
                                G
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(4,6).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'h'>
                                H
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'i'>
                                 I 
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(6,7).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'j'>
                                J
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'k'>
                                K
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id ='l'>
                                L
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(7,9).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'm'>
                                M
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'n'>
                                N
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(9,10).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id ='o'>
                                O
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id ='p'>
                                P
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(10,16).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'q'>
                                Q
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'r'>
                                R
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 's'>
                                S
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(16,17).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 't'>
                                T
                            </Letter>
                            <Spacer size = '20' />
                            {flags.slice(18,19).map(flag => 
                                <div key = {flag.flag}>     
                                    <Text weight = '500' size = '1.25em' text = {flag.flag}></Text>
                                    <Spacer size = '5' />
                                    {DisplayFlag(flag.svg)}
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'v'>
                                V
                            </Letter>
                            <Spacer size = '45' />
                            <Letter id = 'w'>
                                W
                            </Letter> */}

                        </FlexBox>
                    </FlexBox>
                    <Spacer size = '100' />
                </FlexBox>
            </FlexBox>
        </>
    );
}
