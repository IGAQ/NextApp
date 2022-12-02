import * as postService from '../../lib/services/postService';
import * as moderationService from '../../lib/services/moderationService';
import {timeAgo} from '../../lib/utils';
import {useState, useEffect} from 'react';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [pendingPosts, setPendingPosts] = useState(null);
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [unrestrictSuccess, setUnrestrictSucess] = useState(false);

    useEffect(() => {
        (async function () {
            const posts = await moderationService.getPendingPosts();
            setPendingPosts([...posts]);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        (async function () {
            const posts = await postService.getPosts('queery');
            setPosts([...posts]);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        (async function () {
            const users = await moderationService.getUsers();
            setUsers([...users]);
            setIsLoading(false);
        })();
    }, []);

    const handleUnRestrict = async (postId) => {
        setIsLoading(true);
        await moderationService.unrestrictPost(postId);
        setIsLoading(false);
        setUnrestrictSucess(true);
    };

    const handleBanUser = async (userId, reason) => {
        setIsLoading(true);
        await moderationService.banUser(userId, reason);
        setIsLoading(false);
    };

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
                            <tr>
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
                                        unrestrict
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
