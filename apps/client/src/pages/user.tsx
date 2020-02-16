import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

import { Loading, UserDetail } from '../components';

export const GET_USER = gql`
  query userById($id: ID!) {
    userById(id: $id) {
      id
      name
      username
      address {
        street
        suite
        city
        zipcode
      }
      phone
      website
      company {
        name
        catchPhrase
        bs
      }
    }
  }
`;

interface UserProps extends RouteComponentProps {
  id?: string;
}

const Wrapper = styled.div({
  margin: '10px 20px',
  padding: 20,
  borderRadius: 8,
  backgroundColor: 'white'
});

const Title = styled.h2({
  textAlign: 'center',
  padding: '20px 0 20px 0'
});

const User: React.FC<UserProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_USER, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Wrapper>
        <Title>{data.userById[0].username}</Title>
        <UserDetail {...data.userById[0]} />
      </Wrapper>
    </Fragment>
  );
};

export default User;
