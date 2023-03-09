import HBNB from "../../../style/pictures/HBNB.gif"
import TERMINAL from "../../../style/pictures/TERMINAL.gif"

const Airbnb = (props) => {

    return (
        <>
        <div className="firstTitle">
            <h1>
                Airbnb Holberton Clone
    </h1>
            
        </div>
        <div className="HBNB-container">
            <img className="HBNB" src={HBNB} alt="HBNB"/>
            <img className="HBNB" src={TERMINAL} alt="HBNB"/>
        </div>
        <div className="HBNB-description" >
        <p > HBNB is a very basic web application with the same functionalities as a primitive version of Airbnb,
            I used Python as a primary lenguage for the back-end, frameworks as FlaskAPI, MysqlAlchemy were necessary
            ,   the DBMS was MySql, and the front-end was made with HTML,CSS and Javascript in the classic way.
        </p>
        </div>
        </>
    )
}

export default Airbnb;