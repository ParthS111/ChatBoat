import React from "react"
import { createChatBotMessage } from "react-chatbot-kit";
import BoatAvtar from "./Component/BoatAvtar/BoatAvtar";
import Todos from "./Component/Todos/Todos";

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
    todos:[]
  },
  widgets: [
    {
      // defines the name you will use to reference to this widget in "createChatBotMessage".
      widgetName: 'todos',
      // Function that will be called internally to resolve the widget
      widgetFunc: (props) => <Todos {...props} />,
      // Any props you want the widget to receive on render
      props: {},
      // Any piece of state defined in the state object that you want to pass down to this widget
      mapStateToProps: ['todos'],
    },
  ],
}

export default config