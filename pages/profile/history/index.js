import {useState, useEffect} from 'react';
import {useUser} from '../../../lib/hooks/useUser';
import {useRouter} from 'next/router';
import {NewPost, NoPosts} from '../../../components/Templates/Post/NewPost';
import {Spacer} from '../../../components/Atoms/Common/Spacer';
import {PostContext, UserActionsHandlersContext} from '../../../lib/contexts';
import * as PostService from '../../../lib/services/postService';
import * as userService from '../../../lib/services/userService';
import {getRecaptchaToken} from '../../../lib/utils';
import {InPageLoader} from '../../../components/Atoms/Common/Loader';

export default function History() {
    const router = useRouter();
    const [user, userAuthLoaded] = useUser({redirectTo: '/login'});

    const [posts, setPosts] = useState(null);

    const [postsLoading, setPostsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            (async function () {
                const userPosts = await PostService.getPostByUserId(
                    user.userId,
                );
                setPosts([...userPosts]);
                setPostsLoading(false);
            })();
        }
    }, [user]);

    const handleClickOnPost = (postId, postType) => {
        console.log('clicked on post', postId, postType);
    };

    const handleTogglePrompt = (postId, postType) => {
        console.log('comment clicked', postId, postType);
        router.push(`/homepage/${postId}`);
    };

    const handleSubmitReport = async ({isPost, id, reason}) => {
        console.log('report submit', isPost, id, reason);
        const recaptchaToken = await getRecaptchaToken(
            UserActionsEnum.ContentReport,
            process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
        );
        return await userService.reportContent({
            isPost,
            id,
            reason,
            googleRecaptchaToken: recaptchaToken,
        });
    };

    return !user || !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <>
            {postsLoading ? (
                <InPageLoader />
            ) : (
                <>
                    {!posts ? (
                        <InPageLoader />
                    ) : (
                        <>
                            {posts.length === 0 ? (
                                <NoPosts />
                            ) : (
                                posts.map((post) => (
                                    <PostContext.Provider
                                        key={post.id}
                                        value={post}
                                    >
                                        <UserActionsHandlersContext.Provider
                                            value={{
                                                data: {
                                                    isPost: true,
                                                    postId: post.postId,
                                                },
                                                handleClickOnPost: () =>
                                                    handleClickOnPost(
                                                        post.postId,
                                                        'queery',
                                                    ),
                                                handleTogglePrompt: () =>
                                                    handleTogglePrompt(
                                                        post.postId,
                                                        'queery',
                                                    ),
                                                handleSubmitReport:
                                                    handleSubmitReport,
                                            }}
                                        >
                                            <NewPost />
                                            <Spacer size={10} />
                                        </UserActionsHandlersContext.Provider>
                                    </PostContext.Provider>
                                ))
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}
