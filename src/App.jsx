import React from 'react'
import Main from './Components/Main'

import {
    Route, Routes
} from 'react-router-dom'


// css 
import "./Components/css/login.css"
import "./Components/css/home.css"
import "../src/Components/css/statistika.css"

import Statistika from './Components/Statistika/Statistika'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path='/*' element={<Main />} ></Route>
                    <Route path='/Home' element={<Home/>} ></Route>
                    <Route path='/Statistika' element={<Statistika />} ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
