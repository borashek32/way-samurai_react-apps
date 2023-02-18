import React from 'react'
import s from "../Main.module.sass";
// @ts-ignore
import Flip from 'react-reveal/Flip'


type TitleType = {
  name: string
  id: string
}

export const Title = (props: TitleType) => {
  return <Flip><h2 id={props.id} className={s.blockTitle}>{props.name}</h2></Flip>
}