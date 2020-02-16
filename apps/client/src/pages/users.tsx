import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';

import { Card, Loading } from '../components';

const GET_USERS = gql`
  query UsersList {
    users {
      id
      name
      username
    }
  }
`;

interface UsersProps extends RouteComponentProps {}

const Title = styled.h2({
  textAlign: 'center',
  padding: '36px 0 100px 0'
});

const Wrapper = styled.div({
  paddingBottom: 40
});

const Users: React.FC<UsersProps> = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <Loading />;
  if (error) return <p>ERROR {}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Wrapper>
        <Title>Users List</Title>
        {data.users &&
          data.users.map((user: any) => (
            <Card
              key={user.id}
              title={user.username}
              subtitle={user.name}
              id={user.id}
              type={'user'}
            />
          ))}
      </Wrapper>
    </Fragment>
  );
};

export default Users;
