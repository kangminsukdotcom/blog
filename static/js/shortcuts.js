<script>
document.addEventListener("keydown", function (event) {
  // If user is typing in a form field, skip all shortcuts
  if (
    event.target.matches("input, textarea, select") ||
    event.target.isContentEditable
  ) {
    return;
  }

  // Grab the current path and remove trailing slash
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath.replace(/\/+$/, "");

  // Check the actual key pressed, in lowercase
  const keyPressed = event.key.toLowerCase();

  switch (keyPressed) {

    /**
     * Single-Letter Shortcuts (English + Korean)
     */
    // h / ㅗ => Home
    case "h":
    case "ㅗ":
      event.preventDefault();
      window.location.href = "/";
      break;

    // w / ㅈ => Blog
    case "w":
    case "ㅈ":
      event.preventDefault();
      window.location.href = "/blog/";
      break;

    // k / ㅏ => Switch to Korean (prefix /ko if not present)
    case "k":
    case "ㅏ":
      event.preventDefault();
      if (!normalizedPath.startsWith("/ko")) {
        window.location.href = "/ko" + normalizedPath;
      }
      break;

    // e / ㄷ => Switch to English (remove /ko if present)
    case "e":
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
    // ArrowLeft => Previous Post
    case "arrowleft":
      event.preventDefault();
      const prevLink = document.querySelector(".prev-post");
      if (prevLink && prevLink.href) {
        window.location.href = prevLink.href;
      }
      break;

    // ArrowRight => Next Post
    case "arrowright":
      event.preventDefault();
      const nextLink = document.querySelector(".next-post");
      if (nextLink && nextLink.href) {
        window.location.href = nextLink.href;
      }
      break;

    // ArrowDown => Scroll Down
    case "arrowdown":
      event.preventDefault();
      window.scrollBy(0, 100); // scrolls down 100px
      break;

    // ArrowUp => Scroll Up
    case "arrowup":
      event.preventDefault();
      window.scrollBy(0, -100); // scrolls up 100px
      break;


    /**
     * Escape => Remove focus
     */
    case "escape":
      event.preventDefault();
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
      break;

    default:
      // For any other key, do nothing
      break;
  }
});
</script>