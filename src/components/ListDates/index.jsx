import React, { Fragment, useState } from "react";
import { api } from "../../services/api";
import "./style.scss"

export function ListDates({judgmentDate}) {
    const [listDates, setListDates] = useState([]);

    async function excluir(id){
            
        await api.delete(`judgmentDate/${id}`, {
        headers:{
            'Content-Type':  'application/json',
        }
        })
        .then(function (response) {
            console.log(response);
        });
    }

    return (
        <ul>
            {
                judgmentDate.map((judgmentDate) =>{
                    return(
                        <Fragment key={judgmentDate.id}>
                            <li >
                                <p className="title">
                                    {judgmentDate.sessionName}
                                </p>
                                <div className="division"></div>
                                <p className="date">
                                    {judgmentDate.date}
                                </p>
                                <div className="division"></div>
                                <div className="buttons">
                                    <button className="acessar">Acessar</button>
                                    <button className="excluir" onClick={excluir}>Excluir</button>
                                </div>
                            </li>
                            <div className="line"></div>
                        </Fragment>
                    )
                })
            }
        </ul>
    )
}