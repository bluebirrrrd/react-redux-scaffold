import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(hashHistory, store);
import { IndexPage } from 'pages/IndexPage';
import { TodoApp } from 'components/TodoApp';
import { AuthorList } from 'components/AuthorList';
import { AuthorDetail } from 'components/AuthorDetail';
import { Genre } from 'components/Genre';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="todo" component={TodoApp} />
        <Route path="authors" component={AuthorList} />
        <Route path="author" component={AuthorDetail} />
        <Route path="genre" component={Genre} />
      </Router>
    );
  }
}
