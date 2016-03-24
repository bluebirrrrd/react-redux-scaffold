import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { loadAuthorsRequest, loadAuthorsSuccess, loadAuthorsFailure } from '../actions/TodosAction.js';


class AuthorList extends Component {
  static propTypes = {
    authors: PropTypes.instanceOf(List).isRequired
  };

  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    const authors = this.props.authors.toJS().map(author =>
        <li key={author.id}><Link to={{ pathname: `/authors/${author.id}` }}>{author.name}</Link></li>
    );

    return (
      <section className="author-list">
        Author List here
        {authors}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  authors: state.authors
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuthors: () => {
    dispatch(loadAuthorsRequest());
    fetch('/api/authors')
        .then((response) => response.json())
        .then(
          (authors) => dispatch(loadAuthorsSuccess(authors)),
          (error) => dispatch(loadAuthorsFailure(error))
        );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
