import React, {useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter"
import {Messages} from "./components/Messages/Messages"
import {v1} from "uuid"
import {m, messagesLimit} from './state/state'

function App() {
  const [messages, setMessages] = useState(m)

  const sendMessage = (title: string) => {
    if (messages.length < messagesLimit) {
      let newMessage = {id: v1(), title: title};
      let newMessages = [newMessage, ...messages];
      setMessages(newMessages);
    }
  }
  const deleteOneMessage = (id: string) => {
    let newMessages = messages.filter(m => m.id !== id)
    setMessages(newMessages)
  }
  const deleteLastMessage = () => {
    let lastMessage = messages[messages.length - 1]
    let newMessagesArr = messages.filter(m => m.id !== lastMessage.id)
    setMessages(newMessagesArr)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*<Counter counter={0} />*/}
        <Messages
          title={"Telegram"}
          messages={messages}
          callback={sendMessage}
          deleteOneMessage={deleteOneMessage}
          deleteLastMessage={deleteLastMessage}
        />
      </header>
    </div>
  );
}

export default App;
