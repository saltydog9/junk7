 var a=0,b=0,c=0,d=0,arry=[],may=[],ray=[],say=[];

 bo1=document.querySelector("#bo1");
 bo2=document.querySelector("#bo2");
 bo3=document.querySelector("#bo3");
 bo4=document.querySelector("#bo4");
 bo5=document.querySelector("#bo5");
 bo6=document.querySelector("#bo6");
 bo7=document.querySelector("#bo7");
 bo8=document.querySelector("#bo8");
 bo9=document.querySelector("#bo9");
 b10=document.querySelector("#b10");
 b11=document.querySelector("#b11");
 b12=document.querySelector("#b12");
 b13=document.querySelector("#b13");
 b14=document.querySelector("#b14");
 b15=document.querySelector("#b15");
 ut2=document.querySelector(".ut2");
 ut3=document.querySelector(".ut3");
 ut4=document.querySelector(".ut4");
 ut5=document.querySelector(".ut5");

 ut2.addEventListener("click",function(){
     window.open("http://www.saltydog.eu5.org","_blank")
 });
 ut3.addEventListener("click",function(){
     window.open("https://shrouded-reef-10988.herokuapp.com/","_blank")
 })
 ut4.addEventListener("click",function(){
     fun5();
 })
 ut5.addEventListener("click",function(){
     fun6();
 })

 
document.addEventListener("keydown",function (e) {
    var v=e.key
        switch(v){
          case "i":
            fun1();
            break;
          case "u":
              fun2();
              break;
          case "o":
              fun3();
              break;
          case "p":
              fun4()
        }
         
})


    function fun1() {
        for(var i=0;i<100;i++){
        var rand=Math.floor(Math.random() *100);
            if(rand<=25){
                arry.push(rand);
                bo2.innerHTML=rand;
            }
            else if(rand <=50 && rand > 25) {
                may.push(rand);
                bo3.innerHTML=rand;
            }
            else if(rand <=75 && rand > 50){
                ray.push(rand);
                bo4.innerHTML=rand;
    }
            else {
                say.push(rand);
                bo5.innerHTML=rand;
            }
            }
        }
    function fun2() {
            bo6.innerHTML=arry;
            bo7.innerHTML=may;
            bo8.innerHTML=ray;
            bo9.innerHTML=say;
    }
    function fun3() {
            bo6.innerHTML=arry.length;
            bo7.innerHTML=may.length;
            bo8.innerHTML=ray.length;
            bo9.innerHTML=say.length;
    }
    function fun4() {
        bo2.innerHTML="";
        bo3.innerHTML="";
        bo4.innerHTML="";
        bo5.innerHTML="";
        bo6.innerHTML="";
        bo7.innerHTML="";
        bo8.innerHTML="";
        bo9.innerHTML="";
        arry=[];
        may=[];
        ray=[];
        say=[];
    }
    function fun5(){
        a++;
          var len=document.querySelectorAll(".ox2").length;
             for(i=0;i<len;i++){
                if(a%2==0){
                    document.querySelectorAll(".ox2")[i].style.backgroundColor="purple";
                }                    
                  else {
                      document.querySelectorAll(".ox2")[i].style.backgroundColor="orange";
                  }
                }
            }

    function fun6(){
        var in1=parseInt(inp1.value);
        c=(5/9) * (in1 - 32);
        c=Math.floor(c);
        bo2.innerHTML=c;
    }
 