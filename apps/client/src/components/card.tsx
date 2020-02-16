import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from '@reach/router';

import { unit, colors } from '../styles';

interface CardProps {
  id: string,
  title: string,
  subtitle: string,
  type: string
}

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  margin: `10px 20px`,
  borderRadius: 7,
  color: colors.text,
  '&:hover': {
    color: colors.textSecondary
  },
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: colors.grey
});

const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  minHeight: 60,
  height: 'auto',
  textDecoration: 'none'
});

const Title = styled.h3({
  '@media (max-width: 420px)': {
    fontSize: 24
  }
});

const Card = (props: CardProps) => {
  const { id, title, subtitle, type } = props;

  return (
    <StyledLink to={`/${type}/${id}`}>
      <Title>{title}</Title>
      <h5>{subtitle}</h5>
    </StyledLink>
  );
};

export default Card;


