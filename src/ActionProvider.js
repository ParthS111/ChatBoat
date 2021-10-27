class ActionProvider {
  constructor(createChatBotMessage, state) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = state;
  }
  
  // greet() {
  //   const greetingMessage = this.createChatBotMessage("Hi, friend.")
  //   this.updateChatbotState(greetingMessage)
  // }
  
  helloWorldHandler=()=>{
    const message=this.createChatBotMessage("Hello,i am self aware.Lucky!")
    this.setChatbotState(message)
  }
todosHandler=()=>{
    const message=this.createChatBotMessage("Sure here is your todos",{
      widget:"todos"
    })
    this.setChatbotState(message)
  }
  
  setChatbotState(message) {
 
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     
        
       this.setState(state => ({
          ...state, messages: [...state.messages, message]
        }))
      }
//   updateChatbotState(message) {
 
// // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
 
    
//    this.setState(prevState => ({
//     	...prevState, messages: [...prevState.messages, message]
//     }))
//   }
  
}

export default ActionProvider