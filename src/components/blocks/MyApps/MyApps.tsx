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
      <h2 className={s.blockTitle}>{name}</h2>
      <div className={s.blockFlex}>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <NavLink to={"/way-samurai_react-apps/telegram"}>
              <h4 className={s.blockCardsSectionsHeader}>Messenger</h4>
              <img src={require("./tl.jpg")} alt="telegram" className={s.blockCardPicture}/>
            </NavLink>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <a href={"https://borashek32.github.io/way-samurai_todolist-thursday/"}>
              <h4 className={s.blockCardsSectionsHeader}>Todolist</h4>
              <img src={require("./todolist.jpg")} alt="todolist" className={s.blockCardPicture}/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <p>ToDoList is an online platform for organizing your personal or work tasks which can help you to increase
              the productivity, prioritise tasks, manage tasks effectively and improve time management. Made on React +
              Redux using all the advantages of these tools.</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <NavLink to={"/way-samurai_react-apps/counters"}>
              <h4 className={s.blockCardsSectionsHeader}>Counters</h4>
              <img src={require("./counters.jpg")} alt="counters" className={s.blockCardPicture}/>
            </NavLink>
          </div>
          <div className={s.blockCardsSections}>
            <p>Counters are test projects which (to tell the truth) don't have a lot of practical use. They allow us to
              do some settings which influence on the way how the counter works. Anyways they are good examples of great
              opportunities which libraries of React and Redux provide.</p>
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
            <p>Social Network is an online platform that allows people to create an account and communicate with other
              people on the website. Users can build there virtual world on the site, make friends and share their
              thoughts and ideas by writing a new post.</p>
          </div>
        </div>
        <div className={s.blockCard}>
          <div className={s.blockCardsSections}>
            <a href="https://borashek32.github.io/way-samurai_hw-autotests">
              <h4 className={s.blockCardsSectionsHeader}>Separate Blocks</h4>
              <img src={require("./separate-blocks.jpg")} alt="separate-blocks" className={s.blockCardPicture}/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo
              recusandae sit voluptatem?</p>
          </div>
        </div>
      </div>
    </div>
  )
}