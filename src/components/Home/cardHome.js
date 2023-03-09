import CardOneV from "../../style/videos/projects1.mp4";
import CardThreeV from "../../style/videos/projects.mp4";
import CardTwoV from "../../style/videos/contact1.mp4";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";
import React from "react";

const CardHome = (props) => {

    let [clicked, setClicked] = React.useState({});

    const handleClicked = (e)=>{
        setClicked(oldvalue =>({...oldvalue, [e.target.name]: e.target.value}))
    }

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
                        <Button name="project" value={false} className="buttonLink" bg="dark" 
                        variant="dark" onClick={handleClicked}>
                            {clicked.project?<Navigate to ="/projects"/>:"click here to see more!"}</Button>
                        
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
                        <Button className="buttonLink" bg="dark" name="education" value={false}
                        variant="dark" onClick={handleClicked}>
                        {clicked.education?<Navigate to ="/education"/>:"click here to see more!"}</Button>
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
                        <Button className="buttonLink" bg="dark" variant="dark" 
                        name="contact" value={false} onClick={handleClicked}>
                        {clicked.contact?<Navigate to ="/contact"/>:"click here to see more!"}</Button>
                    </div>
                </div>
                
        </div>
  )
}

export default CardHome;