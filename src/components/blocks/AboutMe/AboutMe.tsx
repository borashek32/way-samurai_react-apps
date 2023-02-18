import React from 'react'
import s from '../Main.module.sass'
import {Title} from "../utils/Title"
import {AppRootStateType, store} from "../../../store/store";
import {useSelector} from "react-redux";
import {AboutMeType} from "../../../store/main/main-reducer";


export const AboutMe = () => {

  const blockAboutWrapper = s.blockWrapper + " " + s.blockAboutWrapper

  const aboutMe = useSelector<AppRootStateType, AboutMeType>(state => state.main.aboutMe)

  return (
    <div className={s.block}>
      <Title name={aboutMe.name} id={aboutMe.id} />
      <div className={blockAboutWrapper}>
        <div className={s.blockImg}>
          <img src={require('./me.jpg')} alt="me" width='200px'/>
        </div>
        <div className={s.blockAbout}>
          <div className={s.blockFlex}>
            {aboutMe.desc}
          </div>
        </div>
      </div>
    </div>
  )
}