import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchAuthors, selectAllAuthors } from '../author/authorSlice';

export const PostAuthor = ({ userId }: number) => {
  const author = useAppSelector(state =>
    state.author.find(a => a.id === userId)
  )

  return <span>by {author ? author.name : "Unknow author"}</span>
}

