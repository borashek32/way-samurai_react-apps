import React from 'react'
import s from "../Main.module.sass";
import {Title} from "../utils/Title";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {MyAppsType} from "../../../store/main/main-reducer";
import {NavLink} from "react-router-dom";


export const MySkills = () => {

  const mySkills = useSelector<AppRootStateType, MyAppsType>(state => state.main.mySkills)

  const mappedMySkills = mySkills.apps.map(app => {

    const imgStyles = s.blockLogo + ' ' + (app.header === "React" ? s.blockLogoReact
      : app.header === "Redux" ? s.blockLogoRedux : '')

    return (
      <NavLink
        key={app.id}
        to={app.link}
        className={s.navLinkClass + ' ' + s.blockCardRound}
      >
        <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
        <img
          src={app.imgPath}
          alt={app.imgAlt}
          className={imgStyles}
        />
      </NavLink>
    )
  })

  return (
    <div className={s.block}>
      <Title name={mySkills.name} id={mySkills.id}/>
      <div className={s.blockFlex}>
        {mappedMySkills}
      </div>
    </div>
  )
}