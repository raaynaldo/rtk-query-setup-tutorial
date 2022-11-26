import React from 'react';
import { useCreateAlbumMutation } from '../app/services/jsonServerApi';

export default function NewAlbumForm() {
  const [createAlbum, { isLoading }] = useCreateAlbumMutation();

  function submitAlbum(event) {
    event.preventDefault();
    createAlbum(event.target['title'].value);
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>New Album</h3>
      <div>
        <label htmlFor='title'>Title:</label>{' '}
        <input type='text' id='title' />
      </div>

      <br />

      <div>
        <input type='submit' 
          value='Add New Album' 
          disabled={isLoading}   
        />
        {isLoading && ' Loading...'}
      </div>
    </form>
  );
}
