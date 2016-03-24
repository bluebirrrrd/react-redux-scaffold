import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { loadAuthorsSuccess, loadAuthorsFailure, loadAuthorsRequest } from '../actions/TodosAction.js';


export default class AuthorDetail extends Component {
  static propTypes = {
    authors: PropTypes.instanceOf(List).isRequired
  };

  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    const { authorId } = this.props.params;
    const id = parseInt(authorId, 10);


    const author = this.props.authors.toJS()
                      .filter(a => a.id === id)
                      .reduce((a, b) => b, {});

    return (
      <section className="author-detail">
        <h1>{author.name}</h1>
        <p>Bio: {author.bio}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail);
