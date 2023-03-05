import React from 'react'
import "../css/Royxat.css"

import { FiFilter } from 'react-icons/fi'

export default function List() {
  return (
    <div className='royxat'>
      <div className="item-royxat">
        <div className="top-list-fillter">
          <input type="search" />
          <div className="fillter">
            <span>
              <p>Filter</p> <FiFilter />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
