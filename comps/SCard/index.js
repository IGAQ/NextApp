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
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SCard (props){
    console.log(props);
    // const postList = props.posts;

    return (
        props.posts.map((post) => (
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
                                title={post.authorUser.username}
                                subheader={new Date(post.updatedAt).toLocaleString()}
                        />
                            <Typography variant="h5" component="div">
                                {post.postTitle}
                            </Typography>          
                            <Typography variant="body2">
                                {post.postContent}
                            </Typography>
                    </CardContent>
                        <CardActions>
                            {
                            post.postTags.map((tag) => (
                            <Tag text={tag.tagName} bgcolor="yellow"></Tag>
                            ))}
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
        
        
        ))
    )
}

// export async function getServerSideProps(context) {
//     const res = await axios.get('http://localhost:8080/api/posts');
//     const posts = res.data;
//     console.log(res);
//     return {
//       props: {posts}, // will be passed to the page component as props
//     }
//   }