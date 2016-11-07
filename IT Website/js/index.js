var arr = new Array();
arr[0]="./images/bn1.jpeg";//放图片地址
arr[1]="./images/bn2.jpeg";
arr[2]="./images/bn3.jpeg";
arr[3]="./images/bn4.jpeg";
var num=0;
setInterval(turnpic,4000); //每隔4秒转换图片
function turnpic(){
    var banner = document.getElementById("banner");
    if(num==arr.length-1)
        num=0;
    else
        num+=1;
    banner.src = arr[num];
}

var contact = document.getElementById('contact');
var contactTab = document.getElementById('contact_tab');
contact.onmouseover = function () {
    contactTab.style.display = "block";
};
contact.onmouseout = function () {
    contactTab.style.display = "none";
};