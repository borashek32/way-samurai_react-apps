import styles from './Main.module.sass'
import s from '../../App.module.sass'
import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './MySkills/MySkills'
import {MyApps} from './MyApps/MyApps'
import {HireMe} from "./HireMe/HireMe";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";
import css from "../../App.module.sass";
import {Nav} from "./Nav/Nav";
import React from "react";


type MainPropsType = {
  name: string
}

export const Main: React.FC<MainPropsType> = ({
                                                name
                                              }) => {

  return (
    <div className={css.container}>
      <Nav/>
      <div className={s.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>{name}</h1>
          <AboutMe/>
          <MyApps/>
          <MySkills/>
          {/*<HireMe/>*/}
          <Contact/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}