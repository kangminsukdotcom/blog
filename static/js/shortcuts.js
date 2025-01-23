// 1. Define which elements are "allowed" in our custom navigation
//    (links, buttons, inputs, etc.) but skipping nav, closed details, etc.
const focusableSelector = `
  a[href],
  button:not([disabled]),
  input:not([disabled]):not([type="hidden"]),
  select:not([disabled]),
  textarea:not([disabled]),
  summary,
  [tabindex="0"]
`;

let focusableElements = [];

/**
 * Gathers all focusable elements, excluding:
 *  - Anything inside <nav>
 *  - Anything in a closed <details> (except <summary>)
 */
function initFocusableElements() {
  focusableElements = Array.from(document.querySelectorAll(focusableSelector))
    .filter(el => {
      // Skip anything in <nav>
      if (el.closest("nav")) return false;

      // If it's inside <details>...
      const det = el.closest("details");
      if (det) {
        // Keep <summary> even if details is closed
        if (el.tagName.toLowerCase() === "summary") {
          return true;
        }
        // Otherwise, only keep if <details> is open
        return det.open;
      }
      return true;
    });
}

// When the page is loaded, run the function and set up "toggle" watchers
document.addEventListener("DOMContentLoaded", () => {
  initFocusableElements();
  document.querySelectorAll("details").forEach(d => {
    d.addEventListener("toggle", initFocusableElements);
  });
});

// 2. Listen for key presses
document.addEventListener("keydown", function (event) {
  // If user is typing in an input/textarea/etc., skip
  if (
    event.target.matches("input, textarea, select") ||
    event.target.isContentEditable
  ) {
    return;
  }

  // Convert the pressed key to lowercase for easier matching
  const keyPressed = event.key.toLowerCase();
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath.replace(/\/+$/, "");

  switch (keyPressed) {
    /**
     * Single-Letter Shortcuts (English + Korean)
     */
    case "h": // h or ㅗ => Home
    case "ㅗ":
      event.preventDefault();
      window.location.href = "/";
      break;

    case "w": // w or ㅈ => Blog
    case "ㅈ":
      event.preventDefault();
      window.location.href = "/blog/";
      break;

    case "k": // k or ㅏ => /ko + current path
    case "ㅏ":
      event.preventDefault();
      if (!normalizedPath.startsWith("/ko")) {
        window.location.href = "/ko" + normalizedPath;
      }
      break;

    case "e": // e or ㄷ => remove /ko if present
    case "ㄷ":
      event.preventDefault();
      if (normalizedPath.startsWith("/ko")) {
        const englishPath = normalizedPath.replace(/^\/ko/, "");
        window.location.href = englishPath === "" ? "/" : englishPath;
      }
      break;

    /**
     * Arrow Keys
     */
    // Left Arrow => Previous Post
    case "arrowleft":
      event.preventDefault();
      const prevLink = document.querySelector(".prev-post");
      if (prevLink && prevLink.href) {
        window.location.href = prevLink.href;
      }
      break;

    // Right Arrow => Next Post
    case "arrowright":
      event.preventDefault();
      const nextLink = document.querySelector(".next-post");
      if (nextLink && nextLink.href) {
        window.location.href = nextLink.href;
      }
      break;

    // Down Arrow => scroll down
    case "arrowdown":
      event.preventDefault();
      window.scrollBy(0, 100); // adjust 100 as needed
      break;

    // Up Arrow => scroll up
    case "arrowup":
      event.preventDefault();
      window.scrollBy(0, -100);
      break;

    /**
     * N => Cycle forward in our custom focus list
     * Shift+N => Cycle backward
     */
    case "n":
      event.preventDefault();
      moveFocus(event.shiftKey ? -1 : 1);
      break;

    /**
     * Esc => remove focus
     */
    case "escape":
      event.preventDefault();
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
      break;

    default:
      // do nothing for other keys
      break;
  }
});

/**
 * 3. moveFocus(step): step=+1 => next, step=-1 => previous
 *    Cycles through focusableElements array
 */
function moveFocus(step) {
  if (!focusableElements.length) return;

  let currentIndex = focusableElements.indexOf(document.activeElement);

  // If nothing is focused yet, treat that as "before the first element"
  if (currentIndex === -1) {
    currentIndex = step > 0 ? -1 : 0;
  }

  let newIndex = currentIndex + step;

  // Wrap around if needed
  if (newIndex < 0) {
    newIndex = focusableElements.length - 1;
  } else if (newIndex >= focusableElements.length) {
    newIndex = 0;
  }

  // Focus the new element
  focusableElements[newIndex].focus();
}