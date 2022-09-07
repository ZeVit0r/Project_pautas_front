import React from "react";

import { ListDates } from "../../components/ListDates";

import Modal from 'react-modal';

import './style.scss'
import { api } from "../../services/api";

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

export function ScreenJudgmentDates() {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [date, setDate] = React.useState('');
    const [sessionName, setSessionName] = React.useState('');
    const [judgmentDate, setJudgmentDate] = React.useState('');

    function openModal() {
    setIsOpen(true);
    }

    function closeModal() {
    setIsOpen(false);
    }

    React.useEffect(() => {
            api.get('/judgmentDate').then(response => {
                setJudgmentDate(response.data)
            })
            console.log(judgmentDate);
    },[])

    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="head">
                        <p className="title">Datas de julgamento</p>
                        <button className="new-day" onClick={openModal}>Adicionar Data</button>
                    </div>
                    <div className="content">
                        <ListDates></ListDates>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="head-modal">
                    <button onClick={closeModal} className='button-close'>Sair</button>
                </div>
                <div className="content-modal">
                    <form className="form-date">
                        <label htmlFor="">Nome da Sessão</label>
                        <input onChange={(e)=>{setSessionName(e)}}/>
                        <label htmlFor="">Data</label>
                        <input onChange={(e)=>{setDate(e)}}/>
                    </form>
                    <button className="button-register">Cadastrar</button>

                </div>
                
            </Modal>

        </>
    )
}