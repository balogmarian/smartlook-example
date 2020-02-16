import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { RouteComponentProps } from '@reach/router';
import { Link } from '@reach/router';

import { colors } from '../styles';

interface HomeProps extends RouteComponentProps {}

const Wrapper = styled.div({
  margin: '10px 20px',
  textAlign: 'center'
});

const StyledTitle = styled.h2({
  padding: '36px 0 100px 0'
});

const StyledLink = styled(Link)({
  margin: '20px',
  height: 20,
  display: 'block',
  textDecoration: 'none',
  color: colors.text,
  '&:hover': {
    color: colors.textSecondary
  }
});

const MenuItem = styled.h4({
  fontSize: 22
});
const Home: React.FC<HomeProps> = () => {
  return (
    <Fragment>
      <Wrapper>
        <StyledTitle>Welcome to Application</StyledTitle>
        <StyledLink to={`/users/`}>
          <MenuItem>Show All Users</MenuItem>
        </StyledLink>
        <StyledLink to={`/posts/`}>
          <MenuItem>Show All Posts</MenuItem>
        </StyledLink>
      </Wrapper>
    </Fragment>
  );
};

export default Home;
