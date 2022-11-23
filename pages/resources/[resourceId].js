import { PostTitle } from '../../components/Atoms/Post/PostTitle';
import { FlexBox } from '../../styles/globals';

export default function ResourceID(props){   
    return(
        <>
            <FlexBox align="stretch" bgColor="#A5CEFF">
                <PostTitle title={props.title}/> 
            </FlexBox>
        </>
         
    );
       


}