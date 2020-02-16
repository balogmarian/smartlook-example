import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles';

interface CommentProps {
  id: string;
  name: string;
  email: string;
  body: string;
}

interface Props {
  comments: Array<Comment>;
}

const Wrapper = styled.div({
  margin: 20,
  padding: 20,
  borderRadius: 8,
  backgroundColor: `${colors.background}`
});

const Title = styled.div({
  fontWeight: 600,
  padding: '10px 0'
});

const Email = styled.h4({
  paddingBottom: 10,
  fontSize: 14,
  '@media (max-width: 420px)': {
    fontSize: 10
  }
});

const Text = styled.div({
  padding: 10,
  '@media (max-width: 420px)': {
    fontSize: 14
  }
});

const Comment = (props: CommentProps) => {
  const { name, email, body } = props;

  return (
    <Fragment>
      <Wrapper>
        <Title>{name}</Title>
        <Email>{email}</Email>
        <Text>{body}</Text>
      </Wrapper>
    </Fragment>
  );
};

export default Comment;
