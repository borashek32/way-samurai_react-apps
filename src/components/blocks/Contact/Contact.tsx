import s from '../Main.module.sass'
import * as React from "react"
import {Title} from "../utils/Title"
import {ButtonDefault} from "../utils/ButtonDefault"
import {useSelector} from "react-redux"
import {AppRootStateType} from "../../../store/store"
import {ContactType} from "../../../store/main/main-reducer"
import {InputDefault} from "../utils/InputDefault"


export const Contact = () => {

  const contact = useSelector<AppRootStateType, ContactType>(state => state.main.contact)

  return (
    <div id={contact.id} className={s.block}>
      <Title name={contact.name}/>
      <form action="#" className={s.blockWrapper}>
        <div className={s.formSize}>
          <InputDefault placeholder={"Enter Your Name"} />
          <InputDefault placeholder={"Enter Your Email"} />
          <InputDefault placeholder={"Enter Your Message"} />
          <ButtonDefault name={"Send message"} type={"submit"}/>
        </div>
      </form>
    </div>
  )
}