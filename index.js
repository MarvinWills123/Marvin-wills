// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";


//import Header from "./components/Header";
//import Nav from "./components/Nav";
//import Main from "./components/Main";
//import Footer from "./components/Footer";

//currently,

document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}
`
