import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';

const CommentPinIconDiv = styled.img`
    padding: 1em 1em 1em 1em;
    background: url(${props => props.background ?? 'white'}) no-repeat center center;
    ${ props => props.shouldHover 
        ? `&:hover { background: url(\'${iconsPaths.commentActivePinIcon}\') no-repeat center center }` 
        : ''
};
`;

export function CommentsPinIcon({onClick, isActive, isPostAuthor}) {
    return (
        <IconButton onClick={onClick} disabled={!isPostAuthor}>
            {isActive ? (
                <CommentPinIconDiv background={'/GoldQueery.svg'} /> // This is the top response
            ) : (
                <CommentPinIconDiv background={iconsPaths.commentPinIcon} shouldHover/>
            )}
        </IconButton>
    ); 
}