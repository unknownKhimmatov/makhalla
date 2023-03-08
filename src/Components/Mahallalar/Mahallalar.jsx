import React from 'react'
import { MahallaData } from '../Sektorlar/DataSektor'

export default function Mahallalar() {
    return (
        <div className='mahalla-one'>
            <div className="item-mahalla">
                {
                    MahallaData.map((item, index) => {
                        return (
                            <>
                                <div className="card-mahalla-one">
                                    <span>
                                        Mahalla nomi | {item.name}
                                    </span>
                                    <span>
                                        Mahalla raisi |  {item.general}
                                    </span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
