import React from "react";
import NavbarPage from "../Navbar";
import PresentationDiv from "./presentation";
import CardHome from "./cardHome"
import Footer from "../footer";
import LenguageBar from "./Lenguages";
import handleViewport from 'react-in-viewport';



const ContentHome = (props)=>{

  

const Block = (props) => {
  const { inViewport } = props;
  const chartInView = inViewport ? <LenguageBar/> : <></>;
  return (
    <>
    {chartInView}
    </>
  );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

    return(<>
        <NavbarPage />
        <br/>  
        <PresentationDiv />
        <CardHome />
        <ViewportBlock  onEnterViewport={() => console.log('enter')} />
        <Footer />
        </>
    )
}

export default ContentHome;