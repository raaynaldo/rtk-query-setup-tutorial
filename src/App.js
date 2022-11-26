import Albums from './components/Albums';
import NewAlbumForm from './components/NewAlbumForm';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Albums />
      <NewAlbumForm />
    </div>
  );
}

export default App;
