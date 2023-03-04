import React from 'react'
import QoshimchaStat from '../Statistika/QoshimchaStat'
import StatistikaChart from './StatistikaChart'
export default function Statistics() {
  return (
    <div className='statistika-container'>
      <div className="item-statistika">
        <div className="chart">
          <StatistikaChart />
        </div>
        <div className="qoshimcha-statistika">
          <QoshimchaStat />
        </div>
      </div>
    </div>
  )
}
