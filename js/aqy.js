dianji()
function dianji(){
    var A4=document.getElementById("a4");
    var oUl2=document.getElementById("ul2");
    var i=0;
    A4.onclick=function(){
        ////switch(i%2){
        ////    case 0:
        ////        oUl2.style.display="block";
        ////        break;
        ////    case 1:
        ////        oUl2.style.display="none";
        ////        break
        ////}
        //i++;
        if(window.getComputedStyle(oUl2,null).display=="none"){
            console.log(2)
            oUl2.style.display="block";
            return;
        }
         if( window.getComputedStyle(oUl2,null).display=="block"){
             console.log(1)
            oUl2.style.display="none"
        }

    };
    //A4.onmouseover=function(){
    //    console.log(3)
    //    oUl2.style.display="block";
    //};
    //A4.onmouseout=function(){
    //    console.log(4)
    //    oUl2.style.display="none";
    //}

}


//登录
Sign()
function Sign(){
    var oNav=document.getElementById("dNavBox8");
    var oSNav=document.getElementById("navBox8");
    //console.log(oNav)
    var oN=document.getElementById("nav8");
    var oX=document.getElementById("x");
    var oGet=document.getElementById("get");
    var oI=document.getElementById("i");
    var oMap=document.getElementById("map");
    var oI1=document.getElementById("i1");

   on(oSNav,"mousedown",down);
   function down(e){
       oSNav.mx= e.pageX;
       oSNav.my= e.pageY;
       oSNav.x=this.offsetLeft;
       oSNav.y=this.offsetHeight;
       if(oSNav.setCapture){
           oSNav.setCapture()
           on(oSNav,"mousemove",move)
           on(oSNav,"mouseup",off)
       }else{
           oSNav.MOVE=move.bind(this);
           oSNav.UP=up.bind(this);
           on(document,"mosemove",oSNav.MOVE);
           on(document,"mouseup",oSNav.UP);
       }
   }
    function move(e){
        oSNav.style.left= e.pageX-this.mx+this.x+"px";
        oSNav.style.top= e.pageY-this.my+this.y+"px";

    }
    function up(e){


    }



    oN.onclick=function() {
        if (window.getComputedStyle(oNav, null).display == "none") {
            //console.log(2)
            oNav.style.display = "block";
            return;
        }
        if (window.getComputedStyle(oNav, null).display == "block") {
            //console.log(1)
            oNav.style.display = "none"
        }
    }
    oX.onclick=function(){
        oNav.style.display = "none";

    }
    oI.onclick=function(){
        if (window.getComputedStyle(oMap, null).display == "none") {
            console.log(2)
            oMap.style.display = "block";
            oGet.style.color="#fff";
            return;
        }
        if (window.getComputedStyle(oMap, null).display == "block") {
            console.log(1)
            oMap.style.display = "none"
            oGet.style.color="#b2b2b2"

        }

    }


}



//大轮播
bigL()
function bigL() {
    var oNavBox1 = document.getElementById("navBox1");
    var oUl = oNavBox1.getElementsByTagName('ul')[0];
    //console.log(oUl);
    var oLis = oUl.getElementsByTagName("li");
//    var oImgs=oLis.getElementsByTagName("img");
    var oDiv = oNavBox1.getElementsByTagName("div")[0];
    var oSpans = oDiv.getElementsByTagName("span");
    var step = 0;
    oLis[0].style.zIndex=1;
    oLis[0].style.opacity=1;
    oSpans[0].style.background="#7cb132";
    outTime=window.setInterval(time,2000);
    function time(){
        if(step>=oLis.length){
            step=0
        }
        show(step);
        change(step);
        step++
    }
    function show(step){

        for(var i=0;i<oLis.length;i++){
            oLis[i].style.zIndex=0;
            animate(oLis[i],{"opacity":0},600)
        }
        oLis[step].style.zIndex=1;
        animate(oLis[step],{"opacity":1},600)

    }

//点击切换
    for (var i = 0; i < oSpans.length; i++) {
        oSpans[i].index = i;
        oSpans[i].onmouseover = function () {
            //window.clearInterval(outTime)
            //var zhufeng = this.index;
            //change(this.index);
            step = this.index;
            show(step);
            change(step);

            //animate(oLis[step], {"opacity":1}, 600);
        }
    }
    function change(n) {
        for (var i = 0; i < oSpans.length; i++) {
            //oSpans[i].className = "";
            oSpans[i].style.background="";
        }
        //oSpans[n].className = "change";
        oSpans[n].style.background="#7cb132"
    }
//
////xiangzuo
//    var first = oUl.getElementsByTagName("li")[0];
//    var oImg = first.cloneNode(true);
//    oUl.appendChild(oImg);
//    oUl.style.width = "15026px";
//    function left() {
//        step++;
//        if (step > 10) {
//            step = 1;
//            oUl.style.left = 0;
//        }
//        animate(oUl, {"left": -1366 * step});
//        if (step == 10) {
//            change(0)
//        } else {
//            change(step);
//        }
//    }
//
//    outTimer = window.setInterval(left, 3000);
////xiangyou
//    function right() {
//        step--;
//        if (step < 0) {
//            oUl.style.left = -13660 + "px";
//            step = 9
//        }
//        animate(oUl, {"left": -1366 * step})
//        change(step);
//    }
//
////    window.setInterval(right,3000);
////清除定时器
    oNavBox1.onmouseover = function () {
        window.clearInterval(outTime)
    };
    oNavBox1.onmouseout = function () {
        outTime=window.setInterval(time,2000);
    };
}


//小轮播
small()
function small() {
    var oWrap = document.getElementById("wrap");
    var oUl = oWrap.getElementsByTagName("ul")[0];
    var oLis = oUl.getElementsByTagName("li");
    var oImg1 = document.getElementById("img1");
    var oImg2 = document.getElementById("img2");
    var step = 0;
    oLis[0].style.zIndex = 1;
    oLis[0].style.opacity=1;
    outTimers=window.setInterval(timer, 2000);
    function timer() {
        if (step > 1) {
            step = 0;
        }
        show(step);
        step++;
    }
    function show(step) {
        for (var i = 0; i < oLis.length; i++) {
            //oLis[i].i = i;
            oLis[i].style.zIndex = 0;
            animate(oLis[i], {"opacity": 0}, 600);
        }
        oLis[step].style.zIndex = 1;
        animate(oLis[step], {"opacity": 1}, 600)
    }
    oWrap.onmouseover=function(){
        console.log(2)
        window.clearInterval(outTimers);
    };
    oWrap.onmouseout=function(){
        console.log(1)
        outTimers=window.setInterval(timer, 2000)
    };
    oImg1.onclick=function(){
        timer()
    };
    oImg2.onclick=function(){
        timer()
    }




}


//小轮播
xsmall()
function xsmall(){
    var oTab=document.getElementById("tab");
    var oUl=oTab.getElementsByTagName("ul")[0];
    var oLis=oUl.getElementsByTagName("li");
    //console.log(oLis)
    var oB1=document.getElementById("b1");
    var oB2=document.getElementById("b2");
    var step=0;
    oLis[0].style.opacity=1;
    oLis[0].style.zIndex=1;
    outTimer=window.setInterval(timer,2000);
    function timer(){
        if(step>1){
            step=0;
        }
        show(step);
        step++;
    }
    function show(step){
        for(var i=0;i<oLis.length;i++){
            //oLis[i].index=i;
            oLis[i].style.zIndex=0;
            animate(oLis[i],{"opacity":0},600)
        }
        oLis[step].style.zIndex=1;
        animate(oLis[step],{"opacity":1},600)
    }
    oTab.onmouseover=function(){
        console.log(2)
        window.clearInterval(outTimer);
    };
    oTab.onmouseout=function(){
        console.log(1)
        outTimer=window.setInterval(timer, 2000)
    };
    oB1.onclick=function(){
        timer()
    };
    oB2.onclick=function(){
        timer()
    }
}


//比较难的动画
function scb(){
    var oLeft=document.getElementById("left");
    var oAnimate=document.getElementById("animate");
    var oRight=document.getElementById("right");
    var oSmall=document.getElementById("small");
    //console.log(oSmall)
    var oUl=oSmall.getElementsByTagName("ul");
    console.log(oUl)
    var oLis=oSmall.getElementsByTagName("li");
    console.log(oLis);
    var oXd=document.getElementById("xd");
    var oSpans=oXd.getElementsByTagName("span");
    console.log(oSpans);
    //var oDd1=document.getElementById("dd");
    oUl[0].style.opacity=1;
    oUl[0].style.zIndex=1;
    var step=0;
    var siblings=[];


    for(var i=0;i<oLis.length;i++){
        oLis[i].onmouseenter=function(){
            var next=utils.next(this)||utils.pre(this);

            var lastChild=utils.lastChild(this);
            //this.style.width="910px";
            //var change=utils.getCss(this,"width")
            //console.log(change)
            animate(this,{"width":930},600)
            siblings=utils.siblings(this);
            animate(lastChild,{"width":740},600);
            for(var i=0;i<siblings.length;i++){
                //siblings[i].style.width=0
                animate(siblings[i],{"width":0},600)
            }
            animate(next,{"width":190},600);

        }
        oLis[i].onmouseleave=function(){
            window.clearInterval(time);
            var lastChild=utils.lastChild(this);
            //var next=utils.next(this)||utils.pre(this);
            this.style.width="190px";
            siblings=utils.siblings(this);
            lastChild.style.width=0;
            //animate(lastChild,{"width":0},600)
            for(var i=0;i<siblings.length;i++){
                siblings[i].style.width="190px";
                //animate(siblings[i],{"width":170},600)
            }

        }
    }

    //轮播
    time=window.setInterval(timer,3000);
    function timer(){
        step++;
        if(step>1){
            step=0
        }

        show(step);
    }
    function show(step){
        for(var i=0;i<oUl.length;i++){
            oUl[i].style.zIndex=0;
            animate(oUl[i],{"opacity":0},600)
        }
        oUl[step].style.zIndex=1;
        animate(oUl[step],{"opacity":1},600)
    }
    oAnimate.onmouseover=function(){
        window.clearInterval(time);
    }
    oAnimate.onmouseout=function(){
        time=window.setInterval(timer,6000)
    }
    oLeft.onclick=function(){
        window.clearInterval(time)
        timer()
    };
    oRight.onclick=function(){
        window.clearInterval(time);
        timer()
    }
}
scb()


function onScroll(){
    var oN9=document.getElementById("navBox9");
    window.onscroll=function(){
        var scroll=document.documentElement.scrollTop||document.body.scrollTop;
        if(scroll>500){
            animate(oN9,{"opacity":1},600)
        }else{
            animate(oN9,{"opacity":0},600)
        }

    }
}
onScroll()



function scroll(){
    var oNBox=document.getElementById("navBox12");
    console.log(oNBox);
    var oDiv1=document.getElementById("div1");
    console.log(oDiv1)
    var oDiv2=document.getElementById("div2");
    var step=0;
    var client=document.documentElement.clientHeight||document.body.clientHeight;

    var offset=document.documentElement.offsetHeight||docElem.body.offsetHeight;
    //window.onscroll=function(){
    //    var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
    //    if(scrTop>client){
    //        oNBox.style.display="block";
    //    }else{
    //        oNBox.style.display="none";
    //    }
    //
    //}

    oDiv1.onclick=function(){
        var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(scrTop)
        if(scrTop>0){
            utils.getWin("scrollTop",0)
        }
    }
    oDiv2.onclick=function(){
        var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrTop<offset){
            utils.getWin("scrollTop",offset)
        }
    }
    oDiv1.onmouseover=function(){
        var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrTop>0){
            outTimer=window.setInterval(function(){
                if(scrTop==0){
                    window.clearInterval(outTimer);
                    step=0
                }
                step++;
                document.body.scrollTop-=1;

            },10)
        }
    }
    oDiv1.onmouseout=function(){
        window.clearInterval(outTimer)
    }
    oDiv2.onmouseover=function(){
        var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
        var offset=document.documentElement.offsetHeight||document.body.offsetHeight;
        if(scrTop<offset){
            outTimers=window.setInterval(function(){
                if(scrTop==offset){
                    window.clearInterval(outTimers);
                    step=0;
                }
                step++;
                document.body.scrollTop+=1;
            },10)
        }
    }
    oDiv2.onmouseout=function(){
        window.clearInterval(outTimers)
    }


}
scroll()






