// @ts-nocheck
import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Home from './home';
import Users from './users';
import User from './user';
import Posts from './posts';
import Post from './post';

export default function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Home path="/" />
        <Users path="/users" />
        <User path="/user/:id" />
        <Posts path="/posts" />
        <Post path="/post/:id" />
      </Router>
    </Fragment>
  );
}
