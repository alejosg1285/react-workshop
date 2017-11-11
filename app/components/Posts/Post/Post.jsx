import React from 'react';
import PropTypes from 'prop-types';

function Post({ title, body, date }) {
  return (
    <div>
      <h4>{date}</h4>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  date: PropTypes.string.isRequired,
};

Post.defaultProps = {
  body: 'No body',
};

export default Post;
