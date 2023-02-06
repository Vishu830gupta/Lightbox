function includeHtml() {
    let html = '<div id="container"> <span id="close1"><img id="close "src="images/x-10327.png" alt=""> </span><img id="right" src="images/right-arrow-6405.png"alt=""><img id="left" src="images/left-arrow-6404.png" alt=""><img id="main"src="images/clement-helardot-95YRwf6CNw8-unsplash.jpg" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)

}

let img;
let current;
function imagepop(target) {
    img = document.getElementsByClassName(target)
    for (let i = 0; i < img.length; i++) {
        img[i].style.cursor = 'pointer';
        img[i].addEventListener('click', function () {
            document.getElementById('main').src = this.src;
            document.getElementById('container').style.display = 'block';
        })
    }
    includeHtml();
    document.getElementById('right').addEventListener('click',function(){
        rightimg();
    })
    document.getElementById('left').addEventListener('click',function(){
       leftimg();
    })
    document.getElementById('close1').addEventListener('click',function(){
       close();
    })
    checkarrow();
}
function leftimg(){
    currentimage();
    current--;
    
    document.getElementById('main').src= img[current].src;
    checkarrow();
}
function rightimg(){
    currentimage();
    current++;
    
    document.getElementById('main').src= img[current].src;
    checkarrow();
}

function close(){
    document.getElementById('main').src= "";
    document.getElementById('container').style.display = 'none';
}
function currentimage(){
    for(let i =0;i<img.length;i++){
        if(img[i].src==document.getElementById('main').src){
            
            current=i;
        }
    }
    function checkarrow(){
        currentimage();
        if(current=="0"){
        document.getElementById('left').style.display='none'
        document.getElementById('right').style.display='block'
        }else if (current==img.length-1){
            document.getElementById('left').style.display='none'
        document.getElementById('right').style.display='block'
        }else{
            document.getElementById('left').style.display='block'
        document.getElementById('right').style.display='block'
        }
    }
}
