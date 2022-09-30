import React, {useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPosts, selectAllPosts } from './postSlice';

type Post = {
    id: number;
    title: string;
    content: string;
    author: number;
}

function PostExcerpt({ id, title, content, author }: Post) {
    return (
        <article className="post-excerpt" key={id}>
            <h3>{title}</h3>
            <p className="post-content">{content.substring(0, 100)}</p>
        </article>
    )
}

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

    let content

    if (postStatus === 'loading') {

    } else if (postStatus === 'succeeded') {
        content = posts.map((post) => (
            <PostExcerpt id={post.id} title={post.title} content={post.content} author={post.author} />
        ))
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    )
}

