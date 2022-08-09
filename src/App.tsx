import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/matchobas.png',
      name: 'Matheus Alexandria',
      role: 'Developer at Lead Dell',
    },
    content: [
      { type: 'paragraph', content: 'Meu povo conteúdo novo inédito no feed chegando nessa merda simbora'},
      { type: 'link', content: 'Go to my page'},
    ],
    publishedAt: new Date('2022-08-08 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jeftemartins.png',
      name: 'Jefte Martins',
      role: '.NET Developer at Atlantico',
    },
    content: [
      { type: 'paragraph', content: 'Meu povo conteúdo novo inédito no feed chegando nessa merda simbora'},
      { type: 'link', content: 'Go to my page'},
    ],
    publishedAt: new Date('2022-08-08 23:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        {
          posts.map((post) => {
            return (
              <Post 
                key={post.id}
                avatar_url={post.author.avatarUrl}
                name={post.author.name}
                role={post.author.role}
                content={post.content[0].content}
                publishedDate={post.publishedAt} 
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App

