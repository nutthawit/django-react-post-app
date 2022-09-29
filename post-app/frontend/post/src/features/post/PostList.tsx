import React, {useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPosts, selectAllPosts } from './postSlice';

export const PostList = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectAllPosts);

    const postStatus = useAppSelector(state => state.post.status);
    const error = useAppSelector(state => state.post.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    return (
        <h2>Posts</h2>
    )
}

