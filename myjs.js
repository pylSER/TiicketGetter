setInterval(function(){
               clickit();
           },500);  //每隔500ms刷一次

function clickit(){
    var number='G7072';//用户想订购的车次

    var nodelist=document.getElementsByClassName("btn72");//“订购”按钮集合
    
    var len=nodelist.length;
    
    var re="(.*?)"+number+"(.*?)";
                  
    for(var i=0;i<len;i++){
        var str=nodelist[i].getAttribute("onclick");
        var pos=str.search(re);
                  
        if(pos!=-1){
            nodelist[i].click();
            break;
        }
    }
    
    window.location.reload();
}