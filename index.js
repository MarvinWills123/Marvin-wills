// Object Destructuring
import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";

//The uppercase N indicates that it is a CONSTRUCTOR FUNCTION
import Navigo from "navigo";
import axios from "axios";

import {capitalize} from "lodash";

import {auth, db} from "./firebase";
import { format } from "path";


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
 if (router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page) === "Blog"){
   render(state.Blog)
 }
//const firstPost = response.data[0];


//const demoHTML = `
//<article>
 //<h2>${firstPost.title}</h2>
 //<p>${firstPost.body}</p>
 //</article>`

 state.Blog.main = demoHTML;
  })

  .catch(err => console.log(err));

 Gallery
  db.collection("pictures")
  .get()

  /**
   * Developer's Note: There is no straightforward way to get data back as an Array,
   * so 'superpowers' are useless.😞
   */
  .then(querySnapshots => {
    state.Gallery.main =
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          const { caption, credit, imgURL } = doc.data();

          return `
        <figure>
          <img src="${imgURL}" alt="">
          <figcaption>${caption} - ${credit}</figcaption>
        </figure>
      `;
        })
        .join(" ") +
      `</div>`;

    if (
      router.lastRouteResolved().params &&
      capitalize(router.lastRouteResolved().params.page) === "Gallery"
    ) {
      render(state.Gallery);
    }
  })
  .catch(err => console.error("Error loading pics", err));

 //Admin
// TODO: Rather than grabbing each element manually, consider using (`event.target.elements`) on the `submit` event.
// Are we on Admin page?
if (
  router.lastRouteResolved().params &&
  capitalize(router.lastRouteResolved().params.page) === "Admin"
) {
  // Are we logged in?
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // We are logged in!
      //Let's change our page display to show a 'logout' button
      state.Admin.main = `<button type="button">Log out!</button>`;

      render(state.Admin);

      document.querySelector("button").addEventListener("click", () => {
        auth
          .signOut()
          .then(() => {
            state.Admin.main = `
            <form>
              <input type="email" />
              <input type="password" />
              <input type="submit" value="Log in!" />
            </form>
          `;

          render(state.Admin);
          })
          .catch(err => console.log("Error signing out", err.message));
      });
    } else {
      const email = document.querySelector('[type="email"]');
      const password = document.querySelector('[type="password"]');

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email.value, password.value)
          .catch(err => console.error("Got an error", err.message));
      });
    }
  });
}


