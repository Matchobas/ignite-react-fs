import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <Post 
        author="Matheus Alexandria" 
        content="Lorem ipsum dolor sit, amet conset."
      />
    </>
  )
}

export default App

