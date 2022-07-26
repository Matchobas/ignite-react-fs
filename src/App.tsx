import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Post 
        author="Matheus Alexandria" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellat adipisci pariatur dolore eos cupiditate consequuntur aliquid autem accusantium, debitis consectetur omnis ullam quasi facere exercitationem nulla? Officia, laborum quaerat."
      />
    </>
  )
}

export default App

