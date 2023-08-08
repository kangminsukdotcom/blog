+++
title = "Substack에서 Ghost로 옮긴 이유"
date = 2021-04-04
+++

작가와 협력하는 뉴스레터 플랫폼 [Substack](https://substack.com/)이 [잘 나간다는 건](https://techcrunch.com/2021/03/30/substack-confirms-65m-raise-promises-to-rapidly-expand-its-financial-backing-of-newly-independent-writers/) 세 가지를 상징한다:

1. 정보화 시대에도 글로 독립적인 수익 창출이 가능하다.

2. 많은 사람들은 기업이 아닌 개인이 전달하는 정보를 더 신뢰한다.

3. 글 쓰고 싶어 하는 사람이 정말 많다.

하지만 한 달간 써보니 여러가지 단점이 있었다:

* 서비스 내 한국어 지원이 안 된다.
* 한국어로 레터를 보냈을 때 자음과 모음이 분리되는 경우가 있다.
* 자체 에디터에서 한국어를 쓰면 두 번씩 입력되는 오류가 발생한다.
* 한글에 적합한 폰트를 제공하지 않는다.
* 사이트 레이아웃 변경이 불가능하다 (디자인 자유도가 낮다).

한국어 지원이 문제라면 Substack과 유사한 서비스 [메일리](https://maily.so/)를 쓸 수도 있다. 그러나 Substack과 다르게 요금제에 가입해야 메일을 전송할 수 있다는 점이 마음에 들지 않았다.

뉴스레터와 함께 [WordPress](https://wordpress.org/)로 블로그도 만들어 글을 쌓았다. 브런치나 네이버 블로그가 아닌 내 도메인과 로고를 가진 웹사이트를 원했기 때문이다 (슬프지만 나 같은 사람은 SEO에서 불리하다).

뉴스레터와 블로그, 두 갈래 방식을 선택하고 보니 하나에 온전히 집중하지 못하는 문제가 있었다. 일단 하나로 모아야겠다는 생각에 WordPress 뉴스레터 [플러그인](https://wordpress.org/plugins/newsletter/)을추가했다.

안타깝지만 WordPress에서 찾은 플러그인은 기대에 미치지 못했다. 속도는 느리고 디자인도 별로였다. 결국 대책을 찾아보다가 우연히 [Ghost](https://ghost.org/)를 알게 됐다.

Ghost는 멤버십 그리고 뉴스레터 기능을 기본으로 제공한다. 게다가 높은 테마 퀄리티, 자동 SEO, 빠른 속도와 같은 장점이 있어 '이거다'를 외치게 한다. 단순히 생각하면 블로그와 뉴스레터 플랫폼이 가진 장점만 모아 놓은 서비스다.

그렇다고 Ghost가 완벽한 건 아니다. 예를 들어, 여러 영역에서 한국어 지원이 안 되어 코드 수정이 필요했다. 이미지 정렬이 중앙으로 되지 않거나 본문 폰트만 다르게 나오는 문제가 발생하기도 했다. 나 같은 경우 고생했지만, HTML과 CSS에 익숙하다면 빠르게 해결할 수 있는 문제다.

지난 며칠에 거쳐 Ghost로 이전하면서 [많은 걸](https://kangminsuk.com/ghost-tips/) 배웠다. [Headless CMS](https://calvinsnax.com/blog/36783)나 [SSG](https://62che.com/blog/vuepress/%EC%A0%95%EC%A0%81-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%83%9D%EC%84%B1%EA%B8%B0%EB%9E%80.html#%E1%84%8E%E1%85%AC%E1%84%89%E1%85%B5%E1%86%AB-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A3%E1%86%BC)가 뭔지 알고 곧 [Gatsby](https://gatsby.ghost.org/about/)를 front-end로 가져와야겠다고 결심도 했다. 무엇보다 서비스를 선택하기 전 충분히 장단점을 비교해봐야 한다는 걸 깨달았다.

오락가락하기는 했지만, 드디어 원하던 시작이다.