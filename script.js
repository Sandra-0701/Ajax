var res =document.getElementById('result');
function display(){
    try {
       // alart('hiii');
        var y=10/0;
        if(y==Infinity) throw 'The result is not a number';

    } catch (error) {

        res.innerText=error;
    }
    
}

var para=document.getElementById('ajres');
function ajaxCall(){
    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        var output="";
        for(let i=0;i<data.length;i++){
            output+='<li>'+data[i].name+data[i].email+'</li>'
        }
        para.innerHTML=output;

    }
}
xhttp.open('GET','https://gorest.co.in/public/v2/users',true)
    xhttp.send();
}