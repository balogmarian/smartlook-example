import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

import { Loading, Comments } from '../components';

export const GET_POST = gql`
  query postById($id: ID!) {
    postById(id: $id) {
      id
      title
      body
      userId
    }
  }
`;

interface PostProps extends RouteComponentProps {
  id?: string;
}

const Wrapper = styled.div({
  margin: '10px 20px 50px 10px',
  padding: 20,
  borderRadius: 8,
  backgroundColor: 'white'
});

const Title = styled.h2({
  textAlign: 'left',
  padding: '20px 0 20px 0',
  '@media (max-width: 420px)': {
    fontSize: 24
  }
});

const Text = styled.div({
  paddingBottom: 40
});

const Post: React.FC<PostProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_POST, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const { title, body } = data.postById[0];

  return (
    <Fragment>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{body}</Text>
        <Comments postId={id} />
      </Wrapper>
    </Fragment>
  );
};

export default Post;
