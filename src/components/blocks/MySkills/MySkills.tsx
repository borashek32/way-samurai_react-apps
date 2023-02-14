import s from "../Main.module.css";

type MyCardsType = {
  name: string
}

export const MySkills: React.FC<MyCardsType> = ({
                                                   name
                                                 }) => {

  return (
    <div className={s.block}>
      <h1 className={s.blockTitle}>My Skills</h1>
      <div className={s.blockFlex}>
        <div className={s.blockSkillCard}>
          <div className={s.blockCardsSections}>
            <a className={s.blockLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={require("./logo192.png")} className={s.blockLogoReact} alt="react"/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <h4 className={s.blockCardsSectionsHeader}>React</h4>
          </div>
        </div>
        <div className={s.blockSkillCard}>
          <div className={s.blockCardsSections}>
            <a className={s.blockLink} href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
              <img src={require("./redux.png")} className={s.blockLogoRedux} alt="redux"/>
            </a>
          </div>
          <div className={s.blockCardsSections}>
            <h4 className={s.blockCardsSectionsHeader}>Redux</h4>
          </div>
        </div>
        <div className={s.blockSkillCard}>
          <div className={s.blockCardsSections}>
            <div className={s.blockCardsRow}>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtypeScript.d7616c23.svg&w=3840&q=75"
                  alt="ts"/>
              </a>
              <a href="https://www.javascript.com/" target="_blank">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FjavaScript.00f974bc.svg&w=3840&q=75"
                  alt="js"/>
              </a>
              <a href="https://storybook.js.org/" target="_blank">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FstoryBook.0cbf5baa.svg&w=3840&q=75"
                  alt="storybook"/>
              </a>
            </div>
            <div className={s.blockCardsRow}>
              <a href="https://html.com/">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml.62b58041.svg&w=3840&q=75"
                  alt="html"/>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.87872113.svg&w=3840&q=75"
                  alt="css"/>
              </a>
              <a href="https://reactjs.org/docs/testing.html">
                <img
                  src="https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FunitTest.ecdada0b.svg&w=3840&q=75"
                  alt="unit tests"/>
              </a>
            </div>
          </div>
          <div className={s.blockCardsSections}>
            <h4 className={s.blockCardsSectionsHeader}>Others</h4>
          </div>
        </div>
      </div>
    </div>
  )
}