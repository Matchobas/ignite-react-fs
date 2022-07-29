import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>Profile</aside>
        <div>Posts</div>
      </div>
    </>
  )
}

export default App

