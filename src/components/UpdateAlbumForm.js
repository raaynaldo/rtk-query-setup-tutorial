import React from 'react';
import { useUpdateAlbumMutation } from '../app/services/jsonServerApi';

export default function UpdateAlbumForm(props) {
  const { selectedAlbum = null } = props;
  const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();

  function submitAlbum(event) {
    event.preventDefault();
    updateAlbum({ id: selectedAlbum.id, title: event.target['title'].value });
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>Update Album</h3>

      <div>
        {selectedAlbum
          ? `${selectedAlbum.id} - ${selectedAlbum.title}`
          : 'No Selected Album'}
      </div>

      <div>
        <label htmlFor='title'>Title:</label> <input type='text' id='title' />
      </div>

      <br />

      <div>
        <input
          type='submit'
          value='Update Album'
          disabled={!selectedAlbum || isLoading}
        />
        {isLoading && ' Loading...'}
      </div>
    </form>
  );
}
