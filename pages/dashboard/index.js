import * as postService from '../../lib/services/postService';
import * as moderationService from '../../lib/services/moderationService';
import {timeAgo} from '../../lib/utils';
import {useState, useEffect} from 'react';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';
import {useUser} from '../../lib/hooks/useUser';
import {useRouter} from 'next/router';

export default function Dashboard() {
    const [user, userAuthLoaded] = useUser({redirectTo: '/login'});
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [pendingPosts, setPendingPosts] = useState(null);
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [unrestrictSuccess, setUnrestrictSucess] = useState(false);

    useEffect(() => {
        (async function () {
            const pendingPosts = await moderationService.getPendingPosts();
            setPendingPosts([...pendingPosts]);
            setIsLoading(false);
        })();
    }, []);

    const handleUnRestrict = async (postId) => {
        console.log('unrestricted', postId);
        setIsLoading(true);
        await moderationService.unrestrictPost(postId);
        setIsLoading(false);
        setUnrestrictSucess(true);
    };

    const handleBanUser = async ({userId, reason}) => {
        console.log('ban user', userId, reason);
        setIsLoading(true);
        await moderationService.banUser({userId, reason});
        setIsLoading(false);
        setBanSuccess(true);
    };

    if (!user || !userAuthLoaded) {
        return <PageLoader />;
    } else {
        console.log(user);
        if (!user.roles.includes(1) && !user.roles.includes(2)) {
            router.push('/homepage');
            return <PageLoader />;
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Pending/Restricted Posts</h2>
            {unrestrictSuccess && (
                <ModalAlert
                    onClick={() => setUnrestrictSucess(false)}
                    title="Success"
                    content={'You have successfully unrestricted the post'}
                />
            )}
            {isLoading ? (
                <PageLoader />
            ) : (
                <>
                    {pendingPosts.map((post) => {
                        return (
                            <tr key={post.postId}>
                                <td>{post.postTitle}</td>
                                <td>{post.authorUser.username}</td>
                                <td>
                                    Restricted {''}
                                    {timeAgo(post.restrictedProps.restrictedAt)}
                                </td>
                                <td>{post.restrictedProps.reason}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleUnRestrict(post.postId)
                                        }
                                    >
                                        {' '}
                                        unrestrict/allow
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </>
            )}
        </>
    );
}
