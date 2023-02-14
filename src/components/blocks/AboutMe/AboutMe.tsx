import s from './../Main.module.css'

type AboutType = {
  name: string
}

export const AboutMe: React.FC<AboutType> = ({
                                               name
                                             }) => {
  return (
    <div className={s.block}>
      <h1 className={s.blockTitle}>{name}</h1>
      <div className={s.blockWrapper}>
        <div className={s.blockFlex}>
          <div className={s.blockImg}>
            <img src={require('./me.jpg')} alt="me" width='200px'/>
          </div>
          <div className={s.blockAbout}>
            <div className={s.blockFlex}>
              Energetic front-end developer looking for the opportunities to grow professionally. Having 2-year
              background in back-end and full-stack development I have a deep understanding of all the software development
              processes and how Agile projects are run. Taking part in the whole software life cycle and permanent
              desire to learn something new made me realize that a work of a front-end developer would help me
              to grow professionally, develop my skills and enjoy the job I am doing every day. Being a part of the
              international teams I developed good communication skills. Respect and a friendly attitude towards
              everyone around are the ground rules of my life.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}