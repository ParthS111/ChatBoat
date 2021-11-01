import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';


class SimpleChatForm extends Component {
  render() {
    return (
      <ChatBot 
      headerTitle={"parth"}
      placeholder="Please write here..."
      // hideBotAvatar={true}
      floating={true}
      enableSmoothScroll={true}
      enableMobileAutoFocus={true}
      userAvata={"https://image.shutterstock.com/image-vector/letter-s-sync-logo-design-600w-500701153.jpg"}
      recognitionEnable={true} // speach command is enable
      speechSynthesis={{ enable: true, lang: 'en' }} // said what wriiten in chatboat question
        steps={[
          {
            id:'q-firstname', 
            message:'What is your first name?', 
            trigger:'firstname',
          },
          {
            id:'firstname', 
            user:true,
            trigger:'q-lastname'
          },
          {
            id:'q-lastname', 
            message:'What is your last name?', 
            trigger:'lastname',
          },
          {
            id:'lastname', 
            user:true,
            trigger:'q-email'
          },
          {
            id:'q-email', 
            message:'Finally. what is you email?', 
            trigger:'email',
          },
          {
            id:'email', 
            user:true,
            trigger:'q-submit'
          },
          {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
          },
          {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
          },
          {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
               },
                    {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
      />
        
        );
      }

    }

    export default SimpleChatForm;