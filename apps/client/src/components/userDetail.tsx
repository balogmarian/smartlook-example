import React from 'react';
import styled from '@emotion/styled';

import Address from './adrress';
import Company from './company';
import { unit } from '../styles';

interface UserProps {
  id: string;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Wrapper = styled.div({
  marginBottom: unit * 4
});

const Title = styled.h5({
  padding: 20,
  fontSize: 20
});

const InfoBox = styled.div({
  padding: '0 20px 20px 20px'
});

const UserDetail: React.FC<any> = (props: UserProps) => {
  const { name, phone, website, address, company } = props;

  return (
    <Wrapper>
      <Title>Name: {name}</Title>
      <InfoBox>
        <h4>Phone: {phone}</h4>
        <h4>Web: {website}</h4>
      </InfoBox>
      <Address {...address} />
      <Company {...company} />
    </Wrapper>
  );
};

export default UserDetail;
