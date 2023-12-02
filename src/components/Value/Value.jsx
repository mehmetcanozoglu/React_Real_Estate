import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../util/Acoordion';
import './Value.css'

const Value = () => {
    return (
        <section className='v-wrapper'>
            <div className="v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div> 
                <div className="flexColStart v-right">
                    <span className='orangeText'>Önceligimiz</span>
                    <span className='primaryText'>Size Verdiğimiz Değer</span>
                    <span className='secondaryText'>Sizlere en iyi hizmeti sunarak her zaman yardıma hazırız.
                        İyi bir yaşam ortamının hayatınızı daha iyi hale getirebileceğine inanıyoruz</span>
                    <Accordion
                        className='acoordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className='accordionItem' key={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <div className='flexCenter icon'>{item.icon}
                                                    <span className="primaryText">
                                                        {item.heading}
                                                    </span>
                                                    <div className="flexCenter">
                                                        <MdOutlineArrowDropDown size={20} />
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText detail">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value