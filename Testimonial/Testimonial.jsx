import React from "react"
import classnames from "classnames"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import examplePicture from "./examplePicture.jpg"


export default function Testimonial({children, fullName, company, className, picture, ...rest}) {
    const allClasses = classnames(className, "testimonial")
    
    return (
        <div className={allClasses} {...rest}>
            <img className="testimonial-img" src={picture ? picture : examplePicture}></img>
            <br></br>
            <div className="testimonial-text">
                <p><BiSolidQuoteAltLeft className="testimonial-icon"/>
                <br></br>
                {children}</p>
                <p className="testimonial-signature">
                <span style={{fontWeight:"bolder"}}>{fullName}</span>
                <br></br>
                <span style={{color:"rgba(255, 255, 255, 0.642)"}}>{company}</span></p>
            </div>
        </div>
    )
}