import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import "./style/css/main.css"
import "./style/css/navbar.css"
import "./style/css/Home/presentation.css"
import "./style/css/Home/cardHome.css"
import "./style/css/Home/chart.css"
import "./style/css/footer.css"
import "./style/css/projects/ProjectsPresentation.css"
import "./style/css/projects/AirBnb.css"
import "./style/css/Home/CTA.css"
import "./style/css/projects/Techstars.css"
import "./style/css/Education/ContentEducation.css"
import "./style/css/spinner.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

