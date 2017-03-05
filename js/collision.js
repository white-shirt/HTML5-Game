/**
 * Created by Administrator on 2017/3/5.
 */
/* 判断大鱼和果实的距离*/

function momFruitCollision() {
    for (var i =0 ; i < fruit.num ; i++) {
        if (fruit.alive[i]) {
            //大鱼与果实距离的平方
            var len = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if ( len < 900){
                //果实被吃掉
                fruit.dead(i);
            }
        }
    }
}