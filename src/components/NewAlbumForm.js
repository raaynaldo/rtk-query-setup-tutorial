import React from 'react';

export default function NewAlbumForm() {
  return (
    <form>
      <h3>New Album</h3>
      <div>
        <label htmlFor='title'>Title:</label> <input type='text' id='title' />
      </div>

      <br />

      <div>
        <input type='submit' value='Add New Album' />
      </div>
    </form>
  );
}
