import React from 'react'
import s from "../Main.module.sass";
import {Title} from "../utils/Title";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {MyAppsType} from "../../../store/main/main-reducer";
import {CardApp} from "../utils/CardApp";


export const MySkills = () => {

  const mySkills = useSelector<AppRootStateType, MyAppsType>(state => state.main.mySkills)

  const mappedMySkills = mySkills.apps.map(app => {
    return (
      <CardApp
        id={app.id}
        key={app.id}
        link={app.link}
        header={app.header}
        imgPath={app.imgPath}
        imgAlt={app.imgAlt}
        imgStyles={app.imgStyles}
        desc={app.desc}
      />
    )
  })

  return (
    <div className={s.block}>
      <Title name={mySkills.name}/>
      <div className={s.blockFlex}>
        {mappedMySkills}
      </div>
    </div>
  )
}