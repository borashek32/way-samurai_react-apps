import {v1} from "uuid"
import tl from "../../components/blocks/MyApps/tl.jpg";
import todolist from "../../components/blocks/MyApps/todolist.jpg";
import counters from "../../components/blocks/MyApps/counters.jpg";
import socialNetwork from "../../components/blocks/MyApps/social-network.jpg";
import separateBlocks from "../../components/blocks/MyApps/separate-blocks.jpg";
import reactLogo from "../../components/blocks/MySkills/logo192.png";
import reduxLogo from "../../components/blocks/MySkills/redux.png";

export type MainType = {
  aboutMe: AboutMeType
  myApps: MyAppsType
  hireMe: HireMeType
  contact: ContactType
  mySkills: MyAppsType
}

export type AboutMeType = {
  id: "aboutMe"
  name: string
  desc: string
}
export type HireMeType = {
  id: "hireMe"
  name: string
}
export type ContactType = {
  name: string
  id: "contact"
}
export type MyAppType = {
  id: string
  link: string
  header: string
  imgPath: string
  imgAlt: string
  imgStyles: string
  desc: string
}
export type MyAppsType = {
  id: string
  name: string
  apps: MyAppType[]
}


export const initialState: MainType = {
  aboutMe: {
    id: "aboutMe",
    name: "About Me",
    desc: "My name is Baranova Nataly. Energetic front-end developer looking for the opportunities to grow professionally. Having 2-year background in back-end and full-stack development I have a deep understanding of all the software development processes and how Agile projects are run. Taking part in the whole software life cycle and permanent desire to learn something new made me realize that a work of a front-end developer would help meto grow professionally, develop my skills and enjoy the job I am doing every day. Being a part of the international teams I developed good communication skills. Respect and a friendly attitude towardsevery one around are the ground rules of my life."
  },
  myApps: {
    id: "myApps",
    name: "My Projects",
    apps: [
      {
        id: "app-" + v1(),
        link: "/way-samurai_react-apps/telegram",
        header: "Messenger",
        imgPath: tl,
        imgAlt: "messenger",
        imgStyles: "blockCardPicture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?",
      },
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_todolist-thursday/",
        header: "TodoList",
        imgPath: todolist,
        imgAlt: "todolist",
        imgStyles: "blockCardPicture",
        desc: "ToDoList is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management. Made on React + Redux using all the advantages of these tools.",
      },
      {
        id: "app-" + v1(),
        link: "/way-samurai_react-apps/counters",
        header: "Counters",
        imgPath: counters,
        imgAlt: "counters",
        imgStyles: "blockCardPicture",
        desc: "Counters are test projects which (to tell the truth) don't have a lot of practical use. They allow us to do some settings which influence on the way how the counter works. Anyways they are good examples of great opportunities which libraries of React and Redux provide."
      },
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_social-network_ts_old/",
        header: "Social Network",
        imgPath: socialNetwork,
        imgAlt: "social-network",
        imgStyles: "blockCardPicture",
        desc: "Social Network is an online platform that allows people to create an account and communicate with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a new post."
      },
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_hw-autotests",
        header: "Separate Blocks",
        imgPath: separateBlocks,
        imgAlt: "separate-blocks",
        imgStyles: "blockCardPicture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?"
      },
    ]
  },
  hireMe: {
    id: "hireMe",
    name: "Hire Me"
  },
  contact: {
    id: "contact",
    name: "Contact Me"
  },
  mySkills: {
    id: "mySkills",
    name: "My Skills",
    apps: [
      {
        id: v1(),
        link: "https://reactjs.org",
        header: "React",
        imgPath: reactLogo,
        imgAlt: "react",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://redux.js.org/",
        header: "Redux",
        imgPath: reduxLogo,
        imgAlt: "redux",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://www.typescriptlang.org/",
        header: "TypeScript",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtypeScript.d7616c23.svg&w=3840&q=75",
        imgAlt: "typescript",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://www.javascript.com/",
        header: "JavaScript",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FjavaScript.00f974bc.svg&w=3840&q=75",
        imgAlt: "javascript",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://storybook.js.org/",
        header: "StoryBook",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.87872113.svg&w=3840&q=75",
        imgAlt: "storybook",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://html.com/",
        header: "HTML",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FunitTest.ecdada0b.svg&w=3840&q=75",
        imgAlt: "html",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        header: "CSS/SASS",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml.62b58041.svg&w=3840&q=75",
        imgAlt: "css/sass",
        imgStyles: "blockLogo",
        desc: ""
      },
      {
        id: v1(),
        link: "https://reactjs.org/docs/testing.html",
        header: "React Testing",
        imgPath: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FstoryBook.0cbf5baa.svg&w=3840&q=75\"",
        imgAlt: "testing",
        imgStyles: "blockLogo",
        desc: ""
      }
    ]
  }
}

type ActionType = any

export const mainReducer = (state = initialState, action: ActionType): MainType => {
  switch (action.type) {
    default:
      return state
  }
}