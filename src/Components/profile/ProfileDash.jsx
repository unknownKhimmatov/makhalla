import React from 'react'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'
import '../css/Profile.css'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { useState } from 'react'

import { BiLogOut } from 'react-icons/bi'
import Notifikation from './Notifikation'
import { Notfikation } from '../Statistika/Data'
export default function Profile() {

  const [show, setshow] = useState(false)
  const HandlerClick = () => {
    setshow(!show)
  }

  const navigate = useNavigate()
  const HandlerNavigate = () => {
    navigate("/Notifikation ")
  }

  return (
    <>
      <div className='profile'>
        <div className="img">
          <img src="./img/profile.png" onClick={HandlerClick} alt="" />
        </div>
        <i onClick={HandlerNavigate} ><HiOutlineBellAlert /> {Notfikation.length} </i>

        <div className="modal-profil" style={{
          display: show !== true ? "none" : "block"
        }}>
          <span> <i> <BiLogOut /> </i> <p>Chiqish</p></span>
        </div>
      </div>
    </>
  )
}
