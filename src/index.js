import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogsData = [
  { id: 1, name: 'Имя1' },
  { id: 2, name: 'Имя2' },
  { id: 3, name: 'Имя3' },
  { id: 4, name: 'Имя4' },
  { id: 5, name: 'Имя5' },
  { id: 6, name: 'Имя6 ' },
  { id: 7, name: 'Имя7 ' },
];

let messagesData = [
  { id: 1, message: 'test message1' },
  { id: 2, message: 'test message2' },
  { id: 3, message: 'test message3' },
  { id: 4, message: 'test message4' },
  { id: 5, message: 'test message5' },
  { id: 6, message: 'test message6' },
];

let posts = [
  { id: 1, message: 'post 1 test message1', likeCount: 11 },
  { id: 2, message: 'post 2 test message2', likeCount: 22 },
  { id: 3, message: 'post 3 test message3', likeCount: 33 },
  { id: 4, message: 'post 4 test message4', likeCount: 44 },
  { id: 5, message: 'post 5 test message5', likeCount: 55 },
  { id: 6, message: 'post 6 test message6', likeCount: 66 },
];


root.render(
  <React.StrictMode> 
    <App dialogsData={dialogsData} messagesData={messagesData} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
