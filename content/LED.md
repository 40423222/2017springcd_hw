Title: LED
Date: 2017-05-06 17:44
Category: Arduino
Tags: notes, Arduino
Slug: Arduino-LED
Author: 40423222

以下為LED的解說

<!-- PELICAN_END_SUMMARY -->

### LED零件:<br/>
<img src="./../data/Arduino/LED/LED.png" width="300" /><br/>



### LED裝配方式:<br/>
<img src="./../data/Arduino/LED/install.png" width="650" /><br/>



### 要裝多少電阻:<br/>
假設LED的正向電壓(forward voltage)為2V和正向電流(forward current)為20mA(0.02A),要知道LED這些數值,需查詢產品資料<br/>
知道這些數值後利用,R = V / I   R = 電阻 , V = 電壓 , I = 電流<br/>
2(V) / 0.02(A) = 150 (ohm)<br/>
也就是要使用150Ω <a href="https://40423222.github.io/2017springcd_hw/blog/Arduino-Resistance.html">Resistor</a>

Arduino Uno13腳位的LED有內設電阻,所以不需要接上電阻<br/>
<img src="./../data/Arduino/LED/Arduino pin13.png" width="450" />



### 參考網站:<br/>
1.LED零件:
<a href="https://zh.wikipedia.org/wiki/%E7%99%BC%E5%85%89%E4%BA%8C%E6%A5%B5%E7%AE%A1">https://zh.wikipedia.org/wiki/%E7%99%BC%E5%85%89%E4%BA%8C%E6%A5%B5%E7%AE%A1</a><br/>
參考對象:
<img src="./../data/Arduino/LED/維基百科.png" width="150" /><br/>

2.LED裝配方式:
<a href="https://www.youtube.com/watch?v=cWEJMusT-hI">https://www.youtube.com/watch?v=cWEJMusT-hI</a><br/>
參考對象:
<img src="./../data/Arduino/LED/軟爛番茄.png" width="150" /><br/>

3.要裝多少電阻:<br/>
<a href="https://www.youtube.com/watch?v=cWEJMusT-hI">https://www.youtube.com/watch?v=cWEJMusT-hI</a><br/>
<a href="http://yehnan.blogspot.tw/2012/03/arduinoled220-ohm.html">http://yehnan.blogspot.tw/2012/03/arduinoled220-ohm.html</a><br/>
參考對象:
<img src="./../data/Arduino/LED/軟爛番茄.png" width="150" />
<img src="./../data/Arduino/LED/葉難.png" width="150" />