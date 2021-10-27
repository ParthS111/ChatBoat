import React from "react"
import { createChatBotMessage } from "react-chatbot-kit";
import BoatAvtar from "./Component/BoatAvtar/BoatAvtar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "Parth",
  customComponents: {

    botAvatar: (props) => <BoatAvtar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
   
  },
  state:{
    movieTitle:["the ring","Loard"]
  }
}

export default config