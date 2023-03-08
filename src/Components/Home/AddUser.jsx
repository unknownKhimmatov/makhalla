import React from 'react'


export default function AddUser() {



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
            <label htmlFor="sektorrxb">Sektor Raqami</label>
            <select name="" id="sektorrxb" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
          <span>
            <label htmlFor="mahalla">Mahalla Nomi</label>
            <input type="text" id='mahalla' placeholder='Mahalla Nomi' />
          </span>
          <span>
            <label htmlFor="lavozim"> Lavozimi</label>
            <select name="" id="lavozim">
              <option value="1">Xokim</option>
              <option value="2">Sektor Raxbari</option>
              <option value="3">Mahalla Raisi</option>
            </select>
          </span>
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
