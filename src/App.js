import './App.css';
import LandingPage from "./views/LandingPage/LandingPage";
import React, {useState} from "react";

function App(props) {

    var [page, SetPage] = useState("Loading...")

    return LandingPage();
}

export default App;
