import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface PostProps {
  avatar_url: string;
  name: string;
  role: string;
  publishedDate: Date;
  content: string;
}

export function Post({ 
  avatar_url, 
  name, 
  role, 
  publishedDate,
  content
}: PostProps) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedDate);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar source={avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time 
          title="1 de Agosto às 23:00" 
          dateTime="2022-08-01 23:00:00"
        >
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>
        <a href="#">Go to my page</a>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário"/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}