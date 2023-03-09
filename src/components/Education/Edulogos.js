import logoU from "../../style/pictures/unalogo.png"
import LogoH from "../../style/pictures/hologo.png"
import logoE from "../../style/pictures/eclogo.png"

const EduLogos = () => {

    return(
    <>
    <div className="eduLogos">
        <a className="link-img" href="https://www.holbertoncolombia.com/"><img src={LogoH} alt="logo" /></a>
        <a className="link-img" href="https://unal.edu.co/"><img src={logoU} alt="logo" /></a>
        <a className="link-img" href="https://www.ecenglish.com/en"><img src={logoE} alt="logo" /></a>
    </div>
    </>
    )
}

export default EduLogos;