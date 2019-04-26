``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第十二行的 function。
2. 第二行，設定 function 名稱為 isValid 並且為 arr 的參數。
3. 第三行，使用 for loop 迴圈，設定變數 i 初始值為 0，並且跑的次數小過於 arr 的長度，且 i 每跑完就增加 1。選擇 arr 第 0 位，大於 0，繼續第 1 位，大於 0，繼續，第 2 位，大於 0，第 3 位，大於 0，第 4 位，大於 0，第 5 位，大於 0，跳到下一個迴圈。
4. 第四行，假設 arr 的第 i 項小於等於 0，return "invalid"。
5. 第六行，設定 i 初始值為 2，並且跑的次數小過於 arr 的長度，且 i 每跑完就增加 1。
6. 第七行，假設第 i 項與第 i 項的前兩項加起來數字不一樣，就會 return "invalid"。數字從 8 開始跑，8 是否為 3 + 5，合理，繼續，13 是否為 5 + 8 ，合理，繼續，22 是否為 8 + 13，不等於 22， return 'invalid'