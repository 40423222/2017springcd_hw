Title: small exam
Date: 2017-06-04 13:41
Category: Arduino
Tags: notes, exam
Slug: Arduino-small exam
Author: 40423222

以下為電子實習的exam

<!-- PELICAN_END_SUMMARY -->

### 需要材料:
Wire: n個<br/>
<a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Button-part.html">Button</a>: 一個<br/>
330Ω <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 五個<br/>
1kΩ <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 一個<br/>
10kΩ <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>: 一個<br/>
Potentiometer: 一個(不限電駔大小)<br/>
NPN 9013: 一個<br>
<a href="http://coopermaa2nd.blogspot.tw/2011/05/arduino.html">Arduino Uno</a>: 一個<br/>
<a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-LED.html">LED</a>: 五個<br/>
Breadboard: 一個
DC Motor: 一個



### 電路圖(Circuit diagram)

<img src="./../data/Arduino/small exam/levelMotor.png" width="800" />

### 程式碼(Code)

<pre class="brush: python">
int potenPin = A0; // 可變電阻
int buttonPin = 2; // 按鈕
int ledPins [] {3, 4, 5, 6, 7}; // led燈
int motorPin = 9; // 馬達
// 六段變速 100/300/500/700/900/1000

void setup() {
  Serial.begin(9600);
  pinMode(potenPin, INPUT);
  pinMode(buttonPin, INPUT);
  for(int L = 0; L < 5; L++) {
    pinMode(ledPins[L], OUTPUT);
  }
  pinMode(motorPin, OUTPUT);
}

void loop() {
  int motorValue = analogRead(potenPin);
  Serial.println(motorValue);
  int bStop = digitalRead(buttonPin);
  Serial.println(bStop); 
  if (bStop == LOW) {
  if (motorValue < 100) {
    analogWrite(motorPin, 0);
    for (int L = 0; L < 5; L++) {
      digitalWrite(ledPins[L], LOW);
    }
  }
  else if (motorValue < 300) {
    analogWrite(motorPin, 300);
    for (int L = 0; L < 1; L++) {
      digitalWrite(ledPins[L], HIGH);
    }
    for (int L = 1; L < 5; L++) {
      digitalWrite(ledPins[L], LOW);
    }
  }
  else if (motorValue < 500) {
    analogWrite(motorPin, 500);
    for (int L = 0; L < 2; L++) {
      digitalWrite(ledPins[L], HIGH);
    }
    for (int L = 2; L < 5; L++) {
      digitalWrite(ledPins[L], LOW);
    }
  }
  else if (motorValue < 700) {
    analogWrite(motorPin, 700);
    for (int L = 0; L < 3; L++) {
      digitalWrite(ledPins[L], HIGH);
    }
    for (int L = 3; L < 5; L++) {
      digitalWrite(ledPins[L], LOW);
    }
  }
  else if (motorValue < 900) {
    analogWrite(motorPin, 900);
    for (int L = 0; L < 4; L++) {
      digitalWrite(ledPins[L], HIGH);
    }
    for (int L = 4; L < 5; L++) {
      digitalWrite(ledPins[L], LOW);
    }
  }
  else if (900 < motorValue) {
    analogWrite(motorPin, 1000);
    for (int L = 0; L < 5; L++) {
      digitalWrite(ledPins[L], HIGH);
    }
  }
 }
 else if (bStop == HIGH) {
  for(int s = 0; s < 5; s++) {
  digitalWrite(ledPins[s],LOW);
  }
  digitalWrite(motorPin,LOW);
  delay(100);
 }
}
</pre>



### 影片(Video)
<iframe src="https://player.vimeo.com/video/220175906" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/220175906">small exam</a> from <a href="https://vimeo.com/user57795652">40423222</a> on <a href="https://vimeo.com">Vimeo</a>.</p>



### 參考網站:
levelMotor:
<a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-threeLevel_Motor.html">https://40423222.github.io/2017springcd_hw/blog/Arduino-threeLevel_Motor.html</a><br/>
參考對象:
<a href="https://40423222.github.io/2017springcd_hw/blog/">https://40423222.github.io/2017springcd_hw/blog/</a><br/>
參考對象:
<img src="./../data/Arduino/Button/part/40423222.png" width="150" /><br/>