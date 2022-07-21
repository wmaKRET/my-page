import React from "react"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

import AboutMeItem from "./AboutMeItem"
import aboutMeData from "./aboutMeData"

function AboutMe(){
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const aboutElements = aboutMeData.map(item => (
        <AboutMeItem key={item.id} item={item}/>
    ))
    return (
        <section className="about" id="about">
            <h5>a little bit</h5>
            <h2>About Me</h2>
            <div className="about__container">
                <Slider {...sliderSettings}>
                    {aboutElements}
                </Slider>
            </div>
        </section>
    )
}

export default AboutMe