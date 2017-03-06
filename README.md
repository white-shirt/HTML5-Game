# HTML5-Game
![game pic](img/cover.png)

1.绘制海葵
  绘制直线API
  
    * ctx2.save()与ctx2.restore()
    
    * 之间的样式只在这对api之间起作用
    
    * 绘制海葵需要的api
    
    * 1.beginPath()起始一条路径
    
    * 2.moveTo（）把路径移动到画布中的指定点，不创建线条
    
    * 3.lineTo（）添加一个新点，创建该点到最后指定点的线条
    
    * 4.stroke（）绘制已定义的路径
    
    * 5.strokeStyle 设置或返回颜色，渐变或模式
    
    * 6.lineWidth 线条宽度
    
    * 7.lineCap 结束端点样式
    
    * 8.globalAlpha 透明值*/
    
2.绘制果实

  drawImage（）；

  var fruitObj = function ()

 {

      /*属性*/

  }
 
 fruitObj.prototype.init = function ()

 {

    /*初始化果实的属性*/

 }
 
 fruitObj.prototype.draw = function ()

 {

    /*画出果实*/

 }
 
 fruitObj.prototype.born = function ()

 {

    /*随机生成果实的出生点，及随机X,Y坐标*/

 }
 
  fruitObj.prototype.dead = function ()

  {

    /*果实被吃点，即改变果实的alive【i】属性*/

  }
 
  fruitObj.prototype.fruitMonitor = function ()

  {

    /*监视画布中的果实数量*/

  }
  
   fruitObj.prototype.sendFruit = function ()

   {

    /*重新生长果实*/

   }
   
   3.绘制大鱼

      API

        translate();

        rotate();

        Math.atan2(y,x);
        
  
   
