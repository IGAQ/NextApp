import {PostScore} from '../../../Molecules/Post/PostScore';
import {PostComments} from '../../../Molecules/Post/PostComments';
import styled from 'styled-components';
import {useContext} from 'react';
import {PostContext} from '../../../../lib/contexts';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export function PostFooter() {
    return (
        <PostFooterDiv>
            <PostScore />
            <PostComments />
        </PostFooterDiv>
    );
}