
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useState,useEffect } from 'react'
import Pusher from "pusher-js"
import axios from './axios.js'


function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then(response=>{
      setMessages(response.data);
    })
  },[])


  useEffect(()=>{
    const pusher = new Pusher('459370ae04a9f44d93ef', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('message');
    channel.bind('inserted', function(data) {
      
      setMessages([...messages,data])
    });
    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    };
    
  },[messages])
  console.log(messages);

  return (
    <div className='app'>
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  )
}

export default App

