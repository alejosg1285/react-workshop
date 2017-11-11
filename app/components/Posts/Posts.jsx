import React, { Component } from 'react';
import PostForm from './PostForm/PostForm';
import Post from './Post/Post';

const Comment = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const comments = [
  { id: 1, text: 'comment 1' },
  { id: 2, text: 'comment 2' },
  { id: 3, text: 'comment 3' },
  { id: 4, text: 'comment 4' },
];

class Posts extends Component {

  state = {
    posts: [],
    postCount: 1,
  }

  handleCreatePost = (post) => {

    console.log(post);

    const postItem = (
      <Post
        key={this.state.postCount}
        {...post}
      />
    );

    this.setState({
      postCount: this.state.postCount + 1,
      posts: this.state.posts.concat(postItem),
    });
  }

  render() {

    const commentItems = comments.map(c => (
      <Comment
        key={c.id}
        text={c.text}
      />
    ));

    return (
      <div>
        <div>
          {this.state.posts}
        </div>
        <PostForm
          createPost={this.handleCreatePost}
        />
        <div>
          {commentItems}
        </div>
      </div>
    );
  }


}

export default Posts;
