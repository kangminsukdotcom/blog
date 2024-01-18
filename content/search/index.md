---
title: Search Result
layout: search
---
<!--검색 결과가 출력되는 부분 id="search-results" 에 추가된다.-->
 <div class="inner">
     <article class="post-full post page no-image">
         <header class="post-full-header">
             <h1 class="post-full-title">Search Result</h1>
         </header>
         <section class="post-full-content" id="search-results">

         </section>
     </article>

 </div>
 <!--검색 결과가 출력되는 템플릿 search.js 에 의해서 다음과 같은 포맷으로 표시된다.-->
 <template id="search-result-template">
     <div class="search_summary">
         <h2 class="post-title no-text-decoration"><a class="search_link search_title" href=""></a></h2>
         <p><em class="search_snippet"></em></p>
         <small>
             <table>
                 <tr class="search_iftags">
                     <td><strong>Tags</strong></td>
                     <td class="search_tags"></td>
                 </tr>
                 <tr class="search_ifcategories">
                     <td><strong>Categories</strong></td>
                     <td class="search_categories"></td>
                 </tr>
             </table>
         </small>
     </div>
 </template>
 <!--필요한 js 파일을 추가한다.-->
 {{ $assetBusting := not .Site.Params.disableAssetsBusting }}
 <script type="text/javascript" src="{{"js/libs/fuse.js/3.2.1/fuse.min.js" | relURL}}{{ if $assetBusting }}?{{ now.Unix }}{{ end }}"></script>
 <script type="text/javascript" src="{{"js/libs/mark.js/9.0.0/mark.min.js" | relURL}}{{ if $assetBusting }}?{{ now.Unix }}{{ end }}"></script>
 <script type="text/javascript" src="{{"js/search.js" | relURL}}{{ if $assetBusting }}?{{ now.Unix }}{{ end }}"></script>