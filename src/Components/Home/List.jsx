import React, { useState, useEffect } from 'react'
import "../css/Royxat.css"
import { NavLink } from 'react-router-dom'
import { RoyxatData } from '../Statistika/Data'
import { BsSearch, BsPersonAdd } from 'react-icons/bs'
import { MdOutlineFormatListNumbered } from 'react-icons/md'

export default function List() {


  const [list, setList] = useState(RoyxatData)

  return (
    <div className='home'>



      {/* Yoshlar daftariga kirtilgan odamlar  */}



      <div className="center-container margin" >
        <div className="center-item">
          <div className="top-list-fillter">
            <div className="input">
              <input type="search" placeholder="Search"></input>
              <BsSearch className="icons_search" />
            </div>
            <div className="center-navbar flex">
              <div className="center-nav flex">
                <p style={{ borderBottom: "2px solid #4E6E81 ",color:"#4E6E81" }}>Yoshlar daftari</p>
                <NavLink to='/Ayollar'>
                  <p >Ayollar daftari</p>
                </NavLink>
                <p>Temir daftar</p>
                <p>Migrant</p>
              </div>
              <div className="center-button flex" >
                <NavLink to='/AddList'>
                  <button className="filter_btn">
                    <i> <BsPersonAdd /></i>
                    Qoshish
                  </button>
                </NavLink>
                <div className="select-fillter">
                  <select name="" id="">
                    <option value="">Barchai</option>
                    <option value="">0-4</option>
                    <option value="">4-18</option>
                    <option value="">18-60</option>
                    <option value="">60+</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="head-container">
              <div className="head-item flex">
                <div className="head-start flex">
                  <i> <MdOutlineFormatListNumbered /></i>
                  <div className="tayoq"></div>
                  <p>FIO</p>
                </div>
                <div className="head-finish flex">
                  <div className="tayoq"></div>
                  <p>Manzil</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>


          <div className="yoshlar-container">
            <div className="yoshlar-item1">
              {list.map((item, index) => {
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

        </div>
      </div>


    </div>

  )
}
