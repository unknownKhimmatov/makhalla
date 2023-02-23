import React from 'react'

export default function Auntefikaciya() {
    return (
        <div className='signup'>
            <div className="top-logo">
                <img src="./img/logo.png" alt="" />
            </div>
            <div className="signup-inputs">
                <div className="title">
                    <h3>
                        Kirish
                    </h3>
                </div>
                <div className="inputs">
                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Email' />
                    </span>
                    <span>
                        <label htmlFor="parol">Parol</label>
                        <input type="password" id='parol' placeholder='Parol' />
                    </span>
                    <div className='bottom-signup'>
                        <button>Kirish</button>
                        <p>
                            Sizda akkaunt yo`qmi? <br />
                            <a href='./Registrasiya.jsx'>Ro`yxatdan o`tish</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
