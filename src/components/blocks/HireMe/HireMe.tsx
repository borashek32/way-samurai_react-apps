import s from "../Main.module.sass";
import * as React from "react";
import {Title} from "../utils/Title";
import {ButtonDefault} from "../utils/ButtonDefault";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
// import {HireMeType} from "../../../store/main/main-reducer";


export const HireMe = () => {

  // const hireMe = useSelector<AppRootStateType, HireMeType>(state => state.main.hireMe)

  return (
    <div className={s.block}>
      {/*<Title name={hireMe.name} id={hireMe.id} />*/}
      <div className={s.blockHireMe}>
        <a href="mailto:borashek@inbox.ru">
          <ButtonDefault name={"Hire Me"} type={"button"} />
        </a>
      </div>
    </div>
  )
}