import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className='paddings innerWidth flexCenter f-container'>
            <div className="flexColStart f-left">
                <img src="logo-2.png" alt="" width={150} />
                <span className='secondaryText'>
                    Vizyonumuz tüm insanları
                    onlar için yaşanacak en iyi yer.
                </span>
            </div>
            <div className="flexCenter f-right">
                <span className='primaryText'>Adres</span>
                <span className='secondaryText'>Durantaş mahalle muhtarlıgı</span>
                <div className="flexCenter f-menu">
                <span>Arazi</span>
                <span>Toprak</span>
                <span>Hakkımızda</span>
                <span>İletişim</span>
                </div>
            </div>
        </section>
    )
}

export default Footer