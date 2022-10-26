// import { FlexBox, Wrapper } from '../../styles/globals';
// import { useState } from 'react';
// import { Text } from '../../components/Atoms/Text';
// import { Spacer } from '../../components/Atoms/Spacer';
// import { PostForm } from '../../components/Organisms/PostForm';
// import { PostTitle } from '../../components/Molecules/PostTitle';
// import { useEffect } from 'react';
// import axios from 'axios';
//
// export default function NewStoryPage(props) {
//     const [postTags, setPostTags] = useState([]);
//
//     async function handleQueerySubmit(postTitle, postContent, postTagIds, postTone, anonymous){
//         const post = {
//             postTitle: postTitle,
//             postContent: postContent,
//             PostTagIds: [...postTagIds, postTone],
//             anonymous: anonymous,
//             //postTypeId: '95aaf886-064e-44b3-906f-3a7798945b7b',
//         };
//         try {
//             await axios.post('/api/post', post);
//             return true;
//         }
//         catch (error) {
//             return false;
//         }
//
//     }
//
//
//     useEffect(() => {
//
//         (async function (){
//             const res = await axios.get('/api/postTags');
//             setPostTags(res.data);
//         })();
//
//         console.log(postTags);
//     }, []);
//
//     return (
//         <Wrapper align = "stretch" bgColor = "#FFB6C3">
//             <PostTitle title = "Post a Queery"/>
//             <FlexBox bgColor = "#FFF9F2" padding = "25px 50px" margin = "0" align = "stretch" flex = "1">
//                 <Spacer axis="vertical" size={25}/>
//                 <PostForm handleSubmit={handleQueerySubmit}></PostForm>
//             </FlexBox>
//         </Wrapper>
//     );
// }
