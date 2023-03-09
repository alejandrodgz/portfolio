import React from "react";
import Spinner from "react-bootstrap/Spinner";
import NavbarPage from "../Navbar";

const SpinnerView = (props)=>{

const [showSpinner, setShowSpinner] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [props.component, props.key]);

    return(
        <>
        {showSpinner ? (<><NavbarPage />
        <div className="spinner">
        <Spinner animation="grow" size="lg" variant="light" />
        </div></>):<props.component/>}
        </>
    )
}

export default SpinnerView;