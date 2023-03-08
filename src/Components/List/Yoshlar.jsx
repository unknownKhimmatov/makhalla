import React, { useState } from 'react'
import { RoyxatData } from '../Statistika/Data'
export default function Yoshlar() {



    return (
        <>
            <div className="yoshlar-container">
                <div className="yoshlar-item1">
                    {RoyxatData.map((item, index) => {
                        return (
                            <div className="yoshlar-box flex" >
                                <div className="yoshlar-start flex">
                                    <strong className="id">{item.id}</strong>
                                    <div className="fshi-list">
                                        <p >{item.familiya} </p>
                                        <p>{item.name1} </p>
                                        <p>{item.ochistva} </p>
                                    </div>
                                </div>
                                <div className="yoshlar-finish flex">
                                    <p>{item.mahalla} mfy </p>
                                    <p>{item.qishloq} qishlog`i </p>
                                    <p>{item.uynomer}-uy </p>
                                </div>
                                <div className="none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    )
}
