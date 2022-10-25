import CommentIcon from "@mui/icons-material/Comment";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Backdrop, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostTag } from "../../Atoms/PostTag";
import { ProfileIcon } from "../../Atoms/ProfileIcon";
import { Text } from "../../Atoms/Text";

export function BaseCard(props) {
    console.log(props);
    // const postList = props.posts;
    const r = useRouter();
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        if (props.posts.postContent.length > 100) {
            setReadMore(true);
        }
    };

    return props.posts.map((post) => (
        <Card key={post.postId} sx={{ minWidth: 275, width: "80%", marginTop: "0.5em" }}>
            <CardContent>
                <CardHeader
                    avatar={<ProfileIcon></ProfileIcon>}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    }
                    title={post.authorUser.username}
                    subheader={new Date(post.updatedAt).toLocaleString()}
                />
                <Typography variant="h5" component="div">
                    {post.postTitle}
                </Typography>
                {/* <Text size='1.5rem' weight = "600" text = {post.postTitle} ></Text>           */}
                <Typography
                    variant="body2"
                    sx={{ lineHeight: "1.5em", maxHeight: "4.2em", overflow: "hidden" }}
                >
                    {post.postContent}
                </Typography>
                {/* <Text size='1rem' text = {post.postContent} lineHeight =  '1.5em' overflow = "hidden"></Text>           */}

                {readMore === true && (
                    <Button
                        variant="text"
                        sx={{
                            marginTop: "-1.5em",
                            color: "grey",
                            float: "right",
                            background: "white",
                        }}
                        onClick={() => {
                            r.push(`/post/${post.id}`);
                        }}
                    >
                        ...Read More
                    </Button>
                )}
            </CardContent>
            <CardActions>
                {post.postTags.map((tag) => (
                    <PostTag key={tag.tagId} text={tag.tagName} tagcolor={tag.tagColor}></PostTag>
                ))}
            </CardActions>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <InsertEmoticonIcon />
                </IconButton>
                <Typography sx={{ fontSize: 13 }} color="text.secondary">
                    #
                </Typography>
                {/* <Text size='0.75rem' text = "#" color="text.secondary"></Text>           */}

                <IconButton aria-label="share">
                    <SentimentVeryDissatisfiedIcon />
                </IconButton>
                <IconButton sx={{ ml: "auto" }}>
                    <CommentIcon />
                    <Typography sx={{ fontSize: 13 }} color="text.secondary">
                        # Comments
                    </Typography>
                    {/* <Text size='0.75rem' text = "# Comments" color="text.secondary"></Text>           */}
                </IconButton>
            </CardActions>
        </Card>
    ));
}

// export async function getServerSideProps(context) {
//     const res = await axios.get('http://localhost:8080/api/posts');
//     const posts = res.data;
//     console.log(res);
//     return {
//       props: {posts}, // will be passed to the page component as props
//     }
//   }
