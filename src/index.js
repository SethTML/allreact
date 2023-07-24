import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPortfolio from './portfolio/mainportfolio.js';
import MainImmerfit from './immerfit/Home/Home.js';
import MainApp from './MainApp.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


let path = window.location.pathname;
if (path === "/immerfit" || path === "/immerfit/home"){
  import("./immerfit/immerfit.css").then(() => {
    console.log("Immerfit CSS import");
  })
}
else if (path === "/"){
  import("./portfolio/portfolio3.css").then ( () => {
    console.log("Portfolio CSS import");
  })
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
