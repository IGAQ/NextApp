import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const CommentPinIconDiv = styled.img`
  width: 1em;
  height: 1em;
  transform: scaleX(-1)
`;

export function CommentsPinIcon({onClick}) {
    return (
        <IconButton onClick={onClick}>
            <CommentPinIconDiv src='/CommentPinIcon.svg'/>
        </IconButton>
    );
}