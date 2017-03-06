/**
 * Created by Administrator on 2017/3/5.
 */
/* 判断大鱼和果实的距离*/

function momFruitCollision() {
    for (var i = 0 ; i < fruit.num ; i++) {
        if (fruit.alive[i]) {
            //大鱼与果实距离的平方
            var len = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if ( len < 900){
                //果实被吃掉
                fruit.dead(i);
                //吃掉果实数量加1
                data.fruitNum++;
                //大鱼身体背景加1
                mom.momBodyCount++;
                if (mom.momBodyCount > 7) {
                    mom.momBodyCount = 7;
                }
                //吃掉蓝色果实
                if (fruit.fruitType[i] == 'blue') {
                    data.double = 2;
                }
            }
        }
    }
}

// mom baby collision

function momBabyCollision() {
    var l = calLength2(mom.x,mom.y,baby.x,baby.y);
    if( l < 900) {
        //baby recover
        baby.babyBodyCount = 0;
        mom.momBodyCount = 0;
        //score update
        data.addScore();
    }
}