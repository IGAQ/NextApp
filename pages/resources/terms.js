import { Spacer } from '../../components/Atoms/Common/Spacer';
import { Text } from '../../components/Atoms/Common/Text';
import { FlexBox } from '../../styles/globals';
import { useScrollIntoView } from '@mantine/hooks';
import fsPromises from 'fs/promises';
import path from 'path';
import styled from 'styled-components';
import { StickyDiv } from '../homepage';
import { ScrollToTopButton } from '../../components/Atoms/Common/ScrollToTopButton';
import { useState, useEffect, useRef } from 'react';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {BackArrow} from '../../components/Atoms/Common/Buttons/BackArrow';
import {Link} from 'react-scroll';

const Letter = styled.div`  
    border-radius: 50%;
    background-color: #A5CEFF;
    padding: 0.75em 1.25em;
    cursor: pointer;
`;

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data/terms.json');
    const jsonData = await fsPromises.readFile(filePath);
    const termData = JSON.parse(jsonData);
    return {
        props: termData,
    };
}
  
export default function Term(props) {
    const terms = props.terms;
    const [scrolledEnough, setScrolledEnough] = useState(false);

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

    return(
        <>
            <FlexBox align = 'stretch' bgColor= '#A5CEFF'>
                <BackArrow/>
                <PostTitle title = 'LGBTQA+ Terms'/>
                <Spacer size = '15' />
                <FlexBox padding = '0 4em' style = {{alignSelf: 'center'}} maxWidth = '50em'>
                    <Text size = '0.75em' text = 'Please note: This glossary includes terms which concern areas of sensitivity for some LGBTQ+ people. When discussing any element of this glossary with others, particularly LGBTQ+ people, use caution to prevent any harm which may arise from the discussion. Be sensitive when discussing some of these terms, as these words describe personal experiences which should not be broached lightly. No definition should be taken as legal or medical counsel.'/>
                </FlexBox>
                <Spacer size = '55' />
                <FlexBox bgColor = 'white'>
                    <FlexBox minWidth = '82%' maxWidth = '12em'>
                        <Spacer size = '35' />
                        <StickyDiv top={0} zIndex={4} bgColor = 'white' maxWidth = '100%'>
                            <Spacer size = '15' />
                            <FlexBox dir ='row'>
                                <Link to = 'a' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'A' onClick={()=> scrollAIntoView()}/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'b' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'B'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'c' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'C'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'd' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'D'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'f' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'F'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'g' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'G'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'h' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'H'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'i' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'I'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'k' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'K'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'l' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'L'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'm' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'M'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'n' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'N'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'o' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'O'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'p' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'P'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'q' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'Q'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'r' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'R'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 's' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'S'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 't' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'T'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'v' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'V'/>
                                </Link>
                                <Spacer size = '6' />
                                <Link to = 'w' spy = {true} smooth = {true} duration = {500}>
                                    <Text size = '1.25em' text = 'W'/>
                                </Link>
                            </FlexBox> 
                        </StickyDiv>
                        <ScrollToTopButton isVisible={scrolledEnough} />

                        <Spacer size = '55' />
                        <FlexBox align = 'flex-start' maxWidth = '50em'>
                            <Letter id = 'a'>
                                A
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(0,7).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'b'>
                                B
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(8,19).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'c'>
                                C
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(19,26).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'd'>
                                D
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(26,34).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'f'>
                                F
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(34,39).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'g'>
                                G
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(39,66).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'h'>
                                H
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(66,80).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'i'>
                                 I 
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(80,83).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'k'>
                                K
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(83,84).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id ='l'>
                                L
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(84,89).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'm'>
                                M
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(89,102).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'n'>
                                N
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(102,105).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id ='o'>
                                O
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(105,110).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id ='p'>
                                P
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(110,123).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'q'>
                                Q
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(123,129).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'r'>
                                R
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(129,130).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 's'>
                                S
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(130,141).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 't'>
                                T
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(141,160).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'v'>
                                V
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(160,161).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                            <Spacer size = '45' />
                            <Letter id = 'w'>
                                W
                            </Letter>
                            <Spacer size = '20' />
                            {terms.slice(161,163).map(term => 
                                <div key = {term.term}>     
                                    <Text weight = '500' size = '1.25em' text = {term.term}></Text>
                                    <Spacer size = '5' />
                                    <Text size = '1em' text = {term.definition}></Text>
                                    <Spacer size = '25' />
                                </div>
                            )}
                        </FlexBox>
                    </FlexBox>
                    <Spacer size = '100' />
                </FlexBox>
            </FlexBox>
        </>     
    );
}