import NavbarPage from "../Navbar";
import NacionalEducation from "./NacionalEducation";
import EducationPresentation from "./EscolarPresentation";
import Footer from "../footer";
import EduLogos from "./Edulogos";

const ContentEducation = ()=>{

    return(
    <>
    <NavbarPage />
    <EducationPresentation />
    <NacionalEducation />
    <br/>
    <div className="Tech-description" >
        <p>  "All the information regarding my academic history is supported by diplomas and certificates, which I can provide upon your request. Please click the link to proceed to the contact session."
        </p>
        <br/>
        </div>
    <br/>
    <EduLogos />
    <br />
    <div className="Tech-description">
    <p style={{color:"grey"}}>go to official websites</p>
    </div>
    <br/>
    <Footer />  
    </>

)}

export default ContentEducation;