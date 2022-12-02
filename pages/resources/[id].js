import { PostTitle } from '../../components/Atoms/Post/PostTitle';
import { FlexBox } from '../../styles/globals';
import { useRouter } from 'next/router';
import { PostTagBox } from '../../components/Molecules/Post/PostTagBox';
import {BackArrow} from '../../components/Atoms/Common/Buttons/BackArrow';
import { StyledUnsaved, StyledSaved } from '../../components/Molecules/Common/ResourceCard';
import { Text } from '../../components/Atoms/Common/Text';
import styled from 'styled-components';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { useContext } from 'react';
import { SavedResourceContext } from '../../lib/contexts';
import {getAllResources} from '../../data/resources';

const Author = styled(FlexBox)`
 position: relative;
 bottom: 0em;

`;

const QueeryLogo = styled.div`
background-image: url('/IGAQLogo.svg');
width:1.5em;
 height:1.5em;
`;

const Queery = styled.div`
 background-color: #242424;
 border-radius: 50%;
 padding: 0.25em;
`;

export async function getStaticProps({params}){
    const {id} = params;
    const resource = getAllResources(id);
    return{
        props:{resource},
    };
};

export async function getStaticPaths(){
    const resources = getAllResources();
    const paths = resources.map(resource=>({
        params:{id: resource.id.toString()},
    }));
    return{
        paths, 
        fallback: false,
    };
}

export default function ResourceID({resource}){  
    const r = useRouter();
    // const {handleSave, setIsSaved, isSaved} = useContext(SavedResourceContext);
    return(
        <>
            {resource.map(rs =>(
                <>
                    
                    <FlexBox key = {rs.id} align="stretch" bgColor="#FFF">

                    
                        {/* {!isSaved && <StyledUnsaved size={25} onClick={props.onClick}/>}
                        {isSaved && <StyledSaved size={25} onClick={props.onClick}/>}                 */}
                        <FlexBox bgColor='#A5CEFF'>
                            <BackArrow margin='0px' left='unset' maxWidth='100%'/>
                            <PostTitle padding="0 1.5em " title={rs.title} />
                            <Spacer axis="vertical" size={25} />
                       
                            <FlexBox>
                                <PostTagBox tags = {rs.tags}/>
                            </FlexBox> 
                        </FlexBox>
                    
                        <FlexBox padding="2em 5em" maxWidth='60em' margin='0 auto'>
                            {rs.content}
                        </FlexBox><Spacer axis="vertical" size={25} />
                        <Author dir="row" bgColor="#DEEEFF" padding="1em">
                            <Queery>
                                <QueeryLogo />
                            </Queery>
                            <Spacer axis="horizontal" size={15} />
                            <Text size="1.5rem" text={rs.author} />
                        </Author>
                    </FlexBox>
                </>
            ))}
            
            
        </>
         
    );
}