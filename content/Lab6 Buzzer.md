Title: Lab6 Buzzer
Date: 2017-05-08 21:55
Category: Arduino
Tags: notes, Arduino
Slug: Arduino-Lab6 Buzzer
Author: 40423222

以下為Arduino Uno板的Buzzer實驗

<!-- PELICAN_END_SUMMARY -->

### 需要材料:
Wire: n個<br/>
Buzzer: 一個<br/>
<a href="http://coopermaa2nd.blogspot.tw/2011/05/arduino.html">Arduino Uno</a>: 一個<br/>
Breadboard: 一個

### 電路圖(Circuit diagram)

<img src="./../data/Arduino/Lab6 Buzzer/Circuit diagram.png" width="480" />

### 程式碼(Code)

<pre class="brush: python">
#include "pitches.h" //這就是最重要的重點
int melody[] {
  NOTE_C5,NOTE_D5,NOTE_B0 
}; //吵死了
int duration = 500;

void setup() {
  // put your setup code here, to run once:

}

void loop() {
  for (int thisNote = 0; thisNote < 3; thisNote++) {
    tone(11,melody[thisNote],duration);
    //是的 uno 板子只有 3,5,6,9,10,11 才有 PWM
//不過 tone() 內部是用 timer 控制的，所以不限定任何 pin
//analogWrite() 的頻率是固定的(500Hz)，沒辦法輸出不同音階的聲音
    delay(500);
  }
  delay(2000);
}
</pre>



### 注意
在本程式的資料夾內建立pitches.h,如下圖<br/>
<img src="./../data/Arduino/Lab6 Buzzer/pitches.h.png" width="740" /><br/>

pitches.h的內容<br/>
<pre class="brush: python">
/*************************************************
 * Public Constants
 *************************************************/

#define NOTE_B0  31
#define NOTE_C1  33
#define NOTE_CS1 35
#define NOTE_D1  37
#define NOTE_DS1 39
#define NOTE_E1  41
#define NOTE_F1  44
#define NOTE_FS1 46
#define NOTE_G1  49
#define NOTE_GS1 52
#define NOTE_A1  55
#define NOTE_AS1 58
#define NOTE_B1  62
#define NOTE_C2  65
#define NOTE_CS2 69
#define NOTE_D2  73
#define NOTE_DS2 78
#define NOTE_E2  82
#define NOTE_F2  87
#define NOTE_FS2 93
#define NOTE_G2  98
#define NOTE_GS2 104
#define NOTE_A2  110
#define NOTE_AS2 117
#define NOTE_B2  123
#define NOTE_C3  131
#define NOTE_CS3 139
#define NOTE_D3  147
#define NOTE_DS3 156
#define NOTE_E3  165
#define NOTE_F3  175
#define NOTE_FS3 185
#define NOTE_G3  196
#define NOTE_GS3 208
#define NOTE_A3  220
#define NOTE_AS3 233
#define NOTE_B3  247
#define NOTE_C4  262
#define NOTE_CS4 277
#define NOTE_D4  294
#define NOTE_DS4 311
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_FS4 370
#define NOTE_G4  392
#define NOTE_GS4 415
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_B4  494
#define NOTE_C5  523
#define NOTE_CS5 554
#define NOTE_D5  587
#define NOTE_DS5 622
#define NOTE_E5  659
#define NOTE_F5  698
#define NOTE_FS5 740
#define NOTE_G5  784
#define NOTE_GS5 831
#define NOTE_A5  880
#define NOTE_AS5 932
#define NOTE_B5  988
#define NOTE_C6  1047
#define NOTE_CS6 1109
#define NOTE_D6  1175
#define NOTE_DS6 1245
#define NOTE_E6  1319
#define NOTE_F6  1397
#define NOTE_FS6 1480
#define NOTE_G6  1568
#define NOTE_GS6 1661
#define NOTE_A6  1760
#define NOTE_AS6 1865
#define NOTE_B6  1976
#define NOTE_C7  2093
#define NOTE_CS7 2217
#define NOTE_D7  2349
#define NOTE_DS7 2489
#define NOTE_E7  2637
#define NOTE_F7  2794
#define NOTE_FS7 2960
#define NOTE_G7  3136
#define NOTE_GS7 3322
#define NOTE_A7  3520
#define NOTE_AS7 3729
#define NOTE_B7  3951
#define NOTE_C8  4186
#define NOTE_CS8 4435
#define NOTE_D8  4699
#define NOTE_DS8 4978
</pre>



### 參考網站:
Lab6 Buzzer:
<a href="http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab6.html">http://coopermaa2nd.blogspot.tw/2010/12/arduino-lab6.html</a><br/>
參考對象:
<img src="./../data/Arduino/Cooper Maa.png" width="150" />