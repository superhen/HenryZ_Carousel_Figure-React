var items = document.getElementsByClassName('item')
var leftBtn = document.getElementsByClassName('left')[0]
var rightBtn = document.getElementsByClassName('right')[0]
var index = 0;
// 第一步 修改index
// 第二部 设置index效果到页面上
leftBtn.onclick = function(){
    goPrev()
}
rightBtn.onclick = function(){
    goNext()
}
var setIndexToView = function(){
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove('active')
    }
    items[index].classList.add('active')
}

var goNext = function(){
    if(index === items.length-1){
        index = 0
    }else{
        index++
    }
    setIndexToView(index)
}
var goPrev = function(){
    if(index === 0){
        index = items.length-1
    }else{
        index--
    }
    setIndexToView(index)
}
