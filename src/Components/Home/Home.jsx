import React from 'react'
import "../css/home.css"


export default function Home() {
    return (
        <div className='home'>
            <div className="item-home">
                <div className="mahalla-information">
                    <div className="card">
                        <div className="title">
                            <h2>
                                Mahalla haqida malumot
                            </h2>
                        </div>
                        <div className="card-information-mahalla">
                            <ul>
                                <li>
                                    Mahalla nomi
                                </li>
                                <div></div>
                                <li>
                                    Nogohon
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
