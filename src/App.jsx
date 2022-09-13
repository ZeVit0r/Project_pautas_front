import React from "react";


import Modal from 'react-modal';

import { ScreenJudgmentDates } from "./pages/ScreenJudgmentDates";
import { api } from "./services/api";
import "./styles/GlobalStyles.scss"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '350px',
    width: '350px',
    padding: '0px'
  },
  
};

function App() {
  const [modalIsOpenLogin, setIsOpenLogin] = React.useState(false);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalIsOpenCadastro, setIsOpenCadastro] = React.useState(false);

  
  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  function openModalCadastro() {
    setIsOpenCadastro(true);
  }

  function closeModalCadastro() {
    setIsOpenCadastro(false);
  }

  function login(){
    const user = {
      username: username,
      password: password
    }

    api.post('/login', user, {
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setName('');
    setPassword('');
    setUsername('');
  }

  async function cadastrar() {
    const user = {
      name: name,
      username: username,
      password: password
      
    }

    await api.post('users', user, {
      headers:{
        'Content-Type':  'application/json',
      }
    })
      .then(function (response) {
        console.log(response);
      });
    
    setIsOpenCadastro(false);
    setName('');
    setPassword('');
    setUsername('');
  }

  return (
    <>
      <div className="container-button">
        <button className="button-login" onClick={openModalLogin}>Login</button>
        <button className="button-cadastro" onClick={openModalCadastro}>Cadastro</button>

      </div>
      <ScreenJudgmentDates/>

      <Modal
          ariaHideApp={false}
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          style={customStyles}
          contentLabel="Example Modal"
      >
          <div className="head-modal">
              <button onClick={closeModalLogin} className='button-close'>Sair</button>
          </div>
          <div className="content-modal">
              <form className="form-date">
                  <label htmlFor="">username</label>
                  <input onChange={e => setUsername(e.target.value)} />
                  <label htmlFor=""  >password</label>
                  <input onChange={e => setPassword(e.target.value)} />
              </form>
              <button className="button-register" onClick={login} >Entrar</button>

          </div>
          
      </Modal>

      <Modal
          ariaHideApp={false}
          isOpen={modalIsOpenCadastro}
          onRequestClose={closeModalCadastro}
          style={customStyles}
          contentLabel="Example Modal"
      >
          <div className="head-modal">
              <button onClick={closeModalCadastro} className='button-close'>Sair</button>
          </div>
          <div className="content-modal">
              <form className="form-date">
                  <label htmlFor="">Your name</label>
                  <input onChange={e => setName(e.target.value)} />
                  <label htmlFor="" >username</label>
                  <input onChange={e => setUsername(e.target.value)} />
                  <label htmlFor="" >password</label>
                  <input onChange={e => setPassword(e.target.value)} type="password" name="password" required />
              </form>
              <button className="button-register" onClick={cadastrar}>Cadastrar</button>

          </div>
          
      </Modal>
    </>
  );
}

export default App;
