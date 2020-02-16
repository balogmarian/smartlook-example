import React, { Fragment } from 'react';
import styled from '@emotion/styled';

interface CompProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

const Wrapper = styled.div({
  padding: 20,
  textAlign: 'left'
});

const Title = styled.div({
  fontSize: 18,
  fontWeight: 600,
  padding: '10px 0'
});

const Company = (props: CompProps) => {
  const { name, catchPhrase, bs } = props;

  return (
    <Fragment>
      <Wrapper>
        <Title>Company:</Title>
        <h4>{name}</h4>
        <h4>{catchPhrase}</h4>
        <h4>{bs}</h4>
      </Wrapper>
    </Fragment>
  );
};

export default Company;
