---
title: 오늘의 문장을 보내드립니다
date: 2025-05-18
description: 강민석의 초심플 메일링 서비스.
---

![오늘의 문장](https://bear-images.sfo2.cdn.digitaloceanspaces.com/us/20250518_205452.webp)

좋은 문장을 읽는 것만으로 삶이 바뀔 수 있으니까.

이메일 주소를 알려주시면 읽고 있는 책에서 발견한 문장을 보내드립니다.

스팸, 광고, 트래킹, AI는 없어요.\
살고 싶게 하는 문장을 골라서 보냅니다.

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

  <div class="cf-turnstile" data-sitekey="0x4AAAAAABgq5caVMNJepvDC"></div>

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
