import {PostTag} from '../../../Atoms/Post/PostTag';
import styled from 'styled-components';

const PostTagBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export function PostTagBox({tags}) {
    return (
        <PostTagBoxDiv>
            {tags.map((tag) => (
                <PostTag key={'postTag' + tag.tagName} text={tag.tagName} tagBgColor={tag.tagColor}/>
            ))}
        </PostTagBoxDiv>
    );
}