import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const CommentIconDiv = styled.img`
  width: 1em;
  height: 1em;
  transform: scaleX(-1)
`;

export function CommentsIcon({onClick}) {
    return (
        <IconButton onClick={onClick}>
            <CommentIconDiv src='/CommentsIcon.svg'/>
        </IconButton>
    );
}