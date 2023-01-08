import styles from './../components/blocks/Main.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Baranova Natalya</div>
      <div>&#169; All rights reserved 2023</div>
      <a style={{color: "#0A1929FF"}} href="mailto:">mail_me@gmail.com</a>
    </footer>
  )
}