import s from "../Main.module.sass";
import {NavLink} from "react-router-dom";
import {ButtonDefault} from "./ButtonDefault";


type CardAppType = {
  id: string
  link: string
  header: string
  imgPath: string
  imgAlt: string
  imgStyles?: string
  desc: string
}

export const CardApp: React.FC<CardAppType> = ({
                                                 id,
                                                 link,
                                                 header,
                                                 imgPath,
                                                 imgAlt,
                                                 imgStyles,
                                                 desc
                                              }) => {

  const styles = s.blockCardPicture + ' ' + imgStyles
  const condition = id.substr(0, 3) === "app"

  return (
    <div className={condition ? s.blockCard : ''}>
      <div className={condition ? s.blockCardSections : ' '}>
        <NavLink
          to={link}
          className={condition ? '' : s.navLinkClass + ' ' + s.blockCardRound}
        >
          <h4 className={s.blockCardSectionsHeader}>{header}</h4>
          <img
            src={imgPath}
            alt={imgAlt}
            className={styles}
          />
          {condition
            ? <div className={s.blockCardSectionsButtonWrapper}>
                <ButtonDefault
                  name={"Open"}
                  type={"button"}
                />
              </div>
            : ''}
        </NavLink>
      </div>
      {condition
        ? <div className={s.blockCardSections}>
            <p>{desc}</p>
          </div>
      : ''}
    </div>
  )
}