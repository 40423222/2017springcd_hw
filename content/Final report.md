Title: Final report
Date: 2017-06-12 00:24
Category: Arduino
Tags: notes, report
Slug: Final report
Author: 40423222

以下為電子實習的Final report

<!-- PELICAN_END_SUMMARY -->

### Final report
<img src="./../data/Arduino/Final report/Final report.jpg" width="800" />

<hr>

### 需要材料:
Wire: n個
<br/>
<a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Button-part.html">Button</a>: 一個
<br/>
220Ω <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 一個
<br/>
10kΩ <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 一個
<br/>
500Ω <a href="https://40423222.github.io/2017springcd_hw/blog/Potentiometer.html">Potentiometer</a>: 一個(不限電駔大小)
<br/>
<a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-LED.html">LED</a>: 一個
<br/>
<a href="http://coopermaa2nd.blogspot.tw/2011/05/arduino.html">Arduino Uno</a>: 一個
<br/>
Breadboard: 一個

<hr>

### 電路圖(Circuit diagram)

<img src="./../data/Arduino/Final report/Circuit diagram.png" width="800" />

<hr>

### 程式碼(Code)

<pre class="brush: python">
int ledPin = 13;
volatile int state = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  attachInterrupt(1, blink, RISING);
}

void blink()
{
  state = !state; // LOW轉成HIGH 或 HIGH轉成LOW
}

void loop() {
  digitalWrite(ledPin, state);
  delay(50);
}

/* 程式解說
Pin13為開啟LED的腳位
state為HIGH 或 LOW,以attachlnterrupt控制帶入void blink公式
每當Pin3的電壓上升時,將會啟動void blink公式,而啟動Pin3為HIGH或LOW
*/
</pre>

<hr>

### 流程圖
<img src="./../data/Arduino/Final report/流程圖.png" width="600" />

<hr>

### 影片(Video)
<iframe src="https://player.vimeo.com/video/221164790" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/221164790">Final report</a> from <a href="https://vimeo.com/user57795652">40423222</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<hr>

### 使用容器
#### 點擊圖片連結
<br>
<a href="https://cad.onshape.com/documents/0d9dcaa3775eb229925f88ca/w/b125a737f17aa15d29d14b85/e/2a57297807e88460994c0c2f"><img src="./../data/Arduino/Final report/LED Potted.jpg" width="450"  title="點擊左鍵"></a>

<hr>

### 參考網站:
產品影片: https://www.youtube.com/watch?v=FsFbzvJpeMo
<br>
參考對象:
<img src="./../data/Arduino/參考對象/Fresco.jpg" width="150" />
<br/>
產品網站: https://www.pinkoi.com/product/1z4BOWzK?gclid=CM652u-CrdQCFRIKKgodqXIBsA
<br>
參考對象:
<img src="./../data/Arduino/參考對象/pinkoi.jpg" width="150" />