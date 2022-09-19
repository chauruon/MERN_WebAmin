import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import MainSection from "./App";
import MainSection from "./App";
import {BrowserRouter} from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
      <MainSection/>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,document.getElementById('root')
);