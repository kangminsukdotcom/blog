---
title: I’ll send you a sentence every day
date: 2025-05-18
description: Minsuk’s simple mailing service.
---

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

![my desk](https://bear-images.sfo2.cdn.digitaloceanspaces.com/us/20250518_205452.webp)

Because a sentence could change your life.

Let me know your email, and I’ll send you a handpicked sentence from a book I’m reading.

No spam. No ads. No AI. No tracking.\
Just your friend sending you beautiful sentences.

Check out [the archive of sentences](https://kangminsuk.com/sentences/) to decide if you want them in your inbox.

<form action="https://emails.kang-2fb.workers.dev/" method="post" onsubmit="return validateTurnstile();">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" required>

  <div class="cf-turnstile"
       data-sitekey="0x4AAAAAABgq5caVMNJepvDC"
       data-callback="onTurnstileSuccess"></div>
  <input type="hidden" name="cf-turnstile-response" id="cf-turnstile-response">

  <input type="hidden" name="redirect" value="https://kangminsuk.com/thank-you/">
  <input type="submit" value="Submit">
</form>

<script>
  function onTurnstileSuccess(token) {
    document.getElementById("cf-turnstile-response").value = token;
  }

  function validateTurnstile() {
    const token = document.getElementById("cf-turnstile-response").value;
    if (!token) {
      alert("Please complete the CAPTCHA.");
      return false;
    }
    return true;
  }
</script>



