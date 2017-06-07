Title: 顯示程式指令
Date: 2017-06-08 02:23
Category: HTML
Tags: notes, HTML
Slug: Show code
Author: 40423222

以下為HTML的Show code說明

<!-- PELICAN_END_SUMMARY -->

## <B>顯示程式:</B>

PRE 所產生的效果:
<pre>
	This is a test by <a href="/jang">Roger Jang</a>.
    1<br>2<p><marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee>
</pre>

XMP 所產生的效果:
<xmp>
	This is a test by <a href="/jang">Roger Jang</a>.
    1<br>2<p><marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee>
</xmp>

### 指令
<pre>
<xmp>
PRE 所產生的效果:
<pre>
	This is a test by <a href="/jang">Roger Jang</a>.
    1<br>2<p><marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee>
</pre>

XMP 所產生的效果:
<xmp>
	This is a test by <a href="/jang">Roger Jang</a>.
    1<br>2<p><marquee direction=left  bgcolor="#9999ff" behavior=alternate scrollamount=30 scrolldelay=100>嘿嘿！我是三號跑馬燈</marquee>
</xmp>
</xmp>
</pre>

<table align=center border=1 cellspacing=0 style="border:1px solid black" bgcolor=white>
<tr>
<td class=boldw>講解<td colspan=2>&lt;pre&gt; (Preformatted Text) 所標記起來的是預先已排版過的文章，使其以原貌表現在網頁上。雖然 &ltpre&gt; 可以將所標記的文字以原貌呈現出來，但文章中如果有 HTML 的標籤，瀏覽器仍會對其進行處理後，才會呈現出來。但如果我們只是要顯示標籤但不想要處理顯現標籤時，就可以改用 &ltXMP&gt; 標籤，此標籤會將所有其它的 HTML 標籤原封不動地呈現出來
</table>