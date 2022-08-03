import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/matchobas.png" alt="Profile picture"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Alexandria</strong>

              <time title="1 de Agosto às 23:00" dateTime="2022-08-01 23:00:00">Cerca de 2 horas atŕas</time>

              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </div>
          </header>

          <p>Muito bom caralho!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}