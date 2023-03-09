import NavbarPage from "../Navbar"
import Footer from "../footer"
import ProjectsPresentation from "./Airbnb/projectPresentation"
import Airbnb from "./Airbnb/AirBnb"
import Techstars from "./Techstars/TechStars"

const ContentProjects = (props)=>{

    return(<>
        <NavbarPage />
        <ProjectsPresentation />
        <Techstars />
        <Airbnb />
        <Footer />
    </>)
}

export default ContentProjects;