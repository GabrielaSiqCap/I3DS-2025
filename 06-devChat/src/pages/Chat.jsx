import React, { useEffect, useRef, useState } from 'react';

const Chat = (props) => {

const [messageList, setMessageList] = useState([]);
const messageRef = useRef();
const bottonRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });
    return () =>  props.socket.off("receive_message");
    }, [props.socket]);

    useEffect(() => {
      bottonRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);
  
    const handleSubmit = () => {
      


      const message = messageRef.current.value;
      if (!message.trim()) return;

      props.socket.emit("message", message);

    messageRef.current.value = "";
    messageRef.current.focus();
    //quando clicar em enviar voltar a ficar vazio a barra de digitação
    };

  return (
    <div 
    id='chat-container' 
    // style={{width: '400px', height: '600px'}}
    className='m-4 bg-pastel-yellow-100 rounded-4 p-3 d-flex flex-column'
    >


      <div 
      id='chat-body' 
      className='d-flex flex-column gap-3 overflow-y-hidden h-100 '
      >
        {messageList.map((message, index) => (
          <div 
          className={`${
            message.authorId === props.socket.id
              ? "align-self-end ms-5 bg-dark"
              : "align-self-start me-5 bg-dark-subtle text-dark"
          } rounded-3 p-2 `}
          key={index}>
              <div 
              className='fw-bold' 
              id='message-author'>{message.author}
              </div>
              <div 
              id='message-text'>{message.text}
              </div>
          </div> 
          //As mensagens vão ser mapeadas e eu trago dentro dela o massage e o index(local da mensagem). Cada uma vai gerar uma div e terá uma chave única. 
        ))}
<div ref={bottonRef}/> 
      </div>

{/* Delimita a parte de baixo das mensagens */}
      <div 
      id='chat-footer' 
      className='input-group'>
        <input 
        ref={messageRef}
        autoFocus
        type="text"                   
        className='form-control bg-vibrant-blue-200  fst-italic text-vibrant-blue-900' 
        placeholder='Digite sua mensagem' 
        onKeyDown={(e) => e.key == "Enter" && handleSubmit
          ()}
          />
        <button 
        className='btn btn btn-outline-warning m-0 input-group-text' 
        id='basic-addon1' 
        onClick={() => handleSubmit()}
        >
        <i className='bi bi-send-fill'></i>
        </button>
      </div>

    </div>
  )
}

export default Chat
