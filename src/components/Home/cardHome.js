import CardOneV from "../../style/videos/projects1.mp4"
import CardThreeV from "../../style/videos/projects.mp4"
import CardTwoV from "../../style/videos/contact1.mp4"
import Button from "react-bootstrap/Button";

const CardHome = (props) => {
    
    return(<div className="cardGroup">
            <div className="video-container" >
                    <video src={CardOneV} className="video" autoPlay muted loop playsInline>
                    </video>
                    <div className="card-content">
                        <h2>My <br/>Projects</h2>
                        <hr/>
                        <p>Some of my personal and academic projects, use of 
                            lenguages Python, javascript, C, C#
                        </p>
                        <hr/>
                        <Button className="buttonLink" bg="dark" variant="dark">click here to see more!</Button>
                        
                    </div>
                </div>
                <div className="video-container" >
                    <video src={CardTwoV} className="video" autoPlay muted loop playsInline>
                    </video>
                    <div className="card-content">
                    <h2>Academic Background</h2>
                        <hr/>
                        <p>after finish My degree in bussines administration I found my real passion
                        </p>
                        <hr/>
                        <Button className="buttonLink" bg="dark" variant="dark">click here to see more!</Button>
                    </div>
                </div>
                <div className="video-container" >
                    <video src={CardThreeV} className="video" autoPlay muted loop playsInline>
                    </video>
                    <div className="card-content">
                    <h2>Personal Details</h2>
                        <hr/>
                        <p>Some of my personal and academic projects, use of 
                            lenguages Python, javascript, C, C#
                        </p>
                        <hr/>
                        <Button className="buttonLink" bg="dark" variant="dark">click here to see more!</Button>
                    </div>
                </div>
                
        </div>
  )
}

export default CardHome;