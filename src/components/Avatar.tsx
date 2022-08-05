import styles from './Avatar.module.css';

interface AvatarProps {
  source: string;
}

export function Avatar({ source }: AvatarProps) {
  return (
    <img className={styles.avatar} src={source} />
  )
}