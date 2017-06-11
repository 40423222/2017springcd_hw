var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 第七組協同倉儲 課程倉儲: https://github.com/40423222/2017springcd_bg7 課程投影片: https://40423222.github.io/2017springcd_bg7/ 課程網誌: http://40423222.github.io/2017springcd_bg7/blog/ 組長個人網誌 課程倉儲: https://github.com/40423222/2017springcd_hw 課程投影片 https://40423222.github.io/2017springcd_hw/ 課程網誌:： http://40423222.github.io/2017springcd_hw/blog/ 組員倉儲： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員投影片： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員網誌： 40423202 40423221 40423222 40423228 40423245 40423248 40423251","tags":"misc","url":"./pages/about/"},{"title":"Final report","text":"以下為電子實習的Final report Final report 需要材料: Wire: n個 Button : 一個 220Ω Resistor : 一個 10kΩ Resistor : 一個 500Ω Potentiometer : 一個(不限電駔大小) LED : 一個 Arduino Uno : 一個 Breadboard: 一個 電路圖(Circuit diagram) 程式碼(Code) int ledPin = 13; volatile int state = LOW; void setup() { pinMode(ledPin, OUTPUT); attachInterrupt(1, blink, RISING); } void blink() { state = !state; // LOW轉成HIGH 或 HIGH轉成LOW } void loop() { digitalWrite(ledPin, state); delay(50); } /* 程式解說 Pin13為開啟LED的腳位 state為HIGH 或 LOW,以attachlnterrupt控制帶入void blink公式 每當Pin3的電壓上升時,將會啟動void blink公式,而啟動Pin3為HIGH或LOW */ 流程圖 影片(Video) Final report from 40423222 on Vimeo . 使用容器 點擊圖片連結 參考網站: 產品影片: https://www.youtube.com/watch?v=FsFbzvJpeMo 參考對象: 產品網站: https://www.pinkoi.com/product/1z4BOWzK?gclid=CM652u-CrdQCFRIKKgodqXIBsA 參考對象:","tags":"Arduino","url":"./Final report.html"},{"title":"Potentiometer","text":"以下為Potentiometer的解說 Potentiometer零件: Potentiometer裝配方式: 運作原理: 可變電阻有三個腳位,左右兩腳如上圖是連接火線跟地線(也可左接LOW右接HIGH),而假如你選擇了500Ω,那左右兩腳的電阻就是500Ω,重點是中間的腳位,轉動旋鈕可改變中間腳位的電阻,也就可以改變輸出的電流. 注意: 當你選擇了500Ω的可變電阻,那中間腳位的最大電阻也就是500Ω 參考網站: 1.Potentiometer零件圖: https://store.fut-electronics.com/collections/potentiometers 參考對象:","tags":"Arduino","url":"./Potentiometer.html"},{"title":"HTML標籤","text":"以下為HTML的各自範例 20170608 字體效果 換行指令 表格 數學公式 跑馬燈 程式顯示 HTML-texts 注意: 要一直跟新時間,這樣才能顯示在第一","tags":"HTML","url":"./HTML tags.html"},{"title":"顯示程式指令","text":"以下為HTML的Show code說明 顯示程式: PRE 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 XMP 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 指令 PRE 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 XMP 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 講解 <pre> (Preformatted Text) 所標記起來的是預先已排版過的文章，使其以原貌表現在網頁上。雖然 &ltpre;> 可以將所標記的文字以原貌呈現出來，但文章中如果有 HTML 的標籤，瀏覽器仍會對其進行處理後，才會呈現出來。但如果我們只是要顯示標籤但不想要處理顯現標籤時，就可以改用 &ltXMP;> 標籤，此標籤會將所有其它的 HTML 標籤原封不動地呈現出來 class屬性: 程式碼 注意: 要是沒連上網路,在近端不會執行 This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 指令 程式碼 注意: 要是沒連上網路,在近端不會執行 This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈","tags":"HTML","url":"./Show code.html"},{"title":"跑馬燈指令","text":"以下為HTML的Scrolling text說明 跑馬燈: 嗨！我是一號跑馬燈 Hello！我是二號跑馬燈 嘿嘿！我是三號跑馬燈 指令 嗨！我是一號跑馬燈 Hello！我是二號跑馬燈 嘿嘿！我是三號跑馬燈 標籤 marquee 功能 移動字體 語法 <marquee>跑馬燈內容</marquee> 屬性及說明 direction=left|right|center 水平線位置的設定，可選擇置左、置中、置右三種方式 bgcolor=\"#ff9999|#99ff99|#9999ff\" 背景顏色的設定，可選擇紅、綠、藍的顏色 behavior=scroll|slide|alternate 字體移動方式，可選擇連續左到右、跑一次、左右來回 scrollamount=n n=1~無限 移動速度為n,n為數值 height=\"a\" width=\"b\" 高度跟寬度設定 其它說明 有關跑馬燈的屬性和其意義，讀者大概可以從上述範例猜出來吧？（若真的猜不出來，到搜尋引擎找找，應該可以找到答案。）","tags":"HTML","url":"./Scrolling text.html"},{"title":"數學公式指令","text":"以下為HTML的Formula說明 公式: 一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成： g(x, m , S ) = (2 p ) -d/2 det( S ) -0.5 exp[-(x- m ) T S -1 (x- m )/2] 其中 m 是此高斯機率密度函數的平均向量（Mean vector）， S 則是其共變異矩陣（Covariance matrix） 注意: 想要顯示公式,就必須關閉<pre></pre> g(x, m , S ) = (2 p ) -d/2 det( S ) -0.5 exp[-(x- m ) T S -1 (x- m )/2] 指令 一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成： g(x, m , S ) = (2 p ) -d/2 det( S ) -0.5 exp[-(x- m ) T S -1 (x- m )/2] 其中 m 是此高斯機率密度函數的平均向量（Mean vector）， S 則是其共變異矩陣（Covariance matrix）","tags":"HTML","url":"./Formula.html"},{"title":"表格指令","text":"以下為HTML的Table說明 表格: 標籤 table 語法 <table>要顯示的內容</table> <tr>代表下一行</tr> 屬性 border為表格線粗 width為整個表格的寬度 background為控制背景圖片 colspan這格橫跨幾格 rowspan這格垂直跨幾格 align字體在這格的水平放置位置 valign字體在這格的垂直放置位置 指令 標籤 table 語法 <table>要顯示的內容</table> <tr>代表下一行</tr> 屬性 border為表格線粗 width為整個表格的寬度 background為控制背景圖片 colspan這格橫跨幾格 rowspan這格垂直跨幾格 align字體在這格的水平放置位置 valign字體在這格的垂直放置位置","tags":"HTML","url":"./Table.html"},{"title":"換行指令","text":"以下為HTML的Paragraphs說明 切換到下一行: 利用<br>來切換 到下一行 指令 利用＆lt;br＆gt;來切換 到下一行 注意: 為了不讓「小於」及「大於」符號被瀏覽器解譯，因此要寫成「＆lt;」和「＆gt;」 新的段落: 123 新的一個段落，會和前面的文字隔開一列 123 指令 123 新的一個段落，會和前面的文字隔開一列 123 新增切線分開: 123 換行並加上水平線 靠右視窗寬度50%無陰影粗10: 指令 123 換行並加上水平線 靠右視窗寬度50%無陰影粗10: 注意: 不知為何,無法控制線(hr):陰影跟粗細 集中: 123 文字會自成一個段落，並以縮排的方式表現出來，而且與上下文章保留一段空白 123 指令 123 文字會自成一個段落，並以縮排的方式表現出來，而且與上下文章保留一段空白 123","tags":"HTML","url":"./Paragraphs.html"},{"title":"字體效果","text":"以下為HTML的Font說明 字體大小: H1在左邊 H6在右邊 範圍:H1到H6,H1為最大,H6為最小 字體大小為1 字體大小為7 可輸入比7大的值,但最大的顯示只會到7 可輸入負數來縮小字體大小 指令 H1在左邊 H6在右邊 範圍:H1到H6,H1為最大,H6為最小 字體大小為1 字體大小為7 可輸入比7大的值,但最大的顯示只會到7 可輸入負數來縮小字體大小 標籤 語法 屬性 hn, n=1, 2, 3, 4, 5, 6 要顯示的內容 ALIGN = left|right|center 顏色: 字幕後方加上黃色 字的顏色 指令 字幕後方加上黃色 字的顏色 標籤 語法 屬性 FONT 要顯示的內容 SIZE=string, COLOR=#RRGGBB, FACE=font names 字型: FACE=\"Symbol\" 你便可以顯示羅馬字母 a, b, c, d 用 FACE=\"標楷體\" 來顯示 中文標楷體 指令 FACE=\"Symbol\" 你便可以顯示羅馬字母 a, b, c, d 用 FACE=\"標楷體\" 來顯示 中文標楷體 其他效果: 標籤 說明及範例 <B> 將所標記的文字 字型加粗 <I> 將所標記的文字 變成斜體 <U> 將所標記的文字 加上底線 <STRIKE> 將所標記的文字 畫線刪除 <BIG> 將所標記的文字 放大 <SMALL> 將所標記的文字 縮小 <SUP> 將所標記的文字 變成上標 <SUB> 將所標記的文字 變成下標 <EM> 將所標記的文字 加以強調 <STRONG> 將所標記的文字 加重語氣 <TT> 將所標記的文字以 Teletype font 字型表現，常用在固定大小的文字上 <CODE> 將所標記的文字以 Code Fragment 字型表現，常用在程式碼的敘述上 <VAR> 將所標記的文字以 Variable 字型表現，常用在算數式的變數上","tags":"HTML","url":"./Font.html"},{"title":"small exam","text":"以下為電子實習的exam 需要材料: Wire: n個 Button : 一個 330Ω Resistor : 五個 1kΩ Resistor : 一個 10kΩ Resistor : 一個 Potentiometer: 一個(不限電駔大小) NPN 9013: 一個 Arduino Uno : 一個 LED : 五個 Breadboard: 一個 DC Motor: 一個 電路圖(Circuit diagram) 程式碼(Code) int potenPin = A0; // 可變電阻 int buttonPin = 2; // 按鈕 int ledPins [] {3, 4, 5, 6, 7}; // led燈 int motorPin = 9; // 馬達 // 六段變速 100/300/500/700/900/1000 void setup() { Serial.begin(9600); pinMode(potenPin, INPUT); pinMode(buttonPin, INPUT); for(int L = 0; L < 5; L++) { pinMode(ledPins[L], OUTPUT); } pinMode(motorPin, OUTPUT); } void loop() { int motorValue = analogRead(potenPin); Serial.println(motorValue); int bStop = digitalRead(buttonPin); Serial.println(bStop); if (bStop == LOW) { if (motorValue < 100) { analogWrite(motorPin, 0); for (int L = 0; L < 5; L++) { digitalWrite(ledPins[L], LOW); } } else if (motorValue < 300) { analogWrite(motorPin, 300); for (int L = 0; L < 1; L++) { digitalWrite(ledPins[L], HIGH); } for (int L = 1; L < 5; L++) { digitalWrite(ledPins[L], LOW); } } else if (motorValue < 500) { analogWrite(motorPin, 500); for (int L = 0; L < 2; L++) { digitalWrite(ledPins[L], HIGH); } for (int L = 2; L < 5; L++) { digitalWrite(ledPins[L], LOW); } } else if (motorValue < 700) { analogWrite(motorPin, 700); for (int L = 0; L < 3; L++) { digitalWrite(ledPins[L], HIGH); } for (int L = 3; L < 5; L++) { digitalWrite(ledPins[L], LOW); } } else if (motorValue < 900) { analogWrite(motorPin, 900); for (int L = 0; L < 4; L++) { digitalWrite(ledPins[L], HIGH); } for (int L = 4; L < 5; L++) { digitalWrite(ledPins[L], LOW); } } else if (900 < motorValue) { analogWrite(motorPin, 1000); for (int L = 0; L < 5; L++) { digitalWrite(ledPins[L], HIGH); } } } else if (bStop == HIGH) { for(int s = 0; s < 5; s++) { digitalWrite(ledPins[s],LOW); } digitalWrite(motorPin,LOW); delay(100); } } 影片(Video) small exam from 40423222 on Vimeo . 參考網站: levelMotor: https://40423222.github.io/2017springcd_hw/blog/Arduino-threeLevel_Motor.html 參考對象: https://40423222.github.io/2017springcd_hw/blog/ 參考對象:","tags":"Arduino","url":"./Arduino-small exam.html"},{"title":"HTML-texts","text":"以下為HTML的texts說明 關於texts指令說明 小工具 表格說明: 標籤 說明及範例 <B> 將所標記的文字 字型加粗 <I> 將所標記的文字 變成斜體 <U> 將所標記的文字 加上底線 <STRIKE> 將所標記的文字 畫線刪除 <BIG> 將所標記的文字 放大 <SMALL> 將所標記的文字 縮小 <SUP> 將所標記的文字 變成上標 <SUB> 將所標記的文字 變成下標 <EM> 將所標記的文字 加以強調 <STRONG> 將所標記的文字 加重語氣 <TT> 將所標記的文字以 Teletype font 字型表現，常用在固定大小的文字上 <CODE> 將所標記的文字以 Code Fragment 字型表現，常用在程式碼的敘述上 <VAR> 將所標記的文字以 Variable 字型表現，常用在算數式的變數上 表格指令: 標籤 說明及範例 <B> 將所標記的文字 字型加粗 <I> 將所標記的文字 變成斜體 <U> 將所標記的文字 加上底線 <STRIKE> 將所標記的文字 畫線刪除 <BIG> 將所標記的文字 放大 <SMALL> 將所標記的文字 縮小 <SUP> 將所標記的文字 變成上標 <SUB> 將所標記的文字 變成下標 <EM> 將所標記的文字 加以強調 <STRONG> 將所標記的文字 加重語氣 <TT> 將所標記的文字以 Teletype font 字型表現，常用在固定大小的文字上 <CODE> 將所標記的文字以 Code Fragment 字型表現，常用在程式碼的敘述上 <VAR> 將所標記的文字以 Variable 字型表現，常用在算數式的變數上 換行指令 列如: 利用<br>來切換 到下一行 新的一個段落，會和前面的文字隔開一列 換行並加上水平線 文字會自成一個段落，並以縮排的方式表現出來，而且與上下文章保留一段空白 靠右視窗寬度50%無陰影粗10: 以上為換行指令範例 指令: 利用＆lt;br＆gt;來切換 到下一行 新的一個段落，會和前面的文字隔開一列 換行並加上水平線 文字會自成一個段落，並以縮排的方式表現出來，而且與上下文章保留一段空白 靠右視窗寬度50%無陰影粗10: 以上為換行指令範例 為了不讓「小於」及「大於」符號被瀏覽器解譯，因此要寫成「＆lt;」和「＆gt;」。相關的對照表，會在後續章節說明。 字體大小和位置 列如: H1在左邊 H6在右邊 範圍:H1到H6,H1為最大,H6為最小 字體大小為1 字體大小為7 可輸入比7大的值,但最大的顯示只會到7 可輸入負數來縮小字體大小 FACE=\"Symbol\" 你便可以顯示羅馬字母 a, b, c, d 用 FACE=\"標楷體\" 來顯示 中文標楷體 字的顏色 指令: H1在左邊 H6在右邊 範圍:H1到H6,H1為最大,H6為最小 字體大小為1 字體大小為7 可輸入比7大的值,但最大的顯示只會到7 可輸入負數來縮小字體大小 FACE=\"Symbol\" 你便可以顯示羅馬字母 a, b, c, d 用 FACE=\"標楷體\" 來顯示 中文標楷體 字的顏色 表格說明hn: 標籤 語法 屬性 hn, n=1, 2, 3, 4, 5, 6 <hn>要顯示的內容</hn> ALIGN = left|right|center 表格指令: 標籤 語法 屬性 hn, n=1, 2, 3, 4, 5, 6 <hn>要顯示的內容</hn> ALIGN = left|right|center 表格說明FONT: 標籤 語法 屬性 FONT <FONT>要顯示的內容</FONT> SIZE=string, COLOR=#RRGGBB, FACE=font names 表格指令: 標籤 語法 屬性 FONT <FONT>要顯示的內容</FONT> SIZE=string, COLOR=#RRGGBB, FACE=font names 表格說明表格: 標籤 table 語法 <table>要顯示的內容</table> <tr>代表下一行</tr> 屬性 border為表格線粗 width為整個表格的寬度 background為控制背景圖片 colspan這格橫跨幾格 rowspan這格垂直跨幾格 align字體在這格的水平放置位置 valign字體在這格的垂直放置位置 表格指令: 標籤 table 語法 <table>要顯示的內容</table> <tr>代表下一行</tr> 屬性 border為表格線粗 width為整個表格的寬度 background為控制背景圖片 colspan這格橫跨幾格 rowspan這格垂直跨幾格 align字體在這格的水平放置位置 valign字體在這格的垂直放置位置 數學公式 列如: 一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成： g(x, m , S ) = (2 p ) -d/2 det( S ) -0.5 exp[-(x- m ) T S -1 (x- m )/2] 其中 m 是此高斯機率密度函數的平均向量（Mean vector）， S 則是其共變異矩陣（Covariance matrix） 指令: 一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成： g(x, m , S ) = (2 p ) -d/2 det( S ) -0.5 exp[-(x- m ) T S -1 (x- m )/2] 其中 m 是此高斯機率密度函數的平均向量（Mean vector）， S 則是其共變異矩陣（Covariance matrix） 跑馬燈 列如: 嗨！我是一號跑馬燈 Hello！我是二號跑馬燈 嘿嘿！我是三號跑馬燈 指令: 嗨！我是一號跑馬燈 Hello！我是二號跑馬燈 嘿嘿！我是三號跑馬燈 表格說明: 標籤 marquee 功能 移動字體 語法 <marquee>跑馬燈內容</marquee> 屬性及說明 direction=left|right|center 水平線位置的設定，可選擇置左、置中、置右三種方式 bgcolor=\"#ff9999|#99ff99|#9999ff\" 背景顏色的設定，可選擇紅、綠、藍的顏色 behavior=scroll|slide|alternate 字體移動方式，可選擇連續左到右、跑一次、左右來回 scrollamount=n n=1~無限 移動速度為n,n為數值 height=\"a\" width=\"b\" 高度跟寬度設定 其它說明 有關跑馬燈的屬性和其意義，讀者大概可以從上述範例猜出來吧？（若真的猜不出來，到搜尋引擎找找，應該可以找到答案。） 表格指令: 標籤 hr 功能 劃水平線 語法 &#60hr&#62 屬性及說明 ALIGN=left|right|center 水平線位置的設定，可選擇置左、置中、置右三種方式 NOSHADE 沒有陰影效果的水平線 SIZE=n 水平線的粗細，n 值為整數 WIDTH=n|p% 水平線的長度，可給 Pixel 值也可給百分比值。 其它說明 水平線的顏色跟文件的背景顏色是有相關性的，當背景顏色是白色時，水平線是灰色；當背景顏色是藍色時，水平線是淺藍色。 顯示程式碼 列如: PRE 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 XMP 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 指令: PRE 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 XMP 所產生的效果: This is a test by Roger Jang . 1 2 嘿嘿！我是三號跑馬燈 講解 <pre> (Preformatted Text) 所標記起來的是預先已排版過的文章，使其以原貌表現在網頁上。雖然 &ltpre;> 可以將所標記的文字以原貌呈現出來，但文章中如果有 HTML 的標籤，瀏覽器仍會對其進行處理後，才會呈現出來。但如果我們只是要顯示標籤但不想要處理顯現標籤時，就可以改用 &ltXMP;> 標籤，此標籤會將所有其它的 HTML 標籤原封不動地呈現出來 參考網站 texts: https://mirlab.org/jang/books/html/ 參考對象:","tags":"HTML","url":"./HTML-texts.html"},{"title":"Lab8 photocell","text":"以下為Arduino Uno板的photocell實驗 需要材料: Wire: n個 10kΩ Resistor : 一個 LDR: 一個 Arduino Uno : 一個 Breadboard: 一個 電路圖(Circuit diagram) 程式碼(Code) int ledPin = 10; int photocellPin = A2; //在越亮的地方電阻就越小,測出來的值就越大 int photocellState = 250; //在我房間桌上(連接10k的地線),不會超出250值 //連接不同電阻的地線,會顯示不同的值,而地線的電阻小,顯示的式值也小,也就代表沒電流流到A2 void setup() { pinMode(ledPin, OUTPUT); Serial.begin(9600); pinMode(photocellPin,INPUT); } void loop() { int photocellValue = analogRead(photocellPin); Serial.println(photocellValue); if(photocellValue < photocellState) { digitalWrite(ledPin, HIGH); } else if(photocellState < photocellValue) { digitalWrite(ledPin, LOW); } delay(500); } 參考網站: Lab8 photocell: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab8-led.html 參考對象:","tags":"Arduino","url":"./Arduino-Lab8 photocell.html"},{"title":"Lab7 Seven_Segments","text":"以下為Arduino Uno板的Seven_Segments實驗 需要材料: Wire: n個 330Ω Resistor : 八個 L-Seven-segment display: 一個 Arduino Uno : 一個 Breadboard: 一個 電路圖(Circuit diagram) 程式碼(Code) //使用共陰極七段顯示器,也可用於LED排列發光 const int NUM = 8; //也可用#define NUM 8,但不能只打int NUM = 8; //使用到的腳位 int pins[NUM] = {2, 3, 4, 5, 10, 11, 12, 13}; //2為右上 3為上 4為點 5為右下 10為左上 11為中 12為下 13為左下 //代表腳位顯示的位置 #define t true //true等於HIHG,另一種寫法 #define f false //false等於LOW,另一種寫法 boolean data[10][NUM] = { //有十種變化(代表數字0~9),腳位有NUM個(8個輸出) {t, t, f, t, t, f, t, t}, // 顯示的號碼0 {t, f, f, t, f, f, f, f}, // 1 {t, t, f, f, f, t, t, t}, // 2 {t, t, f, t, f, t, t, f}, // 3 {t, f, f, t, t, t, f, f}, // 4 {f, t, f, t, t, t, t, f}, // 5 {f, t, f, t, t, t, t, t}, // 6 {t, t, f, t, t, f, f, f}, // 7 {t, t, f, t, t, t, t, t}, // 8 {t, t, f, t, t, t, t, f}, // 9 }; void setup() { for(int i = 0; i < NUM; i++){ //i大於NUM時結束for迴圈,因i < NUM pinMode(pins[i], OUTPUT); //i為0時pins為2,最多到7(i < NUM),也就是pins = (2~5,10~13) } } void writeNumber(int n){ //建立一個名稱為writeNumber(n)的公式 for(int i = 0; i < NUM; i++){ digitalWrite(pins[i], data[n][i] == t ? HIGH : LOW); //n在下方,data[幾種][輸出]一種內有8個輸出 //這一種的輸出,有t(true)的為HIGH不是為LOW } } void loop() { for(int n = 0; n <= 9; n++){ writeNumber(n); //將建立的writeNumber(n)放到這 delay(1000); } } 參考網站: Lab7 Seven_Segments: http://yehnan.blogspot.tw/2012/02/arduinoseven-segment-display.html 參考對象:","tags":"Arduino","url":"./Arduino-Lab7 Seven_Segments.html"},{"title":"Lab6 Buzzer","text":"以下為Arduino Uno板的Buzzer實驗 需要材料: Wire: n個 Buzzer: 一個 Arduino Uno : 一個 Breadboard: 一個 電路圖(Circuit diagram) 程式碼(Code) #include \"pitches.h\" //這就是最重要的重點 int melody[] { NOTE_C5,NOTE_D5,NOTE_B0 }; //吵死了 int duration = 500; void setup() { // put your setup code here, to run once: } void loop() { for (int thisNote = 0; thisNote < 3; thisNote++) { tone(11,melody[thisNote],duration); //是的 uno 板子只有 3,5,6,9,10,11 才有 PWM //不過 tone() 內部是用 timer 控制的，所以不限定任何 pin //analogWrite() 的頻率是固定的(500Hz)，沒辦法輸出不同音階的聲音 delay(500); } delay(2000); } 注意 在本程式的資料夾內建立pitches.h,如下圖 pitches.h的內容 / * * * * * * * * Public Constants * * * * * * * / define NOTE_B0 31 define NOTE_C1 33 define NOTE_CS1 35 define NOTE_D1 37 define NOTE_DS1 39 define NOTE_E1 41 define NOTE_F1 44 define NOTE_FS1 46 define NOTE_G1 49 define NOTE_GS1 52 define NOTE_A1 55 define NOTE_AS1 58 define NOTE_B1 62 define NOTE_C2 65 define NOTE_CS2 69 define NOTE_D2 73 define NOTE_DS2 78 define NOTE_E2 82 define NOTE_F2 87 define NOTE_FS2 93 define NOTE_G2 98 define NOTE_GS2 104 define NOTE_A2 110 define NOTE_AS2 117 define NOTE_B2 123 define NOTE_C3 131 define NOTE_CS3 139 define NOTE_D3 147 define NOTE_DS3 156 define NOTE_E3 165 define NOTE_F3 175 define NOTE_FS3 185 define NOTE_G3 196 define NOTE_GS3 208 define NOTE_A3 220 define NOTE_AS3 233 define NOTE_B3 247 define NOTE_C4 262 define NOTE_CS4 277 define NOTE_D4 294 define NOTE_DS4 311 define NOTE_E4 330 define NOTE_F4 349 define NOTE_FS4 370 define NOTE_G4 392 define NOTE_GS4 415 define NOTE_A4 440 define NOTE_AS4 466 define NOTE_B4 494 define NOTE_C5 523 define NOTE_CS5 554 define NOTE_D5 587 define NOTE_DS5 622 define NOTE_E5 659 define NOTE_F5 698 define NOTE_FS5 740 define NOTE_G5 784 define NOTE_GS5 831 define NOTE_A5 880 define NOTE_AS5 932 define NOTE_B5 988 define NOTE_C6 1047 define NOTE_CS6 1109 define NOTE_D6 1175 define NOTE_DS6 1245 define NOTE_E6 1319 define NOTE_F6 1397 define NOTE_FS6 1480 define NOTE_G6 1568 define NOTE_GS6 1661 define NOTE_A6 1760 define NOTE_AS6 1865 define NOTE_B6 1976 define NOTE_C7 2093 define NOTE_CS7 2217 define NOTE_D7 2349 define NOTE_DS7 2489 define NOTE_E7 2637 define NOTE_F7 2794 define NOTE_FS7 2960 define NOTE_G7 3136 define NOTE_GS7 3322 define NOTE_A7 3520 define NOTE_AS7 3729 define NOTE_B7 3951 define NOTE_C8 4186 define NOTE_CS8 4435 define NOTE_D8 4699 define NOTE_DS8 4978 參考網站: Lab6 Buzzer: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab6.html 參考對象:","tags":"Arduino","url":"./Arduino-Lab6 Buzzer.html"},{"title":"Lab5 LED_Bar_Graph","text":"以下為Arduino Uno板的LED_Bar_Graph實驗 需要材料: Wire: n個 330Ω Resistor : 六個 LED : 六個 Arduino Uno : 一個 Breadboard: 一個 電路圖(Circuit diagram) 程式碼(Code) const int ledCount = 6; //有沒有在前面加const都沒差 int ledPins[] = { //腳位能重複輸入 2, 3, 7, 10, 11, 13}; void setup() { //Serial.begin(9600); for (int thisLed = 0; thisLed < ledCount; thisLed++) { //不能等於10因為0也算一個數 pinMode(ledPins[thisLed],OUTPUT); } } void loop() { for (int thisLed = 0; thisLed < ledCount; thisLed++) { int ledSerial = analogRead(thisLed); //analog用於(類比訊號) //digital用於(數位訊號) Read(讀取這值) //Serial.println(ledSerial); //要查看thisLed的值, //就要丟到for裡才行,因為thisLed只會在for裡執行 digitalWrite(ledPins[thisLed], HIGH); delay(300); digitalWrite(ledPins[thisLed], LOW); } for (int thisLed = ledCount-1; thisLed >= 0; thisLed--) { int ledSerial = analogRead(thisLed); Serial.println(ledSerial); digitalWrite(ledPins[thisLed], HIGH); delay(300); if (thisLed == 0) { //在for內使用if delay(1000); } else { digitalWrite(ledPins[thisLed], LOW); } } } 參考網站: Lab5 LED_Bar_Graph: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab5-led-bar-graph.html 參考對象:","tags":"Arduino","url":"./Arduino-Lab5 LED_Bar_Graph.html"},{"title":"H-Seven-segment display","text":"以下為Seven-segment display的解說 陽性七段顯示器零件: H-Seven-segment display裝配方式: 連接 IC 7447 加上電阻以防顯示器燒壞 H-Seven-segment display功用: a~f跟p的腳位接上200電阻接地就會顯示七電顯示器的a~f跟p 參考網站: 1.陽性七段顯示器零件 和 2.H-Seven-segment display裝配方式 https://en.wikipedia.org/wiki/Seven-segment_display http://www.ym.edu.tw/~yhkao/iedu/electronics_03_(7447).pdf 參考對象:","tags":"Arduino","url":"./Arduino-H-Seven-segment display-part.html"},{"title":"IC 7447","text":"以下為IC 7447的解說 IC 7447零件: 用於 陽性七段顯示器 IC 7447裝配方式: 控制IC 7447: 注意: IC 7447只能用在 陽性七段顯示器 上 IC 7448才能使用在陰性七段顯示器上 參考網站: 1.IC 7447零件 和 2.IC 7447裝配方式 和 3.控制IC 7447: http://www.ym.edu.tw/~yhkao/iedu/electronics_03_(7447).pdf 參考對象:","tags":"Arduino","url":"./Arduino-IC 7447-part.html"},{"title":"Button","text":"以下為Button的解說 按鈕零件: 按鈕功用: 1和2為接通狀態,3和4為接通狀態,但1和2跟3和4沒接通 只有在按下按鈕時1和2跟3和4才會接通 電路圖(Circuit diagram) Button裝備方式: 3.3V連接在B1,在不按下按鈕時,3.3V不會通道B3和B4,只會跟B2接通 11腳位為接收訊號,在不按下時訊號為LOW,在按下時訊號為HIGH 在B4接上電阻跟地線(GND),可保護11腳位不被雜訊干擾 Arduino範例: https://40423222.github.io/2017springcd_hw/blog/Arduino-Button.html 參考網站: 1.按鈕零件: https://tw.bid.yahoo.com/item/6-6-5MM%E5%BE%AE%E5%8B%95%E9%96%8B%E9%97%9C-%E8%BC%95%E8%A7%B8%E9%96%8B%E9%97%9C-%E6%8C%89%E9%8D%B5%E9%96%8B%E9%97%9C-%E8%87%A5%E5%BC%8F-%E9%8A%85%E8%85%B3-200%E5%80%8B%E4%B8%80-100035665893 參考對象: 2.按鈕功用: https://tw.bid.yahoo.com/item/6-6-5MM%E5%BE%AE%E5%8B%95%E9%96%8B%E9%97%9C-%E8%BC%95%E8%A7%B8%E9%96%8B%E9%97%9C-%E6%8C%89%E9%8D%B5%E9%96%8B%E9%97%9C-%E8%87%A5%E5%BC%8F-%E9%8A%85%E8%85%B3-200%E5%80%8B%E4%B8%80-100035665893 參考對象: 3.button裝備方式: https://webduino.io/tutorials/tutorial-09-button-led.html 參考對象: 4.Arduino範例: https://40423222.github.io/2017springcd_hw/blog/ 參考對象:","tags":"Arduino","url":"./Arduino-Button-part.html"},{"title":"LED","text":"以下為LED的解說 LED零件: LED裝配方式: 要裝多少電阻: 假設LED的正向電壓(forward voltage)為2V和正向電流(forward current)為20mA(0.02A),要知道LED這些數值,需查詢產品資料 知道這些數值後利用,R = V / I R = 電阻 , V = 電壓 , I = 電流 2(V) / 0.02(A) = 150 (ohm) 也就是要使用150Ω Resistor Arduino Uno13腳位的LED有內設電阻,所以不需要接上電阻 參考網站: 1.LED零件: https://zh.wikipedia.org/wiki/%E7%99%BC%E5%85%89%E4%BA%8C%E6%A5%B5%E7%AE%A1 參考對象: 2.LED裝配方式: https://www.youtube.com/watch?v=cWEJMusT-hI 參考對象: 3.要裝多少電阻: https://www.youtube.com/watch?v=cWEJMusT-hI http://yehnan.blogspot.tw/2012/03/arduinoled220-ohm.html 參考對象:","tags":"Arduino","url":"./Arduino-LED.html"},{"title":"Resistance","text":"以下為Resistance的解說 電阻零件: 1.膜式電阻結構圖 2.線繞電阻結構圖 電阻的值: 1.色環 2.顏色 範例: 電阻相關的公式: P = 功率 , I = 電流 , V = 電壓 , R = 電阻 , G = 電導 1.功率消耗 2.電壓降 也可寫成歐姆定律 3.電導(Conductance) 範例: 參考網站: 1.電阻零件: http://www.shimeng.org/zh/know/21.html 參考對象: 2.電阻的值: https://www.youtube.com/watch?v=cWEJMusT-hI 參考對象: 3.電阻相關的公式: https://www.youtube.com/watch?v=lnC6J9AplMc 參考對象:","tags":"Arduino","url":"./Arduino-Resistance.html"},{"title":"threeLevel_cdMotor","text":"以下為Arduino Uno板的threeLevel_Motor實驗 需要材料: Wire: n個 Button : 兩個 330Ω Resistor : 九個 10kΩ Resistor : 兩個 Potentiometer: 一個(不限電駔大小) LED : 三個 IC 7447 : 一個 H-Seven-segment display : 一個 Arduino Uno : 一個 Breadboard: 兩個 DC Motor: 一個 電路圖(Circuit diagram) 程式碼(Code) int potenPin = A4; //因為可變電阻輸出的是類比,所以要用A0~A5接收 int motorPin = 11; //對馬達的輸入 int buttonStop = 9; //停止馬達 int buttonLevel = 10; //啟動馬達轉速等級 const int NUM = 4; //要用到boolean[]內,要有const int pins[NUM] = {5, 6, 7, 8}; //對應boolean的腳位,不用在[]內打內容??? const int motorLevel = 3; //馬達有的等級,要用到boolean[]內,要有const #define t true //true等於HIHG,另一種寫法 #define f false //false等於LOW,另一種寫法 boolean data[motorLevel][NUM] = { //有3種變化(代表數字0~2),腳位有NUM個(4個輸出) {f, f, f, t}, //1 {t, f, f, f}, //2 {t, f, f, t}, //3 }; int ledCount = 3; //使用的LED數量 int ledPins[] { 2, 3, 4}; //使用到的LED腳位 void setup() { Serial.begin(9600); pinMode(potenPin, INPUT); pinMode(buttonLevel, INPUT); pinMode(buttonStop, INPUT); for (int i = 0; i < NUM; i++) { pinMode(pins[i],OUTPUT); } pinMode(motorPin,OUTPUT); for (int thisLed = 0; thisLed < ledCount; thisLed++) { pinMode(ledPins[thisLed],OUTPUT); } } void sevenSeg(int n) { //用到的腳位,要輸出的腳位 //n等於要輸出的種類 for (int i = 0; i < NUM; i++) { digitalWrite(pins[i],data[n][i] == t? HIGH : LOW); } } void loop() { int potenStates = analogRead(potenPin); Serial.println(potenStates); //可變電阻 if (potenStates < 300) { sevenSeg(0); //要輸出的種類 } else if (potenStates < 600) { sevenSeg(1); } else if (600 < potenStates) { sevenSeg(2); } int level = digitalRead(buttonLevel); //Serial.println(level); //按鈕:啟動變速 if (level == HIGH) { int potenStates = analogRead(potenPin); //Serial.println(potenStates); //可變電阻 //得出可變電阻的範圍0~1023,跟有多少電阻值沒關西 if(potenStates < 300) { analogWrite(motorPin,300); digitalWrite(ledPins[0],HIGH); digitalWrite(ledPins[1],LOW); digitalWrite(ledPins[2],LOW); } else if(potenStates <600) { //if是一段一段的讀區,所以當potenStates小300時,這裡才不會也執行 //因為上方以先執行了,就不會在往下確認 analogWrite(motorPin,600); digitalWrite(ledPins[1],HIGH); digitalWrite(ledPins[0],LOW); digitalWrite(ledPins[2],LOW); } else if(600 < potenStates) { //想要設定eles,就要在後方加上if,例如:else if(定義),不能直接else(定義) analogWrite(motorPin,900); digitalWrite(ledPins[2],HIGH); digitalWrite(ledPins[0],LOW); digitalWrite(ledPins[1],LOW); } } int bStop = digitalRead(buttonStop); if (bStop == HIGH) { for(int s = 0; s < ledCount; s++) { digitalWrite(ledPins[s],LOW); } digitalWrite(motorPin,LOW); } } 測試影片(Test video) 三段變速_直流馬達 from 40423222 on Vimeo .","tags":"Arduino","url":"./Arduino-threeLevel_Motor.html"},{"title":"Lab4 Potentiometer","text":"以下為Arduino Uno板的Potentiometer實驗 需要材料: Wire: n個 330Ω Resistor : 一個 LED : 一個 Potentiometer: 一個(不限電駔大小) Arduino Uno : 一個 電路圖(Circuit diagram) 程式碼(Code) int potPin = 3; int ledPin = 9; void setup() { Serial.begin(9600); //這題沒設pinMode(腳位,(OUT or IN)PUT) // pinMode(potPin,INPUT) // pinMode(ledPin,OUTPUT) } void loop() { int sensorValue = analogRead(potPin); //讀取potPin接收到的值,以sensorValue表示 Serial.println(sensorValue,DEC); // 如果將()內的sensorValue/4會?,不使用DEC會? sensorValue = sensorValue/4; analogWrite(ledPin,sensorValue); delay(50); } 參考網站: Lab4 Potentiometer: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab4.html.html 參考對象:","tags":"Arduino","url":"./Arduino-Potentiometer.html"},{"title":"Lab3 Fade","text":"以下為Arduino Uno板的Fade實驗 需要材料: Wire: n個 330Ω Resistor : 一個 LED : 一個 Arduino Uno : 一個 電路圖(Circuit diagram) 程式碼(Code) int brightness = 0; //亮度,保存目前亮度 int fadeAmount = 5; //退色量,亮度調整 //int but = 0; void setup() { //Serial.begin(9600); //設定傳輸速度的值 pinMode(9,OUTPUT); } void loop() { //but = digitalRead(brightness); //將輸出的數值存入變數but裡,因為 //Serial.println(but); //在監控視窗裡顯示出序列傳輸的數值 //因為有錯誤,先關閉Serial analogWrite(9,brightness); //9腳位輸出,brightness的值 brightness = brightness + fadeAmount; //每一輪brightness會加5或-5,取決於fadeAmount的+或- if (brightness == 0 || brightness == 155) { //如果brightness等於0或是等於155,執行下方指令 fadeAmount = -fadeAmount; } delay(100); } 參考網站: Lab3 Fade: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab3-led.html 參考對象:","tags":"Arduino","url":"./Arduino-Fade.html"},{"title":"Lad2 Button","text":"以下為Arduino Uno板的Button實驗 需要材料: Wire: n個 10kΩ Resistor : 一個 Button : 一個 LED : 一個 Arduino Uno : 一個 電路圖(Circuit diagram) 程式碼(Code) const int buttonPin = 2; //不知為何要在前方打上const //2腳位連結到按鈕 const int ledPin = 13; //13腳位連結到 int buttonState = 0; //宣告buttonState等於0 void setup() { pinMode(buttonPin,INPUT); //將2腳位設定為輸入,也就是接收 pinMode(ledPin,OUTPUT); } void loop() { buttonState = digitalRead(buttonPin); //讀取buttonPin接收的訊號,以buttonState表示 if (buttonState == HIGH) { //如果buttonState等於HIGH,就執行下方指令 digitalWrite(ledPin, HIGH); } //如果buttonState不等於HIGH,就執行下方指令 else { digitalWrite(ledPin, LOW); } } 參考網站: Lad2 Button: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab2-led.html 參考對象:","tags":"Arduino","url":"./Arduino-Button.html"},{"title":"Lad1 Blink","text":"以下為Arduino Uno板的LED燈實驗 需要材料: LED : 一個 Arduino Uno : 一個 電路圖(Circuit diagram) 程式碼(Code) void setup() { pinMode(13,OUTPUT); //13腳位為輸出 } void loop() { digitalWrite(13,HIGH); //13腳位輸出HIGH delay(1000); //持續1秒 digitalWrite(13,LOW); //13腳位輸出LOW delay(1000); } 參考網站: Lad1 Blink: http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab1-blinking-led.html 參考對象:","tags":"Arduino","url":"./Arduino-Blink.html"},{"title":"小組倉儲","text":"bg7小組的內容 組長倉儲 上課的內容 請到小組的 倉儲 或 網誌 觀看: 小組倉儲 小組網誌","tags":"Course","url":"./2017spring-cd-bg7.html"}]};