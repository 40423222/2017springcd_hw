Title: Lab8 photocell
Date: 2017-05-09 22:31
Category: Arduino
Tags: notes, Arduino
Slug: Arduino-Lab8 photocell
Author: 40423222

以下為Arduino Uno板的photocell實驗

<!-- PELICAN_END_SUMMARY -->

### 需要材料:
Wire: n個<br/>
10kΩ <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 一個<br/>
LDR: 一個<br/>
<a href="http://coopermaa2nd.blogspot.tw/2011/05/arduino.html">Arduino Uno</a>: 一個<br/>
Breadboard: 一個

### 電路圖(Circuit diagram)

<img src="./../data/Arduino/Lab8 photocell/Circuit diagram.png" width="480" />

### 程式碼(Code)

<pre class="brush: python">
int ledPin = 10;

int photocellPin = A2; //在越亮的地方電阻就越小,測出來的值就越大
int photocellState = 250; //在我房間桌上(連接10k的地線),不會超出250值
//連接不同電阻的地線,會顯示不同的值,而地線的電阻小,顯示的式值也小,也就代表沒電流流到A2

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  pinMode(photocellPin,INPUT);
}



void loop() {
  int photocellValue = analogRead(photocellPin);
  Serial.println(photocellValue);
  if(photocellValue < photocellState) {
    digitalWrite(ledPin, HIGH);
  }
  else if(photocellState < photocellValue) {
    digitalWrite(ledPin, LOW);
  }
  delay(500);
}
</pre>



### 參考網站:
 Lab8 photocell:
<a href="http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab8-led.html">http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab8-led.html</a><br/>
參考對象:
<img src="./../data/Arduino/Cooper Maa.png" width="150" />