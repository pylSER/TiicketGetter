setTimeout(function(){
            pay();
            },500); //等待ajax加载完成（由于界面没有使用jquery，注入jquery会使界面无法正常工作，因                    此选择这样一个比较简单的方式等待document ready）

function pay(){
var yourname='裴玉林';//用户输入乘坐人

var namelist=document.getElementsByTagName("label");//乘坐人集合

for(var i=0;i<namelist.length;i++){
    if(yourname==namelist[i].innerText){
        namelist[i].click();//提交订单
        break;
    }
}

document.getElementById("qr_submit_id").click();//确认提交

}