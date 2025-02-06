const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex="0"]';
let fE = [];

function iFE() {
  fE = Array.from(document.querySelectorAll(focusableSelector)).filter(e => {
    if (e.closest("nav")) return false;
    const detailsElem = e.closest("details");
    return !detailsElem || e.tagName.toLowerCase() === "summary" || detailsElem.open;
  });
}

function mF(direction) {
  if (!fE.length) return;
  let index = fE.indexOf(document.activeElement);
  if (index === -1) {
    index = direction > 0 ? -1 : 0;
  }
  let nextIndex = index + direction;
  if (nextIndex < 0) {
    nextIndex = fE.length - 1;
  } else if (nextIndex >= fE.length) {
    nextIndex = 0;
  }
  fE[nextIndex].focus();
}

document.addEventListener("DOMContentLoaded", () => {
  iFE();
  document.querySelectorAll("details").forEach(details => {
    details.addEventListener("toggle", iFE);
  });
});

document.addEventListener("keydown", function (e) {
  // Ignore events on input, textarea, select, or contentEditable elements
  if (e.target.matches("input, textarea, select") || e.target.isContentEditable) return;
  
  const key = e.key.toLowerCase();
  const currentPath = window.location.pathname.replace(/\/+$/, "");

  switch (key) {
    case "h":
    case "ㅗ":
      e.preventDefault();
      window.location.href = "/";
      break;
    case "b":
    case "ㅠ":
      e.preventDefault();
      // Redirect to '/ko/blog/' if the current path starts with '/ko'
      const prefix = currentPath.startsWith("/ko") ? "/ko" : "";
      window.location.href = `${prefix}/blog/`;
      break;
    case "k":
    case "ㅏ":
      e.preventDefault();
      if (!currentPath.startsWith("/ko")) {
        window.location.href = "/ko" + currentPath;
      }
      break;
    case "e":
    case "ㄷ":
      e.preventDefault();
      if (currentPath.startsWith("/ko")) {
        const newPath = currentPath.replace(/^\/ko/, "");
        window.location.href = newPath === "" ? "/" : newPath;
      }
      break;
    case "arrowleft":
      e.preventDefault();
      const prevPost = document.querySelector(".prev-post");
      if (prevPost && prevPost.href) {
        window.location.href = prevPost.href;
      }
      break;
    case "arrowright":
      e.preventDefault();
      const nextPost = document.querySelector(".next-post");
      if (nextPost && nextPost.href) {
        window.location.href = nextPost.href;
      }
      break;
    case "arrowdown":
      e.preventDefault();
      window.scrollBy(0, 100);
      break;
    case "arrowup":
      e.preventDefault();
      window.scrollBy(0, -100);
      break;
    case "n":
    case "ㅜ":
      e.preventDefault();
      mF(e.shiftKey ? -1 : 1);
      break;
    case "escape":
      e.preventDefault();
      if (document.activeElement && typeof document.activeElement.blur === "function") {
        document.activeElement.blur();
      }
      break;
  }
});