import React from 'react'
import './Hero.css'
import { MdLocationPin } from "react-icons/md";
import CountUp from "react-countup"
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle">
                        </div>
                        <motion.h1
                            initial={{ y: "6rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type:"spring"
                            }}
                        >
                            Değerli müşterilerimize <br />
                            kaliteli hizmeti sunmaktan  <br />  gurur duyuyoruz.
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des ">
                        <span className='secondaryText'>
                            Uzman Ekip ve Bireysel Yaklaşım
                        </span>
                        <span className='secondaryText'>
                            Gaziantep’te Emlak Deneyiminde Lider Adres
                        </span>
                    </div>

                    <div className='flexCenter search-bar'>
                        <MdLocationPin color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={900} end={1500} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Yıllık satış </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1000} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Mutlu Müşteri sayısı </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Kazanılan ödüller </span>
                        </div>
                    </div>

                </div>
                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x:0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                     className='image-container'>
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero