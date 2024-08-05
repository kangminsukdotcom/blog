---
---
<script src="/pagefind/pagefind-ui.js"></script>

<div id="search-results"></div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var searchResults = document.getElementById('search-results');

      // Initialize PagefindUI
      new PagefindUI({
        element: '#search-results',
        showImages: false,
        showEmptyFilters: false,
        resetStyles: false,
      });
    });
  </script>