import React, { useState } from "react";
import "./style.scss"

export function ListDates() {
    const [listDates, setListDates] = useState([]);

    return (
        <ul>

            <li>
                <p className="title">
                    2 turma
                </p>
                <div className="division"></div>
                <p className="date">
                    25/12/2022
                </p>
                <div className="division"></div>
                <button>Acessar</button>
            </li>
            <div className="line"></div>
            <li>
                <p className="title">
                    2 turma
                </p>
                <div className="division"></div>
                <p className="date">
                    25/12/2022
                </p>
                <div className="division"></div>
                <button>Acessar</button>
            </li>
            <div className="line"></div><li>
                <p className="title">
                    2 turma
                </p>
                <div className="division"></div>
                <p className="date">
                    25/12/2022
                </p>
                <div className="division"></div>
                <button>Acessar</button>
            </li>
            <div className="line"></div>
            <li>
                <p className="title">
                    2 turma
                </p>
                <div className="division"></div>
                <p className="date">
                    25/12/2022
                </p>
                <div className="division"></div>
                <button>Acessar</button>
            </li>
            <div className="line"></div>
        </ul>
    )
}