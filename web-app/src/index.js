import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // WE NEED THIS FOR DAISY UI
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import App from "./App";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

reportWebVitals();