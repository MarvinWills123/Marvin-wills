// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";

//Use 'state' to render the appropriate heading depending on the state of the app

//What page is currently selected or being displayed.
const state = {
  Home : {
    heading: 'Home Page'
  },
  About : {
    heading: 'About Page'
  }
}


//import Header from "./components/Header";
//import Nav from "./components/Nav";
//import Main from "./components/Main";
//import Footer from "./components/Footer";

//currently,

document.querySelector("#root").innerHTML = `
${Header(state.Home.heading)}
${Nav()}
${Main()}
${Footer()}
`
