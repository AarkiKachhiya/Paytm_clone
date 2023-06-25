const headerBtnImg= document.getElementById("header-btn-img");

const onHover =(e) => (headerBtnImg.src= "https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg")
const onLeave=(e) => (headerBtnImg.src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg")

const carausal=document.querySelector(".section-14-child-right");
const leftBtn=document.querySelector(".section-14-controls.left");
const rightBtn=document.querySelector(".section-14-controls.right");

const list=document.querySelector(".section-14-child-right-crds")

const onClickRIght =()  =>
{
    carausal.scrollTo(list.scrollWidth, 0);
    rightBtn.style.opacity=0;
    leftBtn.style.opacity=1;
}

const onClickLeft =()  =>
{
    carausal.scrollTo(-list.scrollWidth, 0);
    rightBtn.style.opacity=1;
    leftBtn.style.opacity=0;
}

const carausal2=document.querySelector("part2");
const leftBtn2=document.querySelector("left-btn2");
const rightBtn2=document.querySelector("right-btn2");

const list2=document.querySelector("cards")

const onClickRIght2 =()  =>
{
    carausal2.scrollTo(list2.scrollWidth, 0);
    rightBtn2.style.opacity=0;
    leftBtn2.style.opacity=1;
}

const onClickLeft2 =()  =>
{
    carausal2.scrollTo(-list2.scrollWidth, 0);
    rightBtn2.style.opacity=1;
    leftBtn2.style.opacity=0;
}