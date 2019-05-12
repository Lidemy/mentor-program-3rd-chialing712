## 請以自己的話解釋 API 是什麼
A 與 B 都是程式設計師，A 與 B 都設計了自己一套的軟體，但有一天 A 想要 B 的程式的某一個功能，但寫一個 B 的功能放進去到自己的程式裡面實在是很麻煩，於是 A 就想到妙招，要求 B 寫一段函式，並按照 B 的要求把函式放進去 A 程式裡面，就可以使用了。 因此即使 A 不知道怎麼寫那個功能，一樣可以使用。
而那段函式就是我們說的 API。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
401 : 沒有出入許可證，不能造訪，這就好像當我要去拿 Twitch 的排名前 20 的遊戲，twitch 要求要至少是它們的會員，所以在造訪之前，必須要提供 Client ID 來做許可證。

403 : 簡單來說就是，Server 已經知道你是誰，但 Server 就是不給你進，也許是你的 IP 被 Block 掉了，也許是服務器人太多，就算你在重複提交要求，還是不會給你進。

408 : 當我們要打開一個頁面(向 server 提出一個 request)，超過 web 服務所設定的時間，就會回傳 408。



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://Love-eating.com

|   說明    | Method | Path   | 參數 | 
|所有餐廳資料|   GET  |/Res    |_limit:限制回傳數量|
|回傳單一餐廳|   GET  |/Res/:id| id|
|刪除餐廳|     DELETE |/Res/:id| id|
|新增餐廳|      POST  |/Res    | name : ' ', address : ' ', style : ' ', OpenAndClostTime : ' '|
|更改餐廳|     PATCH  |/Res/:id| id :, name : ' ', address : ' ', style : ' ', OpenAndClostTime : ' '|

https://Love-eating.com/Res

response as below :
[
  {
    "id": 1,
    "name": "假呼李系"
    "address": "台北市紋身區木星路五段110號"
    "style" : "印度風味"
    "OpenAndCloseTime" : "7:00am - 12:00am"
  },
  {
    "id": 2,
    "name": "粉辣火鍋"
    "address": "台北市紋腳區火星路五段69號"
    "style" : "港式火鍋"
    "OpenAndCloseTime" : "7:00am - 11:00pm"
  },
  {
    "id": 3,
    "name": "小名的家"
    "address": "南投市偏遠地區冥王路一段1號"
    "style" : "媽媽的味道"
    "OpenAndCloseTime" : "7 x 24 小時"
  },
  {
    "id": 4,
    "name": "辣死你馬"
    "address": "台中縣馬來區國際路一段3號"
    "style" : "馬來西亞風味"
    "OpenAndCloseTime" : "1:00am - 17:00pm"
  },


]

https://Love-eating.com/Res/2

response as below :

 {
    "id": 2,
    "name": "粉辣火鍋"
    "address": "台北市紋腳區火星路五段69號"
    "style" : "港式火鍋"
    "OpenAndCloseTime" : "7:00am - 11:00pm"
  }