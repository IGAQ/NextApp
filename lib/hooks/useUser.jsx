import { useEffect } from 'react';
import useSWR from 'swr';
import Router from 'next/router';
import * as storage from '../storage';
import {JWT_TOKEN_LOCAL_STORAGE_KEY} from '../constants';

const fetcher = (url) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${storage.getFromStorage(JWT_TOKEN_LOCAL_STORAGE_KEY)}`,
        },
    })
        .then((r) => r.json())
        .then((data) => {
            if (data?.statusCode <= 200 || data?.statusCode >= 299) {
                return error;
            }
            return { user: data ?? null };
        })
        .catch((error) => {
            return error;
        });
};

const defaultUseUserProps = {
    redirectTo: null,  // redirect to this if path is not null
    redirectIfFound: false, // if true, redirect to `redirectTo` if the user was found; if false, redirect to `redirectTo` if no user was found
};

export function useUser({ redirectTo, redirectIfFound } = defaultUseUserProps) {
    const { data, error } = useSWR('/api/auth/authenticate', fetcher);
    const user = data?.user;
    const finished = Boolean(data);
    const hasUser = Boolean(user);

    useEffect(() => {
        if (!redirectTo || !finished) return;
        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !hasUser) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && hasUser)
        ) {
            Router.push(redirectTo);
        }
    }, [redirectTo, redirectIfFound, finished, hasUser]);

    return [error ? null : user, finished];
}