export default {
  heading: 'Contact Page',
  main:`<p>"How can we help you?"</p>
  <form action="#" method="POST" data-netlify="true">
  <div class="flex-container--desktop flex-row--desktop">
  <div>
    <label for="name">Name:</label>
    <input class="is-error" class="is-success" name="name">
  </div>
  <div>
    <label for="email">Email:</label>
    <input class="is-error" class="is-success" type="tel" id="phone">
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input class="is-error" class="is-success"type="tel"id="phone">
  </div>
  </div>
  <div>
    <label for="msg">Enter your message:</label>
    <textarea name="msg"id="msg" cols="30" rows="10"></textarea>
  </div>
  <input type="submit" value="Submit">
</form>`

};
