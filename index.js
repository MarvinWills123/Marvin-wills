// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";

//The uppercase N indicates that it is a CONSTRUCTOR FUNCTION
import Navigo from "navigo";
import axios from "axios";

import {capitalize} from "lodash";

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

router.updatePageLinks();

//const links = document.querySelectorAll("nav a, footer a");

//links.foreach(link => link.addEventListener('click', event => {
//event.preventDefault();

//render(state[event.target.textContent]);
//}));
}


router
//Developer's Note: ':page' can be whatever you want to name the key that comes into 'params' -Object Literal
// TODO: Create a 404 page and route all "bad routes" to that page.
.on(":page", params =>
render(state[
  capitalize(params.page)]
))
.on("/", ()=> render ())
.resolve();


axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
// response.data contains an ARRAY of 100 post objects
state.Blog.main = response.data.map(({title, body}) => `
<article>
<h2>${title}</h2>
<p>${body}</p>
</article>
`).join("");
 if (capitalize(router.lastRouteResolved().params.page) === "Blog"){
   render(state.Blog)
 }
//const firstPost = response.data[0];


//const demoHTML = `
//<article>
  //<h2>${firstPost.title}</h2>
 // <p>${firstPost.body}</p>
 // </article>`

 // state.Blog.main = demoHTML;
  })

  .catch(err => console.log(err));



render();


