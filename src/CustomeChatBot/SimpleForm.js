import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';
import { ThemeProvider } from 'styled-components';
// import Logo from '../assets/img/logo.png'
// import Step from './Step.js'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
          steps={Step}
        />
      </ThemeProvider>
    );
  }
}
const Step = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! What is your gender?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Male', trigger: '5' },
      { value: 'female', label: 'Female', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'How old are you?',
    validator: (value) => {
      if (isNaN(value)) {
        return "value should be number"
      }
      return true
    },
    trigger: 'age',
  },
  {
    id: 'age',
    user: true,
    trigger: '7',
    validator: (value) => {
      if (isNaN(value)) {
        return 'value must be a number';
      } else if (value < 0) {
        return 'value must be positive';
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: '7',
    message: 'Great! Check out your summary',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Review />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'hungry' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Name', trigger: 'update-name' },
      { value: 'gender', label: 'Gender', trigger: 'update-gender' },
      { value: 'age', label: 'Age', trigger: 'update-age' },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '7',
  },
  {
    id: 'update-gender',
    update: 'gender',
    trigger: '7',
  },
  {
    id: 'update-age',
    update: 'age',
    trigger: '7',
  },
  {
    id: 'hungry',
    message: 'You are hungry?',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 'Yes', label: 'Yes', trigger: '9' },
      { value: 'No', label: 'No', trigger: 'help' },      
    ],    
  },
  {
    id: 'help',
    message: 'Need any help',
    trigger: '10',
  },
  {
    id: '9',
    message: 'What you buy?',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    validator: (value) => {
      if (value.search("pizza" || "Burger")) {
        return 'We are not selling other product';
      }
      return true;
    },
    trigger: '11',
  },
  {
    id: '11',
    message: 'As there any food you buy?',
    trigger: '12'
  },
  {
    id: '12',
    options: [
      { value: 'Yes', label: 'Yes', trigger: '9' },
      { value: 'No', label: 'No', trigger: 'end-message' },      
    ], 
  }, 
  {
    id: 'end-message',
    message: 'Thanks! Your data was submitted successfully!',
    end: true,
  },
]
export default SimpleForm;