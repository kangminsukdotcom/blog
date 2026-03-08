---
title: "Home"
menu: "main"
description: Some writer in Korea.
weight: 1
---

![Minsuk Kang's picture](https://bear-images.sfo2.cdn.digitaloceanspaces.com/us/its-me.webp "I'm glad you're here.")

{{ define "main" }}

<content>
  {{ if .Data.Singular }}
    <h3 class="blog-filter">{{ i18n "filtering-for" }} "{{ .Title }}"</h3>
  {{ end }}

  <ul class="blog-posts">

      <div>
        {{ range .Site.Taxonomies.tags }}
          <a class="blog-tags" href="{{ .Page.RelPermalink }}">#{{ lower .Page.Title }}</a>
        {{ end }}
      </div>
      
    {{ $grouped := .Pages.GroupByDate "2006" }}
    {{ range $grouped }}
      <h3>{{ .Key }}</h3>
      {{ range .Pages }}
        <li>
          {{ if .Params.link }}
            <a href="{{ .Params.link }}" target="_blank">{{ .Title }} ↪</a>
          {{ else }}
            <a href="{{ .RelPermalink }}">{{ .Title }}</a>
          {{ end }}
        </li>
      {{ end }}
    {{ else }}
      <li>
        {{ i18n "no-posts" }}
      </li>
    {{ end }}
  </ul>
</content>
{{ end }}