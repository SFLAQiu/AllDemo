(function() {
    function navInit(){
        var tSPageX=0;//touch移动开始X坐标
        var sLeft=0;//开始的Left
        var navWidth=0;//导航宽度
        var wdWidth=$(window).width();//浏览器窗口宽度
        var items=$("#nav li");

        items.each(function(i,item){
            var itemWidth=$(item).width();
            navWidth+=itemWidth;
        });
        //左移动最小距离
        var minLeft=(navWidth-wdWidth+2)*-1;

        $("#nav").on("touchstart",function(e){
            e.preventDefault();
            var touch = e.touches[0];
            tSPageX=touch.pageX;
            sLeft=$(this).position().left;
        }).on("touchmove",function(e){
            e.preventDefault();
            var touch = e.touches[0];
            var pos=touch.pageX-tSPageX;
            var mleft=0;
            //pos>0 往右
            if(pos>0){
                mleft=sLeft+pos;
                console.log(mleft);
                if(mleft>0)mleft=0;
            }else{
                mleft=sLeft+pos;
                console.log(mleft);
                if(mleft<minLeft)mleft=minLeft;
            }
            $(this).css("left",mleft+"px");
        });
    }
    navInit();
})();