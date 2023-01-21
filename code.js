const left_btn=document.querySelector(".slide-l");
const right_btn=document.querySelector(".slide-r");
const scroll_img=document.querySelector('#scroll-img');
var i=0;
var n=2 // no of image -1
right_btn.addEventListener("click",function () {
    if (i<n) {
        i++;
        scroll_img.style.transform= "translateX("+(-99.4*i)+"vw)";
        // console.log("right"+ i);
        document.querySelector("#circle-bar b:nth-child("+(i+1)+")").style.background='white';
        document.querySelector("#circle-bar b:nth-child("+(i)+")").style.background='transparent';
    }
});
left_btn.addEventListener("click",function () {
    if (i>0 && i<=n) {
        i--;
        scroll_img.style.transform= "translateX("+(-99.4*i)+"vw)";
        // console.log("left"+ i);
        document.querySelector("#circle-bar b:nth-child("+(i+1)+")").style.background='white';
        document.querySelector("#circle-bar b:nth-child("+(i+2)+")").style.background='transparent';
        // document.querySelector("#circle-bar b:nth-child("+(i)+")").style.background='transparent';
    }
});
const LookBookSpan1= document.querySelector('#look-book-slider span:nth-child(1)').style;
const LookBookSpan2= document.querySelector('#look-book-slider span:nth-child(2)').style;
const LookBookSpan5= document.querySelector('#look-book-slider span:nth-child(5)').style;
var j=0
function LookBookToggle(funct) {
    var img=['https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/11566988/pexels-photo-11566988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/7700181/pexels-photo-7700181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/3775078/pexels-photo-3775078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/10867236/pexels-photo-10867236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];
    if (funct=="left" && j>0) {
        j--;
        LookBookSpan1.background="url("+img[j]+")";
        LookBookSpan2.background="url("+img[j]+")";
        LookBookSpan5.background="url("+img[j]+")";
        console.log('left');
    }
    else if (funct=="right" && j<5) {
        j++;
        LookBookSpan1.background="url("+img[j]+")";
        LookBookSpan2.background="url("+img[j]+")";
        LookBookSpan5.background="url("+img[j]+")";
        console.log('right');
    }
    LookBookSpan1.backgroundSize ="100% 200%";
    LookBookSpan2.backgroundSize ="100% 110%";
    LookBookSpan5.backgroundSize ="100% 200%";
    LookBookSpan1.backgroundPosition ="bottom";
    LookBookSpan5.backgroundPosition ="bottom";

}