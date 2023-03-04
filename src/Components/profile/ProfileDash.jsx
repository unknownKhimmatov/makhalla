import React from 'react'
import '../css/Profile.css'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { useState } from 'react'

import { BiLogOut } from 'react-icons/bi'

export default function Profile() {

  const [show, setshow] = useState(false)
  const HandlerClick = () => {
    setshow(!show)
  }

  return (
    <div className='profile'>
      <div className="img">
        <img src="./img/profile.png" onClick={HandlerClick} alt="" />
      </div>
      <i><HiOutlineBellAlert /></i>
      <div className="modal-profil" style={{
        display: show !== true ? "none" : "block"
      }}>
        <span> <i> <BiLogOut /> </i> <p>Chiqish</p></span>
      </div>
    </div>
  )
}
