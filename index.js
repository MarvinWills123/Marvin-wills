// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";


//Use 'state' to render the appropriate heading depending on the state of the app

//What page is currently selected or being displayed.



//import Header from "./components/Header";
//import Nav from "./components/Nav";
//import Main from "./components/Main";
//import Footer from "./components/Footer";

//currently,


// The parameter "st" represents a piece of state.
function render (st= state.Home){
document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main()}
${Footer()}
`;
}


render();


const links = document.querySelectorAll("nav a, footer a");

for (let i = 0; i < links.length; i += 1 ){

links[i].addEventListener('click', event => {
event.preventDefault();

render(state[event.target.textContent]);

})
}
