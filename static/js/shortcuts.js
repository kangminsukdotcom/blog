// A selector covering most interactive elements:
const focusableSelector = `
  a[href],
  button:not([disabled]),
  input:not([disabled]):not([type="hidden"]),
  select:not([disabled]),
  textarea:not([disabled]),
  summary,
  [tabindex="0"]
`;

// We'll store all focusable elements in this array
let focusableElements = [];

function initFocusableElements() {
  focusableElements = Array.from(
    document.querySelectorAll(focusableSelector)
  ).filter(el => {
    // If the element is inside any <nav> tag, skip it
    return !el.closest("nav");
  });
}

// Call this when the DOM is ready
document.addEventListener("DOMContentLoaded", initFocusableElements);

document.addEventListener("keydown", function (event) {
  // If typing in a form field or contentEditable, skip the shortcuts
  if (
    event.target.matches('input, textarea, select') ||
    event.target.isContentEditable
  ) {
    return;
  }

  // Common path logic for language switching:
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath.replace(/\/+$/, "");

  switch (event.key) {
    /**
     * Single-key navigation shortcuts
     */
    case "h":
      // Go Home
      window.location.href = "/";
      break;

    case "w":
      // Go to /blog/
      window.location.href = "/blog/";
      break;

    case "k":
      // Switch to Korean (prefix /ko if not present)
      if (!normalizedPath.startsWith("/ko")) {
        window.location.href = "/ko" + normalizedPath;
      }
      break;

    case "e":
      // Switch to English (remove /ko prefix if present)
      if (normalizedPath.startsWith("/ko")) {
        const englishPath = normalizedPath.replace(/^\/ko/, "");
        window.location.href = englishPath === "" ? "/" : englishPath;
      }
      break;

    /**
     * Arrow-key navigation within the page
     * We’ll move "focus" between focusable elements in the DOM
     */
    case "ArrowDown":
    case "ArrowRight":
      event.preventDefault(); // Prevent default browser scrolling
      moveFocus(1); // move to next focusable
      break;

    case "ArrowUp":
    case "ArrowLeft":
      event.preventDefault();
      moveFocus(-1); // move to previous focusable
      break;

    default:
      // no-op
      break;
  }
});

/**
 * moveFocus(step):
 * step = +1  => move to next focusable
 * step = -1  => move to previous focusable
 */
function moveFocus(step) {
  if (focusableElements.length === 0) {
    return;
  }

  // Which element is currently focused?
  let currentIndex = focusableElements.indexOf(document.activeElement);

  // If nothing is focused yet, we treat that as "before the first element"
  if (currentIndex === -1) {
    currentIndex = step > 0 ? -1 : 0;
  }

  // Compute the next index
  let newIndex = currentIndex + step;

  // Wrap around if you go past the ends
  if (newIndex < 0) {
    newIndex = focusableElements.length - 1;
  } else if (newIndex >= focusableElements.length) {
    newIndex = 0;
  }

  // Focus the new element
  focusableElements[newIndex].focus();
}