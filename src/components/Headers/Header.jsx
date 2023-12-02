import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  let [menuOpened, setmenuOpened] = useState(false)

  let getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }
  return (
    <section className='h-wrapper'>
      <div className="flexCenter innerWidth h-container">
        <div className='saglam'>
          <img src="./logo-4.png" alt="logo" width={100} className='imaje' />
          <div className='logo'>
            <p>Saglam</p>
            <p>Gayrimenkul</p>
          </div>
        </div>
        <OutsideClickHandler>
          <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}>
            <a href="">Ana sayfa </a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <button className='button'>
              <a href="">İletişim</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className='menu-icon' onClick={() => setmenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header