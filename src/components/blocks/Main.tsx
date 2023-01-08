import styles from './Main.module.css'
import s from '../../App.module.css'
import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './MySkills/MySkills'
import {MyApps} from './MyApps/MyApps'
import {HireMe} from "./HireMe/HireMe";
import {Contact} from "./Contact/Contact";

type MainType = {
  name: string
}

export const Main: React.FC<MainType> = ({
                                           name
                                         }) => {
  return (
    <div className={s.container}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{name}</h1>
        <AboutMe name={"About Me"}/>
        <MyApps name={"My projects"}/>
        <MySkills name={"My Skills"}/>
      </div>
      <HireMe name={"I consider a remote work"}/>
      <div className={styles.mainContainer}>
        <Contact name={"Contact Me"} />
      </div>
      <footer className={styles.footer}>
        <div>Baranova Natalya</div>
        <div>&#169; All rights reserved 2023</div>
        <a style={{color: "#0A1929FF"}} href="mailto:">mail_me@gmail.com</a>
      </footer>
    </div>
  )
}