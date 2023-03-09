import Container from "react-bootstrap/Container";
import Portrait from "../../style/pictures/round_photo.png"

const PresentationDiv = (props) =>{


    return(
        <Container className="containerDiv">
        <h4>Welcome, My name is Alejandro Garcia, Appasionate Software developer! this website was design and made by me, without Tutorials
        </h4>
        <img src={Portrait} alt="portrait"/>
    </Container>
    )
}

export default PresentationDiv;