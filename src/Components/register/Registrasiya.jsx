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
                        Ro`yxatdan o`tish
                    </h3>
                </div>
                <div className="inputs">
                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Email' />
                    </span>
                    <span>
                        <label htmlFor="familiya">Familiya</label>
                        <input type="text" id='familiya' placeholder='Familiya' />
                    </span>
                    <span>
                        <label htmlFor="otasi">Otasining Ismi</label>
                        <input type="text" id='otasi' placeholder='Otasining Ismi' />
                    </span>
                    <span>
                        <label htmlFor="parol">Parol</label>
                        <input type="password" id='parol' placeholder='Parol' />
                    </span>
                    <div className='bottom-signup'>
                        <button> Ro`yxatdan o`tish</button>
                        <p>
                            Sizda akkaunt yo`qmi? <br />
                            <a href="">Kirish</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
