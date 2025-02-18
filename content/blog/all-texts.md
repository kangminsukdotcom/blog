---
title: All texts of kangminsuk.com
date: 2025-02-18
description: Creating a page of all texts from my Hugo website.
tags: [website]
---

I've gathered all the texts I've written so far on [a single HTML page](https://kangminsuk.com/all-texts/).

While watching [this video](https://www.youtube.com/watch?v=7xTGNNLPyMI&t=482s) in which Andrej Karpathy explains the basic principles of ChatGPT, I was suddenly inspired by an HTML page filled entirely with text. *It would be awesome if I could cram all the text from kangminseok.com onto one page.*

![Video that inspired me](https://bear-images.sfo2.cdn.digitaloceanspaces.com/kangko/022x.webp)

Before the inspiration faded, I immediately put it into action. I thought it wouldn't be too difficult since I didn't need to design the page, but the real challenge was data extraction. According to the Hugo template I was using, I had to fetch all the posts (excluding pages) from both the English and Korean blogs and convert them from the original Markdown format to plain text. This was necessary so that all the sentences could be continuously strung together to completely fill the page.

I asked GPT to write code to fetch all the posts in `content/blog` and `content.ko/blog`, but for some reason it kept failing. I then tried filtering by URL instead of file path, but that also failed. Eventually, I divided the English and Korean data in Scratch and then merged the two samples, which finally worked.

The successful code is as follows:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{ .Title }}</title>
  <style>
    html, body {
      font-size: 10px;
      margin: 0;
      padding: 0;
      font-family: system-ui, sans-serif;
      overflow-x: hidden;
      text-align: left;
    }

    img {
      display: none !important;
    }

    #text-container, #text-container * {
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    #text-container {
      padding: 0;
    }
    article {
      display: block;
      margin-bottom: 1em;
    }
    h1, h2, h3 {
      margin: 0 0 0.25em;
      display: block;
    }
  </style>
</head>
<body>
  <div id="text-container">
    {{/* Build slices for English and Korean pages using Scratch */}}
    {{ $.Scratch.Set "eng" (slice) }}
    {{ $.Scratch.Set "ko" (slice) }}
    {{ range .Site.AllPages }}
      {{ $page := . }}
      {{ with $page.File }}
        {{ if hasPrefix .Path "blog/" }}
          {{ $temp := $.Scratch.Get "eng" | append $page }}
          {{ $.Scratch.Set "eng" $temp }}
        {{ end }}
        {{ if hasPrefix .Path "content.ko/blog/" }}
          {{ $temp := $.Scratch.Get "ko" | append $page }}
          {{ $.Scratch.Set "ko" $temp }}
        {{ end }}
      {{ end }}
    {{ end }}
    {{ $eng := $.Scratch.Get "eng" }}
    {{ $ko := $.Scratch.Get "ko" }}
    {{ $pages := union $eng $ko }}
    {{ range $pages }}
      <article>
        <h2><a href="{{ .RelPermalink }}">{{ .Title }}</a></h2>
        <div>
          {{ .RawContent
             | replaceRE "(?m)^###\\s*(.*)$" "<h3>$1</h3>"
             | replaceRE "(?m)^##\\s*(.*)$" "<h2>$1</h2>"
             | replaceRE "(?m)^#\\s*(.*)$" "<h1>$1</h1>"
             | replaceRE "\\*\\*(.*?)\\*\\*" "<em>$1</em>"
             | replaceRE "\\[([^\\]]+)\\]\\(([^\\)]+)\\)" "<a href=\"$2\">$1</a>"
             | safeHTML
          }}
        </div>
      </article>
    {{ end }}
  </div>
</body>
</html>
```