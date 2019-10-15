import {Links} from "../store";

function linksBuilder(links) {
/**
 * 1 Loop over the links
 * 2 Using a template literal,
 * build out the <li> markup
 */
return links.map(link => `<li><a href = "./${link}" data-navigo>${link}</a></li>`).join("");
}


export default function()
{return `<nav>
<span class="fas fa-hamburger is-hidden--desktop"></span>
<ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
${linksBuilder(Links)}
  </ul>
</nav>`;
}
