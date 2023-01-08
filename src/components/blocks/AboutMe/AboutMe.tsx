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
            <img src={require('./me.jpg')} alt="me" width='200px' />
          </div>
          <div className={s.blockAbout}>
            <div className={s.blockFlex}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, consectetur dignissimos eius expedita
              facilis molestias, non, odit quia quibusdam quis sunt tempora veritatis. Ab adipisci amet, aut beatae, culpa
              deserunt dicta ea facilis hic, id in ipsam ipsum maxime perspiciatis quas quia quod sequi unde! Ad enim
              incidunt iste.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}