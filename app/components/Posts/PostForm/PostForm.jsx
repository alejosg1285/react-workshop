import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';


class PostForm extends Component {

  static propTypes = {
    createPost: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    body: '',
  };

  handleOnChange = (key, value) => {
    this.setState({ [key]: value });
  }

  handleCreatePost = () => {
    const { createPost } = this.props;
    const post = { ...this.state, date: Date() };
    // console.log(this.state);
    createPost(post);
  };

  render() {

    return (
      <div>
        <Input
          label="Title"
          onChange={this.handleOnChange.bind(this, 'title')}
          value={this.state.title}
        />
        <Input
          label="Body"
          onChange={this.handleOnChange.bind(this, 'body')}
          value={this.state.body}
          disabled={this.state.title === ''}
        />
        <Button
          label="Create post"
          icon="send"
          onClick={this.handleCreatePost}
        />
      </div>
    );
  }

}

export default PostForm;
