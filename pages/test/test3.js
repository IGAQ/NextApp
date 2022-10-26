import {useUser} from '../../lib/hooks/useUser';
import * as auth from '../../lib/auth';

export default function Test3(){
    const user = useUser();

    console.debug("test ", user);

    auth.login("john", "john");

    // auth.logout()

    return (
        <>
            <h1>authenticated now.</h1>
            <code>
                { JSON.stringify(user, undefined, 4) }
            </code>
        </>
    );
}