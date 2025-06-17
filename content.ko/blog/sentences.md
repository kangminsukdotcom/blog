---
title: 오늘의 문장을 보내드립니다
date: 2025-05-18
description: 강민석의 초심플 메일링 서비스.
---

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

![오늘의 문장](https://bear-images.sfo2.cdn.digitaloceanspaces.com/us/20250518_205452.webp)

좋은 문장을 읽는 것만으로 삶이 바뀔 수 있으니까.

이메일 주소를 알려주시면 읽고 있는 책에서 발견한 문장을 보내드립니다.

스팸, 광고, 트래킹, AI는 없어요.\
살고 싶게 하는 문장을 골라서 보냅니다.

*여태까지 보낸 문장들은 [여기](https://kangminsuk.com/sentences/)에 확인할 수 있습니다.

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