---
title: I’ll send you a sentence every day
date: 2025-05-18
description: Minsuk’s simple mailing service.
---

![my desk](https://bear-images.sfo2.cdn.digitaloceanspaces.com/us/20250518_205452.webp)

Because a sentence could change your life.

Let me know your email, and I’ll send you a handpicked sentence from a book I’m reading.

No spam. No ads. No AI. No tracking.\
Just your friend sending you beautiful sentences.

<form action="https://riku.miso.town/submit?user_id=42&label=emails" method="post" onsubmit="return validateForm();">

  <div class="field">
    <label for="email">Email </label>
    <input type="email" name="email" id="email" required><br>

    <label for="antiSpam">What is 6 + 2?</label>
    <input type="text" id="antiSpam" name="antiSpam" required><br>

    <input type="submit" value="Submit">
  </div>

  <!-- Honeypot field -->
  <div class="hidden-honeypot">
    <label>Leave this field empty: 
      <input name="contact_time" id="contact_time" type="text" autocomplete="off">
    </label>
  </div>

  <!-- Hidden JS-set field -->
  <input type="hidden" name="js_token" id="js_token" value="">

  <!-- Hidden timestamp -->
  <input type="hidden" name="load_time" id="load_time" value="">

  <input type="hidden" name="redirect" value="https://kangminsuk.com/thank-you/">
</form>

<script>
  document.getElementById("js_token").value = "human";
  document.getElementById("load_time").value = Date.now();

  function validateForm() {
    const answer = document.getElementById('antiSpam').value.trim();
    if (answer !== "8") {
      alert("Wrong answer to the spam check question.");
      return false;
    }

    const honeypot = document.getElementById("contact_time").value.trim();
    if (honeypot.length > 0 && /[a-zA-Z0-9]/.test(honeypot)) {
      alert("Bot detected (honeypot field filled).");
      return false;
    }

    const jsToken = document.getElementById("js_token").value;
    if (jsToken !== "human") {
      alert("JS validation failed.");
      return false;
    }

    const loadTime = parseInt(document.getElementById("load_time").value, 10);
    const now = Date.now();
    if ((now - loadTime) < 5000) {
      alert("Form submitted too quickly.");
      return false;
    }

    return true;
  }
</script>

<style>
  .hidden-honeypot {
    position: absolute;
    left: -9999px;
    top: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
</style>

