import IconButton from '@mui/material/IconButton';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfied from '@mui/icons-material/SentimentVeryDissatisfied';


export function PostReaction({vote, hasVoted, onClick}) {
    if (vote === 'Like') {
        return (
            <IconButton onClick={onClick}>
                <InsertEmoticon color={hasVoted ? 'success' : ''}/>
            </IconButton>
        );
    } else {
        return (
            <IconButton onClick={onClick}>
                <SentimentVeryDissatisfied color={hasVoted ? 'error' : ''}/>
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