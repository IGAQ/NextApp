import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const CommentPinIconDiv = styled.img`
    padding: 1em 1em 1em 1em;
    background: url(${props => props.background ?? "white"}) no-repeat center center;
    ${ props => props.shouldHover 
        ? '&:hover { background: url(\'/CommentActivePinIcon.svg\') no-repeat center center }' 
        : ''
    };
`;

export function CommentsPinIcon({onClick, isActive, isPostAuthor}) {
    return (
        <IconButton onClick={onClick} disabled={!isPostAuthor}>
            {isActive ? (
                <CommentPinIconDiv background={'/GoldQueery.svg'} /> // This is the top response
            ) : (
                <CommentPinIconDiv background={'/CommentPinIcon.svg'} shouldHover/>
            )}
        </IconButton>
    ) 
}