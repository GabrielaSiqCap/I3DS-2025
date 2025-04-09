import React, { useRef } from 'react'
import io from 'socket.io-client';
import '../scss/Styles.scss';
import Logo from '../img//dev (2).png';

const Join = (props) => {

  //Hooks
  const usernameRef = useRef();

  const handleSubmit = async() => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;//Se o user não for mais que 3 caracteres, mostra mensagem de alerta
    }

    //modificar item para quando não tiver cnsexao ele nao logar

    //Criando a conexão com servidor socket
    const servidorSocket = await io.connect("http://192.168.0.111:3001");
    servidorSocket.emit("set_username", username);

    //abrindo a página de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
<div className="text-center">

      <img src={Logo} className='logo object-fit-cover' />

      <div
        id="join-box"
        className="mt-4 bg-pastel-yellow-100 rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3 fst-italic escrita text-vibrant-blue-900"
      >
        <h3 className='escrita'>Bem-vindo ao devChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="nomeUsuario"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit
              ()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2 bg-vibrant-blue-200 escrita"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Join
