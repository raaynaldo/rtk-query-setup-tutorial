import React from 'react';
import { useGetAlbumsQuery } from '../app/services/jsonServerApi';

export default function Albums() {
  const { data: albums = [], isLoading, isError, error } = useGetAlbumsQuery(1);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.id} - {album.title}
        </li>
      ))}
    </ul>
  );
}
