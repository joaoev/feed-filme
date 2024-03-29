import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import { PostType } from './components/Post';
import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaoev.png',
      name: 'João',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Linha 1' },
      { type: 'paragraph', content: 'Linha 2' },
      { type: 'link', content: 'link' }
    ],
    publishedAt: new Date('2024-01-16 01:17:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}