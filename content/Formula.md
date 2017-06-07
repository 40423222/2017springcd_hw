Title: 數學公式指令
Date: 2017-06-08 01:24
Category: HTML
Tags: notes, HTML
Slug: Formula
Author: 40423222

以下為HTML的Formula說明

<!-- PELICAN_END_SUMMARY -->

## <B>公式:</B>
<pre>
一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成：
<center>
g(x, <font face=symbol>m</font>, <font face=symbol>S</font>) = 
(2<font face=symbol>p</font>)<sup>-d/2</sup> *
det(<font face=symbol>S</font>)<sup>-0.5</sup> *
exp[-(x-<font face=symbol>m</font>)<sup>T</sup><font face=symbol>S</font><sup>-1</sup>(x-<font face=symbol>m</font>)/2]
</center>
其中 <font face=symbol>m</font> 是此高斯機率密度函數的平均向量（Mean vector），
<font face=symbol>S</font> 則是其共變異矩陣（Covariance matrix）
</pre>

注意: 想要顯示公式,就必須關閉&lt;pre&gt;&lt;/pre&gt;
<br>
<center>
g(x, <font face=symbol>m</font>, <font face=symbol>S</font>) = 
(2<font face=symbol>p</font>)<sup>-d/2</sup> *
det(<font face=symbol>S</font>)<sup>-0.5</sup> *
exp[-(x-<font face=symbol>m</font>)<sup>T</sup><font face=symbol>S</font><sup>-1</sup>(x-<font face=symbol>m</font>)/2]
</center>

### 指令
<pre>
<xmp>
一個 d 維的高斯機率密度函數（Gaussian probability density function）可以表示成：
<center>
g(x, <font face=symbol>m</font>, <font face=symbol>S</font>) = 
(2<font face=symbol>p</font>)<sup>-d/2</sup> *
det(<font face=symbol>S</font>)<sup>-0.5</sup> *
exp[-(x-<font face=symbol>m</font>)<sup>T</sup><font face=symbol>S</font><sup>-1</sup>(x-<font face=symbol>m</font>)/2]
</center>
其中 <font face=symbol>m</font> 是此高斯機率密度函數的平均向量（Mean vector），
<font face=symbol>S</font> 則是其共變異矩陣（Covariance matrix）
</xmp>
</pre>