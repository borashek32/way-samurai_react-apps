import React from 'react'
import s from "../Main.module.sass";
// @ts-ignore
import Roll from 'react-reveal/Roll'


type TitleType = {
  name: string
}

export const Title = (props: TitleType) => {
  return <Roll><h2 className={s.blockTitle}>{props.name}</h2></Roll>
}