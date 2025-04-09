import './App.css'
import './scss/Styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Join from './pages/Join'
import Chat from './pages/Chat'
import { useState } from 'react'

function App() {

  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className='m-0 p-0 vh-100 d-flex justify-content-center align-items-center bg-vibrant-blue-900 text-light '>  
      {chatVisibility ? <Chat socket={socket}/> : <Join setSocket={setSocket} visibility={setChatVisibility}/>} 
        {/* chatVisibility ? : if (chatVisibility == true) {<Chat/>}*/}
    </div>
  )
}

export default App
