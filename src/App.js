import React, { useState } from 'react';
import SimpleForm from './CustomeChatBot/SimpleForm';
import './App.css';
import SimpleChatForm from './FormChatBot/SimpleChatForm';

const App = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
      <>
     
      <div className = "header">
        <h2>My Application!!!</h2>
      </div>
      <div className = "main">
        <div className ="nav">
          <h3>My Navigation</h3>
        </div>
        <div className ="content">
          <div style = {{padding:"20px"}}>
            <h1>Content of my application will go here.....</h1>
            <p>Sample content to fill the gap as much as possible. Sample content to fill the gap as much as possible.
            Sample content to fill the gap as much as possible.Sample content to fill the gap as much as possible.</p>
            <p>More content to fill the available area of the main contect. More content to fill the available area of the main contect.
            More content to fill the available area of the main contect.More content to fill the available area of the main contect. </p>
          </div>
        </div>
      </div>
      <div className = "footer">Footer</div>
      <div className = "bot">
        <div >
          <SimpleForm/>
          {/* <SimpleChatForm/> */}
        </div>      
       
      </div>      
      </>
    )
}

export default App;














// import './App.css';
// import {Chatbot} from "react-chatbot-kit";
// import config from "./config";
// import MessageParser from "./MessageParser";
// import ActionProvider from "./ActionProvider";
// import CustomChatbot from './CustomChatbot';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//        <CustomChatbot/>
//       </header>
//     </div>
//   );
// }

// export default App;
