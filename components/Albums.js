// src/components/Albums.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardBody, CardTitle } from 'reactstrap';


const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
        <Card key={album.id} tag={Link} to={`/albums/${album.id}`}>
          <CardBody>
            <CardTitle>{album.title}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Albums;
