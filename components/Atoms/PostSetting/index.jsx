import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

const PostSettingDiv = styled.div`  
    display: flex;
    position: relative;
    right: 0;
    top: 1em;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    `;

export function PostSetting({onClick = () => {}}) {

    return (
        <PostSettingDiv>
            <IconButton aria-label="settings">
                <MoreVertIcon fontSize='medium'/>
            </IconButton>
        </PostSettingDiv>
    );
}