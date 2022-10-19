import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CommentIcon from '@mui/icons-material/Comment';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tag from '../base/tags';
import Profile from '../base/avatars';

export default function SCard (){

    return (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <CardHeader
                            avatar={
                                    <Profile>
                                    </Profile>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon fontSize='small'/>
                                </IconButton>
                                }
                                title="Username"
                                subheader="Date posted"
                        />
                            <Typography variant="h5" component="div">
                                Post Title
                            </Typography>          
                            <Typography variant="body2">
                                Subtext Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Typography>
                    </CardContent>
                        <CardActions>
                            <Tag text="Gay" bgcolor="yellow"></Tag> 
                            <Tag text="Casual" bgcolor='green'></Tag>
                            <Tag text="General" bgcolor='pink'></Tag>
                        </CardActions>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">           
                                <InsertEmoticonIcon />
                            </IconButton> 
                                <Typography sx={{ fontSize: 13 }} color="text.secondary">
                                                #
                                        </Typography>
                                <IconButton aria-label="share"> 
                                       
                                        <SentimentVeryDissatisfiedIcon />
                                </IconButton>
                                <IconButton sx={{ ml: "auto" }}>
                                        <CommentIcon />
                                        <Typography sx={{ fontSize: 13 }} color="text.secondary">
                                                # Comments
                                        </Typography>
                                </IconButton>

                        </CardActions>
                        </Card>
    )
}