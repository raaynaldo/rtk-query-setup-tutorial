import Albums from './components/Albums';
import NewAlbumForm from './components/NewAlbumForm';

import styles from './App.module.css';
import UpdateAlbumForm from './components/UpdateAlbumForm';
import { useState } from 'react';

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Albums setSelectedAlbum={setSelectedAlbum} />
      <NewAlbumForm />
      <UpdateAlbumForm selectedAlbum={selectedAlbum} />
    </div>
  );
}

export default App;
