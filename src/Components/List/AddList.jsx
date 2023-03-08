import React from 'react'


export default function AddList() {



    return (

        <div className='adduser'>
            <div className="item-adduser">
                <section>
                    <span>
                        <label htmlFor="ism">Ism</label>
                        <input type="text" id='ism' placeholder='Ism' />
                    </span>
                    <span>
                        <label htmlFor="familiya">Familiya</label>
                        <input type="text" id='familiya' placeholder='Familiya' />
                    </span>
                    <span>
                        <label htmlFor="Tugulgan">Tug'ulgan kun</label>
                        <input type="date" name="" id="Tugulgan" />
                    </span>
                    <span>
                        <label htmlFor="phone">Telefon Raqam</label>
                        <input type="tel" name="" id="phone" placeholder='Telefon Raqam' />
                    </span>
                    <span>
                        <label htmlFor="sektorrxb">Bandligi</label>
                        <select name="" id="sektorrxb" >
                            <option value="1">Bog'cha tarbiyalanovchisi</option>
                            <option value="2">Maktab o'quvchisi</option>
                            <option value="3">Oliy talimda</option>
                            <option value="4">Band ishli</option>
                        </select>
                    </span>
                    <span>
                        <label htmlFor="mahalla">Bandlik joyi nomi (Bog'cha,Maktab,Kollej,Oliy talim)</label>
                        <input type="text" id='mahalla' placeholder='Bandlik joyi nomi' />
                    </span>
                    <p>
                        <label htmlFor="ayol"> Erkak</label>
                        <input type="radio" id='ayol' />
                        <label htmlFor="ayol">Ayol</label>
                        <input type="radio" id='ayol' />
                    </p>
                    <span>
                        <label htmlFor="sektorrxb">Sektor Raxbari</label>
                        <select name="" id="sektorrxb" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </span>

                    <span>
                        <label htmlFor="login">Login</label>
                        <input type="text" id='login' placeholder='Login' />
                    </span>
                    <span>
                        <label htmlFor="parol">Parol</label>
                        <input type="password" id='parol' placeholder='Parol' />
                    </span>
                    <span>
                        <label htmlFor="parolt">Parolni takrorlang</label>
                        <input type="password" id='parolt' placeholder='Parolni takrorlang' />
                    </span>
                    <span className='bottom-button'>
                        <button>Yuborish</button>
                    </span>
                </section>

            </div>

        </div>
    )
}
