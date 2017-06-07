Title: 字體效果
Date: 2017-06-07 11:13
Category: HTML
Tags: notes, HTML
Slug: Font
Author: 40423222

以下為HTML的Font說明

<!-- PELICAN_END_SUMMARY -->

## <B>字體大小:</B>

<pre>
<h1 align="left">H1在左邊</h1>
<p>
</p><h6 align="right">H6在右邊</h6>
<p>
</p><h3 align="center">範圍:H1到H6,H1為最大,H6為最小</h3>
<p>
<font size="1">字體大小為1</font>
</p><p>
<font size="7">字體大小為7</font>
</p><p>
<font size="3">可輸入比7大的值,但最大的顯示只會到7</font>
</p><p>
<font size="-3">可輸入負數來縮小字體大小</font>
</p>
</pre>

### 指令
<pre>
<xmp>
<h1 align="left">H1在左邊</h1>
<p>
</p><h6 align="right">H6在右邊</h6>
<p>
</p><h3 align="center">範圍:H1到H6,H1為最大,H6為最小</h3>
<p>
<font size="1">字體大小為1</font>
</p><p>
<font size="7">字體大小為7</font>
</p><p>
<font size="3">可輸入比7大的值,但最大的顯示只會到7</font>
</p><p>
<font size="-3">可輸入負數來縮小字體大小</font>
</p>
</xmp>
</pre>

<table width="100%" border="10" align="center">
<tbody><tr>
<td style="text-align:center" bgcolor="#FFD78C">標籤</td><td style="text-align:center" bgcolor="#FFD78C">語法</td><td style="text-align:center" bgcolor="#FFD78C">屬性</td>
</tr><tr>
<td style="text-align:center">hn, n=1, 2, 3, 4, 5, 6</td><td style="text-align:center"><hn>要顯示的內容</hn></td><td style="text-align:center">ALIGN = left|right|center
</td></tr></tbody></table>

<hr>

## <B>顏色:</B>
<pre>
<span style="background-color: #ffff00">字幕後方加上黃色</span>
<br>
<font color="#RRGGBB">字的顏色</font>
</pre>

### 指令
<pre>
<xmp>
<span style="background-color: #ffff00">字幕後方加上黃色</span>
<br>
<font color="#RRGGBB">字的顏色</font>
</xmp>
</pre>

<table width="100%" border="10" align="center">
<tbody><tr>
<td style="text-align:center" bgcolor="#FFD78C">標籤</td><td style="text-align:center" bgcolor="#FFD78C">語法</td><td style="text-align:center" bgcolor="#FFD78C">屬性</td>
</tr><tr>
<td style="text-align:center">FONT</td><td style="text-align:center"><FONT>要顯示的內容</FONT></td><td style="text-align:center">SIZE=string, COLOR=#RRGGBB, FACE=font names
</td></tr></tbody></table>

<hr>

## <b>字型:</b>
<pre>
FACE="Symbol" 你便可以顯示羅馬字母 <font face="Symbol">a, b, c, d</font>
<br>
用 FACE="標楷體" 來顯示 <font face="標楷體">中文標楷體</font>
</pre>

### 指令
<pre>
<xmp>
FACE="Symbol" 你便可以顯示羅馬字母 <font face="Symbol">a, b, c, d</font>
<br>
用 FACE="標楷體" 來顯示 <font face="標楷體">中文標楷體</font>
</xmp>
</pre>

<hr>

## <b>其他效果:</b>

<table align=center border=1 cellspacing=0 style="border:1px solid black" bgcolor=white>
<tr><th class=boldw>標籤<th class=boldw>說明及範例
<tr><td>&lt;B&gt;<td>將所標記的文字<b>字型加粗
<tr><td>&lt;I&gt;<td>將所標記的文字<i>變成斜體
<tr><td>&lt;U&gt;<td>將所標記的文字<u>加上底線</u>
<tr><td>&lt;STRIKE&gt;<td>將所標記的文字<strike>畫線刪除</strike>
<tr><td>&lt;BIG&gt;<td>將所標記的文字<big>放大</big>
<tr><td>&lt;SMALL&gt;<td>將所標記的文字<small>縮小</small>
<tr><td>&lt;SUP&gt;<td>將所標記的文字<sup>變成上標</sup>
<tr><td>&lt;SUB&gt;<td>將所標記的文字<sub>變成下標</sub>
<tr><td>&lt;EM&gt;<td>將所標記的文字<em>加以強調</em>
<tr><td>&lt;STRONG&gt;<td>將所標記的文字<strong>加重語氣</strong>
<tr><td>&lt;TT&gt;<td>將所標記的文字以 <tt> Teletype font </tt>字型表現，常用在固定大小的文字上
<tr><td>&lt;CODE&gt;<td>將所標記的文字以 <code> Code Fragment </tt>字型表現，常用在程式碼的敘述上
<tr><td>&lt;VAR&gt;<td>將所標記的文字以 <var> Variable </var>字型表現，常用在算數式的變數上
</table>