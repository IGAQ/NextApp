import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function PostSetting({onClick = () => {}}) {

    return (
        <IconButton aria-label="settings">
            <MoreVertIcon fontSize='small'/>
        </IconButton>
    );
}