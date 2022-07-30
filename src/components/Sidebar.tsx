import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.covers}
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=60" 
        alt="Imagem aleatoria no perfil" 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/matchobas.png" />

        <strong>Matheus Alexandria</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar meu perfil
        </a>
      </footer>
    </aside>
  )
}