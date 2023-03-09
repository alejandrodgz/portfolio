import React from "react";
import NavbarPage from "../Navbar";
import PresentationDiv from "./presentation";
import CardHome from "./cardHome"
import Footer from "../footer";
import LenguageBar from "./Lenguages";

const ContentHome = (props)=>{



    return(<>
        <NavbarPage />
        <br/>  
        <PresentationDiv />
        <CardHome />
        <LenguageBar />
        <Footer />
        </>
    )
}

export default ContentHome;