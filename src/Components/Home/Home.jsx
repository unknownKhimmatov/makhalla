import React from 'react'
import "../css/home.css"


export default function Home() {
    return (
        <div className='home'>
            <div className="item-home">
                <div className="mahalla-information">
                    <div className="card-mahalla">
                        <div className="title">
                            <h2>
                                Mahalla haqida malumot
                            </h2>
                        </div>
                        <div className="cards-information-mahalla">
                            <ul>
                                <li>
                                    Mahalla nomi
                                </li>
                                <li>
                                    Manzili
                                </li>
                                <li>
                                    Telefon raqami
                                </li>
                                <li>
                                    Mahalla raisi
                                </li>
                                <li>
                                    Tashkil topgan yili
                                </li>
                            </ul>
                            <div className="border"></div>
                            <ul>
                                <li>
                                    Nogohon
                                </li>
                                <li>
                                    Jomboy tuman Nogohon mfy
                                </li>
                                <li>
                                    +998999999999
                                </li>
                                <li>
                                    Shodiyor Ximmatov
                                </li>
                                <li>
                                    1900
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-mahalla">
                        <div className="title">
                            <h2>
                                Mahalla aholisi haqida malumot
                            </h2>
                        </div>
                        <div className="cards-information-mahalla">
                            <ul>
                                <li>
                                    Jami aholi soni:
                                </li>
                                <li>
                                    Erkaklar
                                </li>
                                <li>
                                    Ayollar
                                </li>
                                <li>
                                    Honadonlar soni
                                </li>
                                <li>
                                    Oilalar soni
                                </li>
                            </ul>
                            <div className="border"></div>
                            <ul>
                                <li>
                                    7687
                                </li>
                                <li>
                                    4300
                                </li>
                                <li>
                                    3387
                                </li>
                                <li>
                                    687
                                </li>
                                <li>
                                    1008
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
