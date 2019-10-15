// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";

//The uppercase N indicates that it is a CONSTRUCTOR FUNCTION
import Navigo from "navigo";

const router = new Navigo(location.origin);



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
${Nav()}
${Main(st)}
${Footer()}
`;

const links = document.querySelectorAll("nav a, footer a");

links.foreach(link => link.addEventListener('click', event => {
event.preventDefault();

render(state[event.target.textContent]);
}));}

render(state[location.pathname.slice(1)]);

router
//Developer's Note: ':page' can be whatever you want to name the key that comes into 'params' -Object Literal
.on(":page", params => render(state[params.page]))
.resolve();

render();


