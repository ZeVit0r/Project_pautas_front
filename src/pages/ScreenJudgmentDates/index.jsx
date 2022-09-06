import React from "react";
import { ListDates } from "../../components/ListDates";
import './style.scss'

export function ScreenJudgmentDates() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="head">
                        <p className="title">Datas de julgamento</p>
                        <button className="new-day">Adicionar Data</button>
                    </div>
                    <div className="content">
                        <ListDates></ListDates>
                    </div>
                </div>
            </div>

        </>
    )
}