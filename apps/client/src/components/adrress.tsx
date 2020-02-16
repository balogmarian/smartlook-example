import React, { Fragment } from 'react';
import styled from '@emotion/styled';

interface AddProps {
  street: string,
  suite: string,
  zipcode: string,
  city: string,
}

const Wrapper = styled.div({
  padding: 20,
  textAlign: 'left',
});

const Title = styled.div({
  fontSize: 18,
  fontWeight: 600,
  padding: '10px 0'
});

const Address = (props: AddProps) => {
  const { street, suite, zipcode, city } = props;

  return (
    <Fragment>
      <Wrapper>
        <Title>Address:</Title>
        <h4>{street}</h4>
        <h4>{suite}</h4>
        <h4>{zipcode} {city}</h4>
      </Wrapper>
    </Fragment>
  );
};

export default Address;
