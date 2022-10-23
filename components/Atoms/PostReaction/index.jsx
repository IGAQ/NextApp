import IconButton from '@mui/material/IconButton';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfied from '@mui/icons-material/SentimentVeryDissatisfied';


export function PostReaction({vote, onClick = () => {}}) {
    if (vote === 'Like') {
        return (
            <IconButton>
                <InsertEmoticon />
            </IconButton>
        );
    } else {
        return (
            <IconButton>
                <SentimentVeryDissatisfied />
            </IconButton>
        );
    
    }

    // return (
    //     <IconButton onClick={onClick}>
    //         if ({vote} === 'Like') {
    //             <InsertEmoticon />
    //         } else {
    //             <SentimentVeryDissatisfied />
    //         }
    //     </IconButton>
    // );
}