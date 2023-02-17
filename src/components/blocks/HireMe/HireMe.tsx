import s from "../Main.module.sass";
import * as React from "react";
import {Title} from "../utils/Title";
import {ButtonDefault} from "../utils/ButtonDefault";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {HireMeType} from "../../../store/main/main-reducer";


export const HireMe = () => {

  const hireMe = useSelector<AppRootStateType, HireMeType>(state => state.main.hireMe)

  return (
    <div id={hireMe.id} className={s.block}>
      <Title name={hireMe.name} />
      <div className={s.blockHireMe}>
        <ButtonDefault name={"Hire Me"} type={"button"} />
      </div>
    </div>
  )
}