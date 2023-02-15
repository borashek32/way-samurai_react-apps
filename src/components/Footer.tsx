import styles from './../components/blocks/Main.module.css'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>Baranova Natalya</div>
      <div>&#169; All rights reserved {new Date().getFullYear()}</div>
      <a style={{color: "#0A1929FF"}} href="mailto:borashek@inbox.ru">borashek@inbox.ru</a>
    </footer>
  )
}