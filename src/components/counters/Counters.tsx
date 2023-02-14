import SimpleCounter from "./simpleCounter/SimpleCounter";
import AdvancedCounter from "./advancedCounter/AdvancedCounter";
import css from "../../App.module.css";
import {blue} from "@mui/material/colors";

export const Counters = () => {
  return (
    <div className={css.container} style={{backgroundColor: blue[100]}}>
      <div className={css.wrapper}>
        <SimpleCounter name={"Simple Counter"} />
        <AdvancedCounter name={"Advanced Counter"} />
      </div>
    </div>
  )
}