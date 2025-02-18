---
title: 강민석닷컴을 한 페이지에 욱여넣었다
date: 2025-02-18
tags: [website]
description: 블로그에 있는 모든 텍스트를 한 페이지로 보여주기.
---

내가 여태까지 쓴 글을 [한 페이지](https://kangminsuk.com/all-texts/)로 모았다.

Andrej Karpathy가 ChatGPT의 기본 원리를 설명을 하는 [영상](https://www.youtube.com/watch?v=7xTGNNLPyMI&t=482s)을 보다가, HTML 페이지에 텍스트만 가득 차 있는 모습을 보고 순간 영감을 받았다. *강민석닷컴에 있는 모든 텍스트를 한 페이지에 꽉 채워 넣으면 개멋있겠다.*

![영감을 받은 영상](https://bear-images.sfo2.cdn.digitaloceanspaces.com/kangko/022x.webp)

영감이 식기 전에 바로 실행에 옮겼다. 페이지를 꾸밀 필요가 없으니 어렵지 않을 것이라 생각했지만, 복병은 데이터 추출이었다. 내가 사용 중인 Hugo 템플릿에 따라, 영어 블로그와 한국어 블로그에 있는 모든 글(페이지는 제외)을 가져와야 했고, 기존 Markdown 형식 대신 Plain Text로 변환해야 했다. 그래야 모든 문장을 쭉 이어서 페이지를 가득 채울 수 있기 때문이다.

GPT에게 Hugo 템플릿에 따라 content/blog와 content.ko/blog에 있는 포스트를 모두 가져오는 코드를 써보라고 했지만, 어찌된 이유인지 계속 실패했다. 폴더 위치(file path)로 데이터 추출이 어려운가 싶어 URL로 필터링을 시도해보려 했지만, 또 실패했다. 그러다 결국 Scratch로 영문, 한글 데이터를 나눈 뒤 두 샘플을 합쳐서 성공했다.

성공한 코드는 다음과 같다:

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

