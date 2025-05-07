---
title: Microblog
type: page
---

<style>
time, footer {
display: none;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.display = "none";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    const correctPassword = "1010"; // ✅ fixed quote marks
    let userInput;
    let isPasswordCorrect = false;

    while (!isPasswordCorrect) {
      userInput = prompt("Please enter the password:");

      if (userInput === null) {
        break;
      } else if (userInput === correctPassword) {
        localStorage.setItem("isLoggedIn", "true");
        document.body.style.display = "block";
        isPasswordCorrect = true;
      } else {
        alert("Incorrect password. Please try again.");
      }
    }
  } else {
    document.body.style.display = "block";
  }
});
</script>

```
25-05-08

3D 프린터에 관심이 생겼다. 무료로 사용하거나 배울 수 있는 공간이 작업실 근처다. 어메이징...
```

```
25-05-07

아침에 빵을 굽는 날이다. 오븐 소리가 난다. 저번에 오븐으로 보리굴비를 데워먹고 까먹고 트레이를 안 씻었다. 황급하게 설거지를 하고 빵을 굽는 중... 뒷정리를 잘해야하는데 이것 참 부끄럽구만.

빵이 잘 나오면 커피를 내려서 같이 먹어 볼 거다. 근데 빵이 식는 걸 기다릴 수 있을까... 커피 먼저 마실 수도 있다. 
```

```
25-05-06

없애야 하는 것이 있다. 지켜야 하는 것이 있다. 가볍게 살아야 한다. 다 버려야 한다. 

허영심이 눈에 보일 때가 있다. 어떻게든 잘난 면을 드러내서 우울함을 꾹꾹 밀어 넣으려는 발악이 눈에 보일 정도로 클 때가 있다.
```

```
25-05-06

This page is now password protected(very weak security, but enough to guard against 99%).
```

```
25-05-06

This page is discoverable, but I don't want to display the URL on my website. I want this page to be my private diary. For me to enjoy writing and expresssing random, potentially shitty, thoughts.
```

```
25-05-06

This is an experimental page for me to start a microblogging page on my website. I'll be posting random short shower thoughts on this page. Both in Korean and English.
```

