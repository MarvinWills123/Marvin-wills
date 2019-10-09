import {Links} from "../store";

function linksBuilder(links) {
/**
 * 1 Loop over the links
 * 2 Using a template literal,
 * build out the <li> markup
 */

 let linksHTML = "";

 for ( let i=0; i < links.length; i += 1 ){
  linksHTML += `<li><a href = "./${links[i]}">${links[i]}</a></li>`;
 }

return linksHTML;
}


export default function()
{return `<nav>
<span class="fas fa-hamburger" class="is-hidden--desktop"></span>
<ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
${linksBuilder(Links)}
  </ul>
</nav>`;
}
