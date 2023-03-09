import ContentHome from "./components/Home/contentHome";
import ContentEducation from "./components/Education/ContentEducation";
import ContentProjects from "./components/Projects/contentProjects";
import SpinnerView from "./components/Spinner/Spinner";
import ContentContact from "./components/Contact/ContentContact";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SpinnerView component={ContentHome}/>} key={"home"} />
      <Route path="/education" element={<SpinnerView component={ContentEducation} key={"education"}/> } />
      <Route path="/projects" element={<SpinnerView component={ContentProjects} key={"projects"}/>} />
      <Route path="/contact" element={<SpinnerView component={ContentContact} key={"contact"}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
