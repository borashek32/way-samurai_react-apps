import React from 'react'
import s from "../Main.module.sass";
import {NavLink} from "react-router-dom";
import {ButtonDefault} from "./ButtonDefault";


type CardAppType = {
  id: string
  link: string
  header: string
  imgPath: string
  imgAlt: string
  desc: string
  target: boolean
}

export const CardApp: React.FC<CardAppType> = ({
                                                 id,
                                                 link,
                                                 header,
                                                 imgPath,
                                                 imgAlt,
                                                 desc,
                                                 target
                                               }) => {
  console.log(target)
  return (
    <div className={s.blockCard}>
      {target ?
        <a href={link} className={s.navLinkClass} target="_blank" rel="noreferrer">
          <h4 className={s.blockCardSectionsHeader}>{header}</h4>
          <img src={imgPath} alt={imgAlt} className={s.blockCardPicture} />
          <div className={s.blockCardSectionsButtonWrapper}>
            <ButtonDefault name={"Open"} type={"button"} />
          </div>
        </a>
        :
        <NavLink to={link} className={s.navLinkClass}>
          <h4 className={s.blockCardSectionsHeader}>{header}</h4>
          <img src={imgPath} alt={imgAlt} className={s.blockCardPicture} />
          <div className={s.blockCardSectionsButtonWrapper}>
            <ButtonDefault name={"Open"} type={"button"} />
          </div>
        </NavLink>}
      <p>{desc}</p>
    </div>
  )
}