var tipuesearch = {"pages":[{"url":"./pages/about/","text":"2017Spring 機械設計工程系協同產品設計實習 組長網誌 課程倉儲: https://github.com/40423222/2017springcd_bg7 課程投影片 https://40423222.github.io/2017springcd_bg7/ 課程網誌:： http://40423222.github.io/2017springcd_bg7/blog/ 組員倉儲： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員網誌： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員投影片： 40423202 40423221 40423222 40423228 40423245 40423248 40423251","tags":"misc","title":"About"},{"url":"./Arduino-threeLevel_Motor.html","text":"以下為Arduino Uno板的threeLevel_Motor實驗 需要材料: Wire: n個 button: 兩個 330Ω Resistor: 九個 10kΩ Resistor: 兩個 Potentiometer: 一個(不限電駔大小) 7447: 一個 LED燈: 三個 Arduino Uno: 一個 Breadboard: 兩個 電路圖(Circuit diagram) 程式碼(Code) int potenPin = A4; //因為可變電阻輸出的是類比,所以要用A0~A5接收 int motorPin = 11; //對馬達的輸入 int buttonStop = 9; //停止馬達 int buttonLevel = 10; //啟動馬達轉速等級 const int NUM = 4; //要用到boolean[]內,要有const int pins[NUM] = {5, 6, 7, 8}; //對應boolean的腳位,不用在[]內打內容??? const int motorLevel = 3; //馬達有的等級,要用到boolean[]內,要有const #define t true //true等於HIHG,另一種寫法 #define f false //false等於LOW,另一種寫法 boolean data[motorLevel][NUM] = { //有3種變化(代表數字0~2),腳位有NUM個(4個輸出) {f, f, f, t}, //1 {t, f, f, f}, //2 {t, f, f, t}, //3 }; int ledCount = 3; //使用的LED數量 int ledPins[] { 2, 3, 4}; //使用到的LED腳位 void setup() { Serial.begin(9600); pinMode(potenPin, INPUT); pinMode(buttonLevel, INPUT); pinMode(buttonStop, INPUT); for (int i = 0; i < NUM; i++) { pinMode(pins[i],OUTPUT); } pinMode(motorPin,OUTPUT); for (int thisLed = 0; thisLed < ledCount; thisLed++) { pinMode(ledPins[thisLed],OUTPUT); } } void sevenSeg(int n) { //用到的腳位,要輸出的腳位 //n等於要輸出的種類 for (int i = 0; i < NUM; i++) { digitalWrite(pins[i],data[n][i] == t? HIGH : LOW); } } void loop() { int potenStates = analogRead(potenPin); Serial.println(potenStates); //可變電阻 if (potenStates < 300) { sevenSeg(0); //要輸出的種類 } else if (potenStates < 600) { sevenSeg(1); } else if (600 < potenStates) { sevenSeg(2); } int level = digitalRead(buttonLevel); //Serial.println(level); //按鈕:啟動變速 if (level == HIGH) { int potenStates = analogRead(potenPin); //Serial.println(potenStates); //可變電阻 //得出可變電阻的範圍0~1023,跟有多少電阻值沒關西 if(potenStates < 300) { analogWrite(motorPin,300); digitalWrite(ledPins[0],HIGH); digitalWrite(ledPins[1],LOW); digitalWrite(ledPins[2],LOW); } else if(potenStates <600) { //if是一段一段的讀區,所以當potenStates小300時,這裡才不會也執行 //因為上方以先執行了,就不會在往下確認 analogWrite(motorPin,600); digitalWrite(ledPins[1],HIGH); digitalWrite(ledPins[0],LOW); digitalWrite(ledPins[2],LOW); } else if(600 < potenStates) { //想要設定eles,就要在後方加上if,例如:else if(定義),不能直接else(定義) analogWrite(motorPin,900); digitalWrite(ledPins[2],HIGH); digitalWrite(ledPins[0],LOW); digitalWrite(ledPins[1],LOW); } } int bStop = digitalRead(buttonStop); if (bStop == HIGH) { for(int s = 0; s < ledCount; s++) { digitalWrite(ledPins[s],LOW); } digitalWrite(motorPin,LOW); } } 測試影片(Test video) 三段變速_直流馬達 from 40423222 on Vimeo .","tags":"Arduino","title":"threeLevel_Motor"},{"url":"./Arduino-Potentiometer.html","text":"以下為Arduino Uno板的Potentiometer實驗 需要材料: Wire: n個 330 Resistor: 一個 LED燈: 一個 Potentiometer: 一個(不限電駔大小) Arduino Uno: 一個 電路圖(Circuit diagram) 程式碼(Code) int potPin = 3; int ledPin = 9; void setup() { Serial.begin(9600); //這題沒設pinMode(腳位,(OUT or IN)PUT) // pinMode(potPin,INPUT) // pinMode(ledPin,OUTPUT) } void loop() { int sensorValue = analogRead(potPin); //讀取potPin接收到的值,以sensorValue表示 Serial.println(sensorValue,DEC); // 如果將()內的sensorValue/4會?,不使用DEC會? sensorValue = sensorValue/4; analogWrite(ledPin,sensorValue); delay(50); } 參考網站","tags":"Arduino","title":"Lab4 Potentiometer"},{"url":"./Arduino-Fade.html","text":"以下為Arduino Uno板的Fade實驗 需要材料: Wire: n個 330 Resistor: 一個 LED燈: 一個 Arduino Uno: 一個 電路圖(Circuit diagram) 程式碼(Code) int brightness = 0; //亮度,保存目前亮度 int fadeAmount = 5; //退色量,亮度調整 //int but = 0; void setup() { //Serial.begin(9600); //設定傳輸速度的值 pinMode(9,OUTPUT); } void loop() { //but = digitalRead(brightness); //將輸出的數值存入變數but裡,因為 //Serial.println(but); //在監控視窗裡顯示出序列傳輸的數值 //因為有錯誤,先關閉Serial analogWrite(9,brightness); //9腳位輸出,brightness的值 brightness = brightness + fadeAmount; //每一輪brightness會加5或-5,取決於fadeAmount的+或- if (brightness == 0 || brightness == 155) { //如果brightness等於0或是等於155,執行下方指令 fadeAmount = -fadeAmount; } delay(100); } 參考網站","tags":"Arduino","title":"Lab3 Fade"},{"url":"./Arduino-Button.html","text":"以下為Arduino Uno板的Button實驗 需要材料: Wire: n個 10k Resistor: 一個 Button: 一個 LED燈: 一個 Arduino Uno: 一個 電路圖(Circuit diagram) 程式碼(Code) const int buttonPin = 2; //不知為何要在前方打上const //2腳位連結到按鈕 const int ledPin = 13; //13腳位連結到 int buttonState = 0; //宣告buttonState等於0 void setup() { pinMode(buttonPin,INPUT); //將2腳位設定為輸入,也就是接收 pinMode(ledPin,OUTPUT); } void loop() { buttonState = digitalRead(buttonPin); //讀取buttonPin接收的訊號,以buttonState表示 if (buttonState == HIGH) { //如果buttonState等於HIGH,就執行下方指令 digitalWrite(ledPin, HIGH); } //如果buttonState不等於HIGH,就執行下方指令 else { digitalWrite(ledPin, LOW); } } 參考網站","tags":"Arduino","title":"Lad2 Button"},{"url":"./Arduino-Blink.html","text":"以下為Arduino Uno板的LED燈實驗 需要材料: LED燈: 一個 Arduino Uno: 一個 電路圖(Circuit diagram) 程式碼(Code) void setup() { pinMode(13,OUTPUT); //13腳位為輸出 } void loop() { digitalWrite(13,HIGH); //13腳位輸出HIGH delay(1000); //持續1秒 digitalWrite(13,LOW); //13腳位輸出LOW delay(1000); } 參考網站","tags":"Arduino","title":"Lad1 Blink"},{"url":"./2017spring-cd-bg7.html","text":"bg7小組的內容 組長倉儲 小組倉儲 小組網誌","tags":"Course","title":"小組倉儲"}]};