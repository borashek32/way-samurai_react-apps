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
        <NavLink to={"/way-samurai_react-apps/telegram"} target={"_blank"}>
          <div className={s.blockApp}>
            <h4 className={s.blockAppText}>Telegram clone</h4>
            <img src={require("./tl.jpg")} alt="telegram" className={s.blockSkillPicture}/>
            <p className={s.blockAppText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem
              expedita explicabo labore
              maxime numquam quo repellendus soluta ullam voluptate.</p>
          </div>
        </NavLink>
        <NavLink to={"/way-samurai_react-apps/counters"} target={"_blank"}>
          <div className={s.blockApp}>
            <h4 className={s.blockAppText}>Counters</h4>
            <img src={require("./counters.jpg")} alt="counters" className={s.blockSkillPicture}/>
            <p className={s.blockAppText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem
              expedita explicabo labore
              maxime numquam quo repellendus soluta ullam voluptate.</p>
          </div>
        </NavLink>
        <a href="https://borashek32.github.io/way-samurai_social-network_ts_old/" target={"_blank"}>
          <div className={s.blockApp}>
            <h4 className={s.blockAppText}>Social Network</h4>
            <img src={require("./social-network.jpg")} alt="social-network" className={s.blockSkillPicture}/>
            <p className={s.blockAppText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem
              expedita explicabo labore
              maxime numquam quo repellendus soluta ullam voluptate.</p>
          </div>
        </a>
      </div>
    </div>
  )
}