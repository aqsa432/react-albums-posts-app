// src/components/AlbumDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const AlbumDetails = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        setPhotos(response.data);
      } catch (error) {
        console.error(`Error fetching photos for album ${id}:`, error);
      }
    };

    fetchPhotos();
  }, [id]);

  return (
    <div>
      <h1>Album Details</h1>
      {photos.map((photo) => (
        <Card key={photo.id}>
          <CardImg top src={photo.thumbnailUrl} alt={photo.title} />
          <CardBody>
            <CardTitle>{photo.title}</CardTitle>
            <CardText>{photo.url}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default AlbumDetails;
