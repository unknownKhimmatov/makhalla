import React from 'react'
import { data } from './Data'
export default function QoshimchaStat() {
  return (
    <div className='QoshimchaStat'>
      <div className="item-qoshimcha">
        <div className="card-stat">
          <h1>
            {data.length * 123}
          </h1>
          <span>
            Ishsizlar soni
          </span>
        </div>
        <div className="card-stat">
          <h1>
            {data.length * 160}
          </h1>
          <span>
            Nogironlar  soni
          </span>
        </div>
        <div className="card-stat">
          <h1>
            {data.length * 235}
          </h1>
          <span>
            Migrantlar soni
          </span>
        </div>
      </div>
    </div>
  )
}
