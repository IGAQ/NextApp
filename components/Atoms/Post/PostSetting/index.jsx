import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

const PostSettingDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export function PostSetting({onClick}) {

    return (
        <PostSettingDiv onClick={onClick}>
            <IconButton aria-label="settings">
                <MoreVertIcon fontSize='medium'/>
            </IconButton>
        </PostSettingDiv>
    );
}