import React from "react"

import Me from "../../assets/me.png"
import MeSport from "../../assets/me_sport.JPG"
import MeHitchhiking from "../../assets/me_hitchhiking.jpg"

function AboutMeItem({ item }){
    function whichImg(pictureName) {
        switch (pictureName) {
            case "me":
                return Me
            case "me_sport":
                return MeSport
            case "me_hitchhiking":
                return MeHitchhiking
            default:
                return null
        }
    }

    return (
        <div className="about__item">
            <img className="about__item-img" src={whichImg(item.img)} alt="me"/>
            <div className="about__item-text">
                <p>{item.text}</p>
            </div>
        </div>
    )
}

export default AboutMeItem