import s from "../Main.module.css";
import {NavLink} from "react-router-dom";

type MyAppsType = {
  name: string
}

export const MyApps: React.FC<MyAppsType> = ({
                                               name
                                             }) => {
  return (
    <div className={s.block}>
      <h1 className={s.blockTitle}>{name}</h1>
      <div className={s.blockFlex}>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <NavLink to={"/way-samurai_react-apps/telegram"}>
              <h4 className={s.blockCardsSectionsHeader}>Telegram clone</h4>
              <img src={require("./tl.jpg")} alt="telegram" className={s.blockCardPicture}/>
            </NavLink>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <NavLink to={"https://borashek32.github.io/way-samurai_todolist-thursday/"}>
              <h4 className={s.blockCardsSectionsHeader}>Todolist</h4>
              <img src={require("./todolist.jpg")} alt="todolist" className={s.blockCardPicture}/>
            </NavLink>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <a href={"/way-samurai_react-apps/counters"}>
              <h4 className={s.blockCardsSectionsHeader}>Counters</h4>
              <img src={require("./counters.jpg")} alt="counters" className={s.blockCardPicture}/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <a href="https://borashek32.github.io/way-samurai_social-network_ts_old/">
              <h4 className={s.blockCardsSectionsHeader}>Social Network</h4>
              <img src={require("./social-network.jpg")} alt="social-network" className={s.blockCardPicture}/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?</p>
          </div>
        </div>
      </div>
    </div>
  )
}