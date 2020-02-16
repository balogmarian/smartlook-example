import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Loading from './loading';
import Comment from './comment';

export const GET_COMMENTS_BY_POST_ID = gql`
  query commentsByPostId($postId: ID!) {
    commentsByPostId(postId: $postId) {
      id
      name
      email
      body
    }
  }
`;

interface CommentProps {
  postId: string;
}

const Comments: React.FC<CommentProps> = ({ postId }) => {
  const { data, loading, error } = useQuery(GET_COMMENTS_BY_POST_ID, {
    variables: { postId }
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      {data.commentsByPostId.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Fragment>
  );
};

export default Comments;
