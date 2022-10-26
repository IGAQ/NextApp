import {useUser} from '../../lib/hooks/useUser';
import * as auth from '../../lib/auth';

export default function Test3(){
    const user = useUser();

    console.debug("test ", user);

    auth.login("john", "john");

    // auth.logout()

    return (
        <>
            <h1>you should see the stringified user. that measn you are authenticated. refresh the page if you dont see. otherwise, it's bug.</h1>
            <code>
                { JSON.stringify(user, undefined, 4) }
            </code>
        </>
    );
}