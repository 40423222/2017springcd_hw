Title: 跑馬燈指令
Date: 2017-06-08 02:13
Category: HTML
Tags: notes, HTML
Slug: Scrolling text
Author: 40423222

以下為HTML的Scrolling text說明

<!-- PELICAN_END_SUMMARY -->

## <B>跑馬燈:</B>
<pre>
<marquee direction=left  bgcolor="#ff9999" behavior=scroll    scrollamount=10 scrolldelay=100>嗨！我是一號跑馬燈</marquee> 
<marquee direction=right bgcolor="#99ff99" behavior=slide     scrollamount=20 scrolldelay=100>Hello！我是二號跑馬燈</marquee> 
<marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee> 
</pre>

### 指令
<pre>
<xmp>
<marquee direction=left  bgcolor="#ff9999" behavior=scroll    scrollamount=10 scrolldelay=100>嗨！我是一號跑馬燈</marquee> 
<marquee direction=right bgcolor="#99ff99" behavior=slide     scrollamount=20 scrolldelay=100>Hello！我是二號跑馬燈</marquee> 
<marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee> 
</xmp>
</pre>

<table align=center border=1 cellspacing=0 style="border:1px solid black" bgcolor=white>
<tr>
<td class=boldw>標籤<td colspan=2>marquee
<tr>
<td class=boldw>功能<td colspan=2>移動字體
<tr>
<td class=boldw>語法<td colspan=2>&lt;marquee&gt;跑馬燈內容&lt;/marquee&gt;
<tr>
<td class=boldw rowspan=6>屬性及說明
<tr>
<td>direction=left|right|center<td>水平線位置的設定，可選擇置左、置中、置右三種方式
<tr>
<td>bgcolor="#ff9999|#99ff99|#9999ff"<td>背景顏色的設定，可選擇紅、綠、藍的顏色
<tr>
<td>behavior=scroll|slide|alternate<td>字體移動方式，可選擇連續左到右、跑一次、左右來回
<tr>
<td>scrollamount=n n=1~無限<td>移動速度為n,n為數值  
<tr>
<td>height="a" width="b"<td>高度跟寬度設定  
<tr>
<td class=boldw>其它說明<td colspan=2>有關跑馬燈的屬性和其意義，讀者大概可以從上述範例猜出來吧？（若真的猜不出來，到搜尋引擎找找，應該可以找到答案。） 
</table>