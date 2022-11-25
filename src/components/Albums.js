import React, { useState } from 'react';
import { useGetAlbumsQuery } from '../app/services/jsonServerApi';

export default function Albums() {
  const [page, setPage] = useState(1);
  const {
    data: albums = [],
    isLoading,
    isError,
    error,
  } = useGetAlbumsQuery(page);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  return (
    <div>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      <button
        disabled={albums.length < 10}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}
