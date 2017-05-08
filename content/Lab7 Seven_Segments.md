Title: Lab7 Seven_Segments
Date: 2017-05-08 22:44
Category: Arduino
Tags: notes, w8
Slug: Arduino-Lab7 Seven_Segments
Author: 40423222

以下為Arduino Uno板的Seven_Segments實驗

<!-- PELICAN_END_SUMMARY -->

### 需要材料:
Wire: n個<br/>
330Ω <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 八個<br/>
L-Seven-segment display: 一個<br/>
<a href="http://coopermaa2nd.blogspot.tw/2011/05/arduino.html">Arduino Uno</a>: 一個<br/>
Breadboard: 一個

### 電路圖(Circuit diagram)

<img src="./../data/Arduino/Lab7 Seven_Segments/Circuit diagram.png" width="480" />

### 程式碼(Code)

<pre class="brush: python">
//使用共陰極七段顯示器,也可用於LED排列發光
const int NUM = 8;  //也可用#define NUM 8,但不能只打int NUM = 8;
//使用到的腳位
int pins[NUM] = {2, 3, 4, 5, 10, 11, 12, 13};
//2為右上 3為上 4為點 5為右下 10為左上 11為中 12為下 13為左下
//代表腳位顯示的位置
#define t true //true等於HIHG,另一種寫法
#define f false //false等於LOW,另一種寫法
boolean data[10][NUM] = { //有十種變化(代表數字0~9),腳位有NUM個(8個輸出)
  {t, t, f, t, t, f, t, t}, // 顯示的號碼0
  {t, f, f, t, f, f, f, f}, // 1
  {t, t, f, f, f, t, t, t}, // 2
  {t, t, f, t, f, t, t, f}, // 3
  {t, f, f, t, t, t, f, f}, // 4
  {f, t, f, t, t, t, t, f}, // 5
  {f, t, f, t, t, t, t, t}, // 6
  {t, t, f, t, t, f, f, f}, // 7
  {t, t, f, t, t, t, t, t}, // 8
  {t, t, f, t, t, t, t, f}, // 9
};

void setup() {                
  for(int i = 0; i < NUM; i++){
    //i大於NUM時結束for迴圈,因i < NUM
    pinMode(pins[i], OUTPUT);
    //i為0時pins為2,最多到7(i < NUM),也就是pins = (2~5,10~13)
  } 
}

void writeNumber(int n){
  //建立一個名稱為writeNumber(n)的公式
  for(int i = 0; i < NUM; i++){
    digitalWrite(pins[i], data[n][i] == t ? HIGH : LOW);
    //n在下方,data[幾種][輸出]一種內有8個輸出
    //這一種的輸出,有t(true)的為HIGH不是為LOW
  }
}

void loop() {
  for(int n = 0; n <= 9; n++){
    writeNumber(n);
    //將建立的writeNumber(n)放到這
    delay(1000);
  }
}
</pre>



### 參考網站:
 Lab7 Seven_Segments:
<a href="http://yehnan.blogspot.tw/2012/02/arduinoseven-segment-display.html">http://yehnan.blogspot.tw/2012/02/arduinoseven-segment-display.html</a><br/>
參考對象:
<img src="./../data/Arduino/參考對象/葉難.png" width="150" />