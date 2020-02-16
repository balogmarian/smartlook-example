import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import { unit } from '../styles';
import logo from '../assets/smartlookLogo.svg';

interface HeaderProps {}

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 4.5
});

const Image = styled('img')({
  margin: unit * 2.5
});

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <Image src={logo} alt="Smartlook logo - click to home" title="Home" />
      </Link>
    </Wrapper>
  );
};

export default Header;
