## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<picture></picture> : 依照使用者不同的螢幕解析度，而出現不同的照片。
<aside> : 放在側欄的東西。
<progress value="60" max="100"> : 顯示 60% 的進度條。

## 請問什麼是盒模型（box modal）
盒模型基本上是由四個東西組成分別是: Content、padding、border 與 Margin。
content: 也就是實際內容。
padding: 他會在元素裡面做空間。
Border: 元素的邊寬，與 Padding 一樣，會影響大小。
Margin: 他本身是白色，他不會影響元素本身，但他會影響其他元素。 

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline: 元素基本上都是並排顯示，但不法設定寬高以及上下外距。
inline-block : 他也是並排顯示，但可以設定寬以及上下外距。
block : 基本上都可以調任何參數，會佔據整行。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static :　是按照瀏覽器預設的配置自動呈現在頁面。
relative : 與 static 相同，但他會依照原本的應該出現的位置來進行位置的調整。
fixed : 簡單來說就是與瀏覽器來做定位，無論瀏覽器如何捲動，他依然是在同個位置。
absolute: 就是依照所處的上層容器的相對位置來做位置調整。