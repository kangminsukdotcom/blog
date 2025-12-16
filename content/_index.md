---
title: "Home"
menu: "main"
description: Some writer in Korea.
weight: 1
---
<style>
li {
  list-style: none;
}

ul {
  padding: 0;
}
</style>

# Minsuk Kang

<ul>
<li><a href="https://letterbird.co/kang">Email</a></li>
<li><a href="https://kangminsuk.com/blog/index.xml">RSS</a></li>
<li><a href="https://kangminsuk.com/my-apps/">Creations</a></li>
<li><a href="https://kangminsuk.com/sentences/">Sentences</a></li>
<li><a href="https://ko-fi.com/kangminsuk">Donate</a></li>
</ul>

---

<html>
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
</html>