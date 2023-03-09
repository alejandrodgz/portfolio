import TECH from "../../../style/pictures/TECH.gif"
import TECHPHONE from "../../../style/pictures/TECHPHONE.gif"

const Techstars = (props) => {

    return (
        <>
        <div className="firstTitle" id="firstproject">
            <h1>
                Techstars Accelerator®
            </h1>
            
        </div>
        <div className="Tech-container">
            <img className="Tech-1" src={TECH} alt="HBNB"/>
            <img className="Tech-2" src={TECHPHONE} alt="HBNB"/>
        </div>
        <div className="Tech-description" >
        <p> The current project was developed with the intention of an easy way for the users of the start up Techstars to filter and find investors from the database of Pitchbook and their connection from Affinity in order to contact them.
             The data is being stored in a MySql database and its deployed through an fastAPI API.<br/><br/>
             A React frontend is used to show the data in a table and to filter it.

            We used MySql for the database for its simplicity and because we did not have a very complex data model. We found that FastAPI was the best technology for creating the API we needed for its easy maintenance and scalability. <br/>
            Finally, we found that React was the best fit for the frontend for its easy connection with an API.
        </p>
        </div>
        </>
    )
}

export default Techstars;