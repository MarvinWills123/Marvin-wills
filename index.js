// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";

//Use 'state' to render the appropriate heading depending on the state of the app

//What page is currently selected or being displayed.
const state = {
  home : {
    heading: 'Home Page',
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
  },
  about : {
    heading: 'About Page',
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
  },
  contact : {
    heading: 'Contact Page',
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
},
  gallery : {
    heading : 'Gallery Page',
    links: ["Home", "About", "Contact", "Gallery", "Blog"]

  },
  blog :  {
    heading: 'Blog Page',
    links: ["Home", "About", "Contact", "Gallery", "Blog"]

  },
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
${Nav(st)}
${Main(st)}
${Footer()}
`;
}


render();


const links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i += 1 ){

links[i].addEventListener('click', function(event) {
event.preventDefault();

render(state[event.target.textContent.toLowerCase()]);

})
}
