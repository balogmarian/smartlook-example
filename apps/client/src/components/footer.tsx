import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { colors } from '../styles';

const Wrapper = styled.div({
  fontSize: 12,
  backgroundColor: `${colors.text}`,
  textAlign: 'right',
  color: 'white',
  padding: '4px 20px',
  letterSpacing: 0.2,
  position: 'fixed',
  bottom: 0,
  width: '100%'
});

const Footer = () => {
  return (
    <Fragment>
      <Wrapper>
        &copy; Created by{' '}
        <b>
          <i>Marian Balog</i>
        </b>{' '}
        for <b>Smartlook</b>
      </Wrapper>
    </Fragment>
  );
};

export default Footer;
