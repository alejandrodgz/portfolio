import React from "react";
import Portrait from "../../style/pictures/round_photo.png"
import Linkedin from "../../style/pictures/linkedin.png"
import Whatsapp from "../../style/pictures/whatsapp.png"
import Github from "../../style/pictures/github.png"



const info = () => {



    return(
        <>
        <div className="contact-section">
         <img src={Portrait} alt="portrait" />
         <h1>Contact Details</h1>
         <p>Email: alejandro_garciaz13@outlook.com  <br/>Mobile: +57 305 869 03 85</p>
         <div className="social-icons">
            <a href="https://www.linkedin.com/in/daniel-garcia-aa987b233/"><img src={Linkedin} alt="linkedin"/></a>
            <a href="https://wa.me/+573058690385"><img src={Whatsapp} style={{maxWidth:"100px"}} alt="whatsapp"/></a>
            <a href="https://github.com/alejandrodgz"><img src={Github} alt="github"/></a>
         </div>
         <br/>
         <br/>
         </div>
        </>
    )
}

export default info;