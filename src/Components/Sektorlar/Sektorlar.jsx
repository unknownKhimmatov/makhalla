import React from 'react'
import "../css/Sektorlar.css"
import { SektorData } from './DataSektor'
import { Routes, Route, NavLink } from 'react-router-dom'


export default function Sektorlar() {
  return (
    <div className='sektorlar'>
      <div className="item-sektorlar">
        <div className="title-sektorlar">
          <h2>
            Sektorlar
          </h2>
        </div>
        <NavLink to='/Mahallalar' className='cards-sektorlar'>
          {
            SektorData.map((item, index) => {
              return (
                <>
                  <div className="card-sektor" key={index}>
                    <ul>
                      <li>
                        {item.name}
                      </li>
                      <li>
                        Aholi soni {item.aholisi}
                      </li>
                      <li>
                        {item.general}
                      </li>
                    </ul>
                  </div>
                </>
              )
            })
          }
        </NavLink>
      </div>
    </div>
  )
}
