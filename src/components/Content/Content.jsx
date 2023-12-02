import React from 'react'
import './Content.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2"


const Content = () => {
    return (
        <section className='c-wrapper'>
            {/* <BsFillChatDotsFill />
            <HiChatBubbleBottomCenter /> */}
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className='orangeText'>İletişim </span>
                    <span className='primaryText'>Bizimle İletişime Geçmek Kolay</span>
                    <span className='secondaryText'>
                        Sizlere en iyi hizmeti sunarak her zaman yardıma hazırız. İyi bir yaşam <br />
                         ortamının hayatınızı daha iyi hale getirebileceğine inanıyoruz</span>
                    <div className='flexColStart contactModes'>
                        <div className="flexCenter row">
                            <div className="flexColCenter mode">
                                <div className="flexCenter">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart details'>
                                        <span className='primaryText'>Numara</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Hemen ara</div>
                            </div>
                            <div className=".flexColCenter mode">
                                <div className="flexCenter">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart details'>
                                        <span className='primaryText'>Chat </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                        <div className="flexCenter row">
                            <div className=".flexColCenter mode">
                                <div className="flexCenter">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart details'>
                                        <span className='primaryText'>Video</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Şimdi ara</div>
                            </div>
                            <div className=".flexColCenter mode">
                                <div className="flexCenter">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart details'>
                                        <span className='primaryText'>Mesaj </span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Mesaj at</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content