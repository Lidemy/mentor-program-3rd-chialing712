## 跟你朋友介紹 Git


a.何謂 git?
  git 呢，簡單來說就是做版本控制，也就是把你那多到十個版本的文字檔，妥善的處理，不需要存十幾個檔案，但只要敲敲指令，就可以讓你穿梭在你的版本之間，你要怎麼改都可以！

b. 如何使用 git?
 要使用 git，首先你要先下載控制 git 的地方，可以先下載 cmder ，裡面可以用指令與電腦溝通，來進行版本控制．
 當開啟 git 的時候，你可以使用以下指令來設定你的十個版本的笑話.

 1. git init : 先初始化(生成) Git 的資料夾，初始化後會發現資料夾裡面會有一些檔案，那些都是預先配置好的東西，先存放在那裏．
 2. Git add 你的笑話檔案 : 你要把你所想要版本控制的檔案加入版本控制的行列(stage)．
 3. Git commit -m "對這個笑話版本做註釋" : 把你的檔案新建一個版本，簡單來說就是來個 Snapshot，把這個版本的狀態拍照起來, 然後並且對這個版本進行註釋.
 4. Git log : commit的歷史紀錄，同時你會看到很多密密麻麻的亂碼，那個你可以當作是時間點，當你有想要回去到哪個版本的時候，可以參考第五點．
 5. 當你想要穿梭你的版本的時候，可以使用 : Git checkout “哈希值” ， 這個指令會切換到那個版本的時間點．
 6. 最後呢，如果你想要發布你的笑話，你可以把你的笑話放在網路平台上，那個網路平台叫做　github，除了是你的小小網路雲端之外，同樣的，你可以把你本地的版本控制上傳到網路上的倉庫區來做版本控制，這時候你就可以同步，你可以參考第七點．
 7. 首先你要到你的 github 帳號上面開啟一個 repository 的專案倉庫，並且複製那個專案網址．
 8. 跑到你的 cmder 上面，輸入 git remote add origin "你的專案網址"．
 9. 這時候你可以把你本地上的版本控制的檔案推到 github 上 : git push -u origin master.
 10. 你上傳之後，你的笑話就被廣傳，但一定會有鄉民想要協助你完成你終極的笑話，他們就會把你的版本抓下來修改，然後再上船上去，並且要求與你合併這些笑話，你也可以延續這些鄉民的笑話繼續寫作，但最重要的是，你要把鄉民的合併檔案都抓下來，因此你必須要有下載的動作，可以參考十一點．
 11. 這時候你可以使用 git pull -u origin master 讓版本得到最新的延續.

