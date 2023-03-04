import React from 'react'
import s from "../Main.module.sass";
import {Title} from "../utils/Title";
import {CardApp} from "../utils/CardApp";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {MyAppsType} from "../../../store/main/main-reducer";


export const MyApps = () => {

  const myApps = useSelector<AppRootStateType, MyAppsType>(state => state.main.myApps)

  const mappedMyApps = myApps.apps.map(app => {
    return (
      <CardApp
        id={app.id}
        key={app.id}
        link={app.link}
        header={app.header}
        imgPath={app.imgPath}
        imgAlt={app.imgAlt}
        desc={app.desc}
        target={app.target}
      />
    )
  })

  return (
    <div className={s.block}>
      <Title name={myApps.name} id={myApps.id} />
      <div className={s.blockFlex}>
        {mappedMyApps}
      </div>
    </div>
  )
}