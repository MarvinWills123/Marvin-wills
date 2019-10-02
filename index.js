// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";

//Use 'state' to render the appropriate heading depending on the state of the app

//What page is currently selected or being displayed.
const state = {
  home : {
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


// The parameter "st" represents a piece of state.
function render (st= state.home){
document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render();

const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();

  // In this case we are accessing state.About
  render(state[event.target.textContent]);
})
