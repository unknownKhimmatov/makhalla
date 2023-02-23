import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
// import AutoFikatsiya from './register/Auntefikaciya'
import Home from './Home/Home'
import Statistika from './Statistika/Statistika'
import Register from './register/Registrasiya'
export default function Main() {

  return (
    <>
      <div className="main">
        <Home />
      </div>
    </>
  )
}
