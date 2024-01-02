// src/components/Posts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
            <CardText>{post.body}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
