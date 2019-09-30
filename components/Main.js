export default function(body)
{ return `
<main>
<div ${body}class=hero>
  <a href="#">Fake"CTA"Btn</a>
</div>
<div class="flex-container--desktop">
<section>
<h2>Education Benefits</h2>
  <p>My website should allow veterans to link to VA.gov to more easily apply for education benefits if they are eligible.</p>
  <a href=""class="read-more-btn" style="max-width: 120px; align-self: center;">Read More</a>
</section>
<section>
  <h2>Volunteer</h2>
  <p>My website should allow individuals to volunteer to help veterans. Individuals can volunteer by helping veterans to attend medical appointments, training service dogs, building houses for injured veterans, and job training. </p>
  <a href=""class="read-more-btn">Read More</a>
</section>
<section>
  <h2>Resume Builder</h2>
  <p> This website should incorporate a resume builder.</p>
  <a href=""class="read-more-btn">Read More</a>
</section>
</div>
</main>`;
}

