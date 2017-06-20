Title: 2017springcd-final-2
Date: 2017-06-20 23:28
Category: Course
Tags: notes, bg7
Slug: 2017springcd-final-2
Author: 40423222

期末內容-2

<!-- PELICAN_END_SUMMARY -->

各組員網誌上的 2D 繪圖, 並將程式碼顯示在繪圖網誌文章中


<!-- 導入 Brython 標準程式庫 -->
 <script src="../data/Brython-3.3.1/brython.js"></script>
<script src="../data/Brython-3.3.1/brython_stdlib.js"></script>
 
<!-- 啟動 Brython -->
<script>
window.onload=function(){
// 設定 data/py 為共用程式路徑
brython({debug:1, pythonpath:['./../data/py']});
}
</script>

<!-- 以下實際利用  Brython 繪圖-->
<canvas id="onegear2" width="800" height="600"></canvas>
<div id="onegear_div" width="800" height="20"></div>

<script type="text/python3">
from browser import document as doc
import math
# deg 為角度轉為徑度的轉換因子
deg = math.pi/180.
# 定義 Spur 類別
class Spur(object):
    def __init__(self, ctx):
        self.ctx = ctx
 
# 設定畫線參數 
    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
    def create_line2(self, x1, y1, x2, y2, width=3, fill="green"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
    def create_line3(self, x1, y1, x2, y2, width=3, fill="black"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
        

    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):
        
        rp = 250
        imax = 15
        m=2*rp/n
        a=m
        d=1.25*m
        ra=rp+a

        # self.create_line(起點X, 起點Y, 終點X, 終點Y)
        # 畫出黑色外框
        self.create_line3(0, 0, 0, 600)
        self.create_line3(0, 600, 800, 600)
        self.create_line3(800, 600, 800, 0)
        self.create_line3(800, 0, 0, 0)
        
        # 畫出第一位 4
        self.create_line3(100, 150, 100, 220)
        self.create_line3(100, 220, 200, 220)
        self.create_line3(150, 150, 150, 250)
        
        # 畫出第二位 0
        self.create_line3(230, 150, 230, 250)
        self.create_line3(230, 250, 300, 250)
        self.create_line3(300, 250, 300, 150)
        self.create_line3(300, 150, 230, 150)
        
        # 畫出第三位 4
        self.create_line3(330, 150, 330, 230)
        self.create_line3(330, 230, 430, 230)
        self.create_line3(380, 150, 380, 250)
        
        # 畫出第四位 2
        self.create_line3(480, 150, 550, 150)
        self.create_line3(550, 150, 550, 200)
        self.create_line3(550, 200, 480, 200)
        self.create_line3(480, 200, 480, 250)
        self.create_line3(480, 250, 550, 250)
        
        # 畫出第五位 3
        self.create_line3(580, 150, 650,150 )
        self.create_line3(650, 150, 650, 250)
        self.create_line3(580, 200, 650, 200)
        self.create_line3(580, 250, 650, 250)
        
        # 畫出第六位 2
        self.create_line3(200, 350, 350,350 )
        self.create_line3(350, 350, 350, 450)
        self.create_line3(350, 450, 200, 450)
        self.create_line3(200, 450, 200, 550)
        self.create_line3(200, 550, 350, 550)
        
        # 畫出第七位 2
        self.create_line3(500, 350, 650,350 )
        self.create_line3(650, 350, 650, 450)
        self.create_line3(650, 450, 500, 450)
        self.create_line3(500, 450, 500, 550)
        self.create_line3(500, 550, 650, 550)
        

        if rd>rb:
            dr = (ra-rd)/imax
        else:
            dr=(ra-rb)/imax
        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg
        for j in range(-9, 10, +1):
            ang=-2.*j*math.pi/n+sigma
            ang2=2.*j*math.pi/n+sigma
            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)
            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)
            for i in range(imax+1):
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(alpha-ang)
                ypt=r*math.cos(alpha-ang)
                xd=rd*math.sin(-ang)
                yd=rd*math.cos(-ang)
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)
            for i in range(imax+1):
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(ang2-alpha)
                ypt=r*math.cos(ang2-alpha)
                xd=rd*math.sin(ang2)
                yd=rd*math.cos(ang2)
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)   
                if(i==imax):
                    rfx=midx+xpt
                    rfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            self.create_line(lfx,lfy,rfx,rfy,fill=color)
canvas = doc['onegear2']
ctx = canvas.getContext("2d")
x = (canvas.width)/2
y = (canvas.height)/2
r = 0.8*(canvas.height/2)
# 齒數
n = 36
# 壓力角
pa = 20
Spur(ctx).Gear(x, y, r, n, pa, "blue")
</script>



## 指令:
<pre>
        # 畫出黑色外框
        self.create_line3(0, 0, 0, 600)
        self.create_line3(0, 600, 800, 600)
        self.create_line3(800, 600, 800, 0)
        self.create_line3(800, 0, 0, 0)
        
        # 畫出第一位 4
        self.create_line3(100, 150, 100, 220)
        self.create_line3(100, 220, 200, 220)
        self.create_line3(150, 150, 150, 250)
        
        # 畫出第二位 0
        self.create_line3(230, 150, 230, 250)
        self.create_line3(230, 250, 300, 250)
        self.create_line3(300, 250, 300, 150)
        self.create_line3(300, 150, 230, 150)
        
        # 畫出第三位 4
        self.create_line3(330, 150, 330, 230)
        self.create_line3(330, 230, 430, 230)
        self.create_line3(380, 150, 380, 250)
        
        # 畫出第四位 2
        self.create_line3(480, 150, 550, 150)
        self.create_line3(550, 150, 550, 200)
        self.create_line3(550, 200, 480, 200)
        self.create_line3(480, 200, 480, 250)
        self.create_line3(480, 250, 550, 250)
        
        # 畫出第五位 3
        self.create_line3(580, 150, 650,150 )
        self.create_line3(650, 150, 650, 250)
        self.create_line3(580, 200, 650, 200)
        self.create_line3(580, 250, 650, 250)
        
        # 畫出第六位 2
        self.create_line3(200, 350, 350,350 )
        self.create_line3(350, 350, 350, 450)
        self.create_line3(350, 450, 200, 450)
        self.create_line3(200, 450, 200, 550)
        self.create_line3(200, 550, 350, 550)
        
        # 畫出第七位 2
        self.create_line3(500, 350, 650,350 )
        self.create_line3(650, 350, 650, 450)
        self.create_line3(650, 450, 500, 450)
        self.create_line3(500, 450, 500, 550)
        self.create_line3(500, 550, 650, 550)
        
        左上角為原點 X向右為正 Y向下為正
</pre>