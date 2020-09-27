
var btns = document.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
    //注册点击事件不执行，不加括号   
    btns[i].onmouseover = mouseoverHandler;
    btns[i].onmouseout = mouseoutHandler;

    if (btns[i].id == 'startBtn') {
        btns[i].onclick = clickStartHandler;
    }else {
        btns[i].onclick = clickEndHandler;
    }
}

//点击事件
var timer;
function clickStartHandler () {
    var boxs = document.getElementsByClassName('box');    
    timer = setInterval(function () {
        resetColor();
        var nums = getNums();
        var colorlist = getColorlist();
        for (var j = 0; j < nums.length; j++) {
            console.log(nums[j] +'==='+ colorlist[j] );
            boxs[nums[j]].style.backgroundColor = colorlist[j];
        }
    },500);

}

function clickEndHandler() {   
    clearInterval(timer);
    resetColor();
}


//鼠标进入事件
function mouseoverHandler () {
    this.style.color = 'white';
    this.style.backgroundColor = 'orange';
}
//鼠标离开事件
function mouseoutHandler () {
    this.style.color = 'orange';
    this.style.backgroundColor = 'white';
}


//返回0-8之间随机数
function getNums() {
    var nums = [];
    while (nums.length < 3) {
        var num = Math.floor(Math.random()*9);
        if (nums.indexOf(num) == -1) {
            nums.push(num);
        }    
    }
    return nums;
}

//随机获取3种不同颜色
function getColorlist () {
    var colorlist = [];
    while (colorlist.length < 3) {
        var colorstr = "#"
        for (var i = 0; i < 6; i++) {
            colorstr += parseInt(Math.random() * 16).toString(16);
        }
        if (colorlist.indexOf(colorstr) == -1) {
            colorlist.push(colorstr);
        }    
    }
    return colorlist;
}

function resetColor() {
    var boxs = document.getElementsByClassName('box');
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].style.backgroundColor = 'orange';        
    }
}



