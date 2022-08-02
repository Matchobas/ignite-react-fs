import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/matchobas.png" />
          <div className={styles.authorInfo}>
            <strong>Matheus Alexandria</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time title="1 de Agosto às 23:00" dateTime="2022-08-01 23:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Meu povo conteúdo novo inédito no feed chegando nessa merda simbora</p>
        <a href="#">Go to my page</a>
      </div>
    </article>
  )
}