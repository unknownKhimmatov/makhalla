import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Home'
import Statistics from './Statistics'
import Royxat from './List'
import Qoshish from './AddUser'
import Notifikation from '../profile/Notifikation'
import Ayollar from '../List/Ayollar'
import List from './List'
import { AiOutlineHome, AiOutlineOrderedList } from 'react-icons/ai'
import { GiChart } from 'react-icons/gi'
import { MdOutlineDashboard } from 'react-icons/md'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { BsPersonAdd } from 'react-icons/bs'

// css 
import '../css/Dashboard.css'
import Profile from '../profile/ProfileDash'
import Sektorlar from '../Sektorlar/Sektorlar'
import AddList from '../List/AddList'
import Mahallalar from '../Mahallalar/Mahallalar'



export default function Dashboard() {
    const [show, setReviev] = useState(false)
    const HandlerClick = () => {
        setReviev(!show)
    }
    return (
        <>
            <main>
                <section className="container">
                    <div className="dashboard" style={{ width: show !== true ? "20%" : "5%" }}>
                        <div className="item-dashboard">
                            <div className="show-reviev">
                                <i onClick={HandlerClick} style={{ rotate: show !== true ? "0deg" : "180deg" }} ><BiLeftArrowAlt /></i>
                            </div>
                            <NavLink className='brand-main' to='/'>
                                <div className="brand">
                                    <img src="./img/mahalla.png" style={{ display: show !== true ? "block" : "none" }} alt="" />
                                </div>

                            </NavLink>
                            <nav>
                                <ul>
                                    <NavLink to='/'>
                                        <li style={{ justifyContent: show !== true ? "start" : "center", fontSize: show !== true ? "1.5rem" : "2rem" }}>
                                            <AiOutlineHome />
                                            <span style={{ display: show !== true ? "block" : "none" }}>
                                                Asosiy
                                            </span>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/Statistics'>
                                        <li style={{ justifyContent: show !== true ? "start" : "center", fontSize: show !== true ? "1.5rem" : "2rem" }}>
                                            <GiChart />
                                            <span style={{ display: show !== true ? "block" : "none" }}>
                                                Statistika
                                            </span>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/Royxat'>
                                        <li style={{ justifyContent: show !== true ? "start" : "center", fontSize: show !== true ? "1.5rem" : "2rem" }}>
                                            <AiOutlineOrderedList />
                                            <span style={{ display: show !== true ? "block" : "none" }}>
                                                Ro`yxat
                                            </span>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/Qoshish'>
                                        <li style={{ justifyContent: show !== true ? "start" : "center", fontSize: show !== true ? "1.5rem" : "2rem" }}>
                                            <BsPersonAdd />
                                            <span style={{ display: show !== true ? "block" : "none" }}>
                                                Qo`shish
                                            </span>
                                        </li>
                                    </NavLink>
                                    <NavLink to='/Sektorlar'>
                                        <li style={{ justifyContent: show !== true ? "start" : "center", fontSize: show !== true ? "1.5rem" : "2rem" }}>
                                            <MdOutlineDashboard />
                                            <span style={{ display: show !== true ? "block" : "none" }}>
                                                Sektorlar
                                            </span>
                                        </li>
                                    </NavLink>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="main-information" style={{ width: show !== true ? "76%" : "91.3%" }}>
                        <Routes>
                            <Route path='/' element={<Home />} ></Route>
                            <Route path='/Statistics' element={<Statistics />}  ></Route>
                            <Route path='/Royxat' element={<Royxat />}  ></Route>
                            <Route path='/Qoshish' element={<Qoshish />} ></Route>
                            <Route path='/Sektorlar' element={<Sektorlar />} ></Route>
                            <Route path='/Notifikation' element={<Notifikation />} ></Route>

                            {/* list  */}
                            <Route path='/List' element={<List />} ></Route>
                            <Route path='/Ayollar' element={<Ayollar />} ></Route>
                            <Route path='/AddList' element={<AddList />}  > </Route>

                            {/* mahallalar  */}

                            <Route path='/Mahallalar' element={<Mahallalar />}  ></Route>

                        </Routes>
                    </div>
                    <div className="profile-main">
                        <Profile />
                    </div>
                </section>
            </main>
        </>
    )
}
