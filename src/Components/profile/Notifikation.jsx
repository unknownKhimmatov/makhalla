import React from 'react'
import { Notfikation } from '../Statistika/Data'
export default function Notifikation() {
    return (
        <div className='notifikation'>
            <div className="item-notifikation">
                <div className="title-notif">
                    <h3>
                        Bildirishnomalar
                    </h3>
                </div>
                <div className="cards-notif">
                    <div className="cards-scroll">
                        {
                            Notfikation.map((item, index) => {
                                return (
                                    <>
                                        <div className="card-notif">
                                            <div className="massage-id">
                                                <span>
                                                    {item.id}
                                                </span>
                                            </div>
                                            <div className="massage-information">
                                                <h4>
                                                    {item.name}
                                                </h4>
                                                <div className="age">
                                                    yoshi   {item.age}
                                                </div>
                                                <div className="massage-respons">
                                                    {item.massage}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
