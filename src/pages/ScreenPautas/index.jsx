import React from "react";
import { ListDates } from "../../components/ListDates";
import './style.scss'

export function ScreenPautas() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="head">
                        <p className="title">Pauta - 25/12/2022</p>
                        <button className="new-day">Adicionar Processo</button>
                    </div>
                    <div className="content">
                        <ListDates></ListDates>
                    </div>
                </div>
            </div>

        </>
    )
}