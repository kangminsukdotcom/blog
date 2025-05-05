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
    const correctPassword = “1010”;
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
This page is discoverable, but I don't want to display the URL on my website. I want this page to be my private diary. For me to enjoy writing and expresssing random, potentially shitty, thoughts. 25-05-06
```

```
This is an experimental page for me to start a microblogging page on my website. I'll be posting random short shower thoughts on this page. Both in Korean and English. 25-05-06
```

