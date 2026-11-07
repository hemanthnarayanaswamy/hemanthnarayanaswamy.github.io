---
title: Contact
icon: fas fa-envelope
portfolio: true
contact_form: true
refactor: false
description: "Have a cloud platform to build, a production problem to solve, or a process worth automating? I’d love to hear from you."
---

<section class="portfolio-section" aria-labelledby="send-a-message">
  {% include portfolio-heading.html index='01' id='send-a-message' title='Send a Message' %}
  <form class="contact-form" id="contact-form" action="https://formsubmit.co/{{ site.social.email | escape }}" method="POST" data-contact-form data-contact-endpoint="https://formsubmit.co/ajax/{{ site.social.email | escape }}" aria-labelledby="send-a-message">
    <input type="hidden" name="_subject" value="New message from my portfolio">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_url" value="{{ '/contact/' | absolute_url }}">
    <div class="contact-form__honey" aria-hidden="true"><label for="contact-website">Leave this field empty</label><input id="contact-website" type="text" name="_honey" tabindex="-1" autocomplete="off"></div>
    <fieldset class="contact-form__fields">
      <legend class="portfolio-sr-only">Your contact details and message</legend>
      <div class="contact-form__row">
        <div class="contact-form__field"><label for="contact-name">Name</label><input id="contact-name" name="name" type="text" autocomplete="name" maxlength="100" placeholder="Your name" required></div>
        <div class="contact-form__field"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" maxlength="254" placeholder="you@example.com" required></div>
      </div>
      <div class="contact-form__field"><label for="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" maxlength="160" placeholder="What would you like to discuss?" required></div>
      <div class="contact-form__field"><label for="contact-message">Message</label><textarea id="contact-message" name="message" rows="6" maxlength="5000" placeholder="Tell me a little about your project or question…" required></textarea></div>
    </fieldset>
    <div class="contact-form__footer"><span>All fields are required. Sent via <a href="https://formsubmit.co/" target="_blank" rel="noopener noreferrer">FormSubmit</a>.</span><button class="portfolio-button" type="submit"><span data-send-label>Send message</span><i class="far fa-paper-plane" aria-hidden="true"></i></button></div>
    <p class="contact-form__status" id="contact-form-status" data-form-status role="status" aria-live="polite" tabindex="-1"></p>
  </form>
</section>
<section class="portfolio-section" aria-labelledby="get-in-touch">
  {% include portfolio-heading.html index='02' id='get-in-touch' title='Get In Touch' %}
  <div class="contact-email" data-reveal>
    <span class="portfolio-eyebrow">The best place to start</span>
    <a class="contact-email__link" href="mailto:hemanthnarayanswamy@gmail.com"><i class="far fa-envelope" aria-hidden="true"></i><span>hemanthnarayanswamy@gmail.com</span><span aria-hidden="true">↗</span></a>
    <div class="contact-email__footer"><span>For opportunities, projects, or a quick hello.</span><button class="portfolio-button" type="button" data-copy-email="hemanthnarayanswamy@gmail.com" hidden><i class="far fa-copy" aria-hidden="true"></i> Copy email</button></div>
    <p class="contact-copy-status" data-copy-status role="status"></p>
  </div>
  <div class="contact-links">
    <a class="contact-link" href="https://www.linkedin.com/in/hemanth2204/" target="_blank" rel="noopener noreferrer" data-reveal><i class="fab fa-linkedin-in" aria-hidden="true"></i><span><strong>LinkedIn</strong><small>Professional connections</small></span><span aria-hidden="true">↗</span></a>
    <a class="contact-link" href="https://github.com/hemanthnarayanaswamy" target="_blank" rel="noopener noreferrer" data-reveal><i class="fab fa-github" aria-hidden="true"></i><span><strong>GitHub</strong><small>Code, projects, and ideas</small></span><span aria-hidden="true">↗</span></a>
    <a class="contact-link" href="https://twitter.com/hemanthn" target="_blank" rel="noopener noreferrer" data-reveal><i class="fab fa-x-twitter" aria-hidden="true"></i><span><strong>Twitter / X</strong><small>@hemanthn</small></span><span aria-hidden="true">↗</span></a>
  </div>
</section>
<section class="portfolio-section" aria-labelledby="location" data-reveal>
  {% include portfolio-heading.html index='03' id='location' title='Location' %}
  <div class="contact-location">
    <div class="contact-location__icon" aria-hidden="true"><i class="fas fa-map-marker-alt"></i></div>
    <div><h3>Montreal, QC, Canada</h3><p>Eastern Standard Time · EST (UTC−05:00)</p><div class="contact-availability"><span>Remote work</span><span>Local opportunities</span><span>International projects</span></div></div>
  </div>
</section>
