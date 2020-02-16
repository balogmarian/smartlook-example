import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

import { colors } from '../styles';
import { Card, Loading } from '../components';

export const POST_TILE_DATA = gql`
  fragment PostsTile on Post {
    id
    title
    body
    userId
  }
`;

const GET_POSTS = gql`
  query PostsList($after: String) {
    posts(after: $after) {
      cursor
      hasMore
      posts {
        ...PostsTile
      }
    }
  }
  ${POST_TILE_DATA}
`;

interface PostsProps extends RouteComponentProps {}

const Title = styled.h2({
  textAlign: 'center',
  padding: '36px 0 100px 0'
});

const StyledButton = styled.button({
  minWidth: 200,
  minHeight: 50,
  width: '8%',
  borderRadius: '26px',
  border: `1px solid ${colors.text}`,
  color: colors.text,
  '&:hover': {
    color: colors.textSecondary,
    border: `1px solid ${colors.textSecondary}`
  },
  backgroundColor: 'transparent',
  margin: '50px 20px',
  outline: 'none'
});

const ButtonWrapper = styled.div({
  textAlign: 'center'
});

const Posts: React.FC<PostsProps> = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS);

  if (loading) return <Loading />;
  if (error) return <p>ERROR {}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Title>Posts List</Title>
      {data.posts &&
        data.posts.posts.map((post: any) => (
          <Card
            key={post.id}
            title={''}
            subtitle={post.title}
            id={post.id}
            type={'post'}
          />
        ))}
      <ButtonWrapper>
        {data.posts && data.posts.hasMore && (
          <StyledButton
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.posts.cursor
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...fetchMoreResult,
                    posts: {
                      ...fetchMoreResult.posts,
                      posts: [
                        ...prev.posts.posts,
                        ...fetchMoreResult.posts.posts
                      ]
                    }
                  };
                }
              })
            }
          >
            <h4>Load More Posts</h4>
          </StyledButton>
        )}
      </ButtonWrapper>
    </Fragment>
  );
};

export default Posts;
