import tl from "../components/blocks/MyApps/tl.jpg";
import todolist from "../components/blocks/MyApps/todolist.jpg";
import counters from "../components/blocks/MyApps/counters.jpg";
import socialNetwork from "../components/blocks/MyApps/social-network.jpg";
import separateBlocks from "../components/blocks/MyApps/separate-blocks.jpg";


export const state = {
  aboutMe: {
    desc: "My name is Baranova Nataly. Energetic front-end developer looking for the opportunities to grow professionally. Having 2-year background in back-end and full-stack development I have a deep understanding of all the software development processes and how Agile projects are run. Taking part in the whole software life cycle and permanent desire to learn something new made me realize that a work of a front-end developer would help meto grow professionally, develop my skills and enjoy the job I am doing every day. Being a part of the international teams I developed good communication skills. Respect and a friendly attitude towardsevery one around are the ground rules of my life."
  },
  myApps: [
    {
      link: "/way-samurai_react-apps/telegram",
      header: "Messenger",
      imgPath: {tl},
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?",
    },
    {
      link: "https://borashek32.github.io/way-samurai_todolist-thursday/",
      header: "TodoList",
      imgPath: {todolist},
      desc: "ToDoList is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management. Made on React + Redux using all the advantages of these tools.",
    },
    {
      link: "/way-samurai_react-apps/counters",
      header: "Counters",
      imgPath: {counters},
      desc: "Counters are test projects which (to tell the truth) don't have a lot of practical use. They allow us to do some settings which influence on the way how the counter works. Anyways they are good examples of great opportunities which libraries of React and Redux provide."
    },
    {
      link: "https://borashek32.github.io/way-samurai_social-network_ts_old/",
      header: "Social Network",
      imgPath: {socialNetwork},
      desc: "Social Network is an online platform that allows people to create an account and communicate with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a new post."
    },
    {
      link: "https://borashek32.github.io/way-samurai_hw-autotests",
      header: "Separate Blocks",
      imgPath: {separateBlocks},
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et ex facere id illo, nulla quo recusandae sit voluptatem?"
    },
  ]
}