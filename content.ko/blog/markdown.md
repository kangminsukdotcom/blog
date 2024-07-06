---
title: 마크다운 커닝 페이퍼
date: 2024-03-28
description: 가장 많이 쓰는 마크다운 문법을 한곳에 모았습니다.
---
## 제목 (Headers)
```
# 제목
## 제목
### 제목
#### 제목
##### 제목
###### 제목
````

# 제목
## 제목
### 제목
#### 제목
##### 제목
###### 제목

---

## 텍스트 강조
```
안녕하세요
*안녕하세요*
**안녕하세요**
~~안녕하세요~~
```
안녕하세요

*안녕하세요*

**안녕하세요**

~~안녕하세요~~

---

## 목록
```
* 예시1
* 예시2
* 예시3
- 예시1
- 예시2
- 예시3
1. 예시1
2. 예시2
3. 예시3
```

* 예시1
* 예시2
* 예시3
- 예시1
- 예시2
- 예시3
1. 예시1
2. 예시2
3. 예시3

---

## 링크
```
<https://kangminsuk.com>

[같은 탭에서 열기](https://kangminsuk.com)입니다.

[새로운 탭에서 열기](tab:https://kangminsuk.com)입니다.
```
<https://kangminsuk.com>

[같은 탭에서 열기](https://kangminsuk.com)입니다.

[새로운 탭에서 열기](tab:https://kangminsuk.com)입니다.

---

## 각주
```
각주를 달아봅시다.[^1] 이것 참 쉽네요.[^2]

글 하단으로 가보세요...

[^1]: 첫 번째 각주랍니다.

[^2]: 이런 예시도 있답니다.
```
각주를 달아봅시다.[^1] 이것 참 쉽네요.[^2]

글 하단으로 가보세요...

[^1]: 첫 번째 각주랍니다.

[^2]: 이런 예시도 있답니다.

---

## 인용구
```
> 성찰하지 않는 삶은 의미가 없다. - 소크라테스

> 평화, 자유, 발전을 위해 기여하라. - 누군가
```

> 성찰하지 않는 삶은 의미가 없다. - 소크라테스

> 평화, 자유, 발전을 위해 기여하라. - 누군가

---

## 이미지
```
![작은배를 만드는 두 사람](https://en.jagunbae.com/images/91a3fc9e.jpeg)
```

![작은배를 만드는 두 사람](https://en.jagunbae.com/images/91a3fc9e.jpeg)

---

## 코드
```
```javascript
var example = "hello!";
alert(example);```
```

```javascript
var example = "hello!";
alert(example);
```

## 수평선
```---```

---

## 테이블

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

Or...

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |
```

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

Or...

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |

<style>
hr {
  border: none; /* Remove the default border */
  height: 1px; /* Set the height of the line */
  background-color: white; /* Set the color of the line */
  margin-top: 20px; /* Set the top margin */
  margin-bottom: 20px; /* Set the bottom margin */
}
</style>