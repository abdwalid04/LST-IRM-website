$(document).ready(function () {
        $('.side_bar').mouseenter(function (e) { 
            $('.side_bar').removeClass('active');
        });
        $('.side_bar').mouseleave(function (e) { 
            $('.side_bar').toggleClass('active');
        });
        $('#disc').mouseenter(function (e) { 
            $(this).toggleClass('show-more')
        });
        $('#disc').mouseleave(function (e) { 
            $(this).removeClass('show-more')
        });
});
var obj1=document.getElementById("objectif1");
var pre1=document.getElementById("prerequis1");
var obj2=document.getElementById("objectif2");
var pre2=document.getElementById("prerequis2");
var obj3=document.getElementById("objectif3");
var pre3=document.getElementById("prerequis3");
var obj4=document.getElementById("objectif4");
var pre4=document.getElementById("prerequis4");
var obj5=document.getElementById("objectif5");
var pre5=document.getElementById("prerequis5");
var obj6=document.getElementById("objectif6");
var pre6=document.getElementById("prerequis6");
var obj7=document.getElementById("objectif7");
var pre7=document.getElementById("prerequis7");
var obj8=document.getElementById("objectif8");
var pre8=document.getElementById("prerequis8");
var obj9=document.getElementById("objectif9");
var pre9=document.getElementById("prerequis9");
var obj10=document.getElementById("objectif10");
var pre10=document.getElementById("prerequis10");
var pre11=document.getElementById("prerequis11");
var dur=document.getElementById("duree");
var enc=document.getElementById("encadrement");
var val=document.getElementById("valid");
var ra1=document.getElementById("rightarrow1");
var ra2=document.getElementById("rightarrow2")
var ra3=document.getElementById("rightarrow3");
var ra4=document.getElementById("rightarrow4");
var ra5=document.getElementById("rightarrow5");
var ra6=document.getElementById("rightarrow6");
var ra7=document.getElementById("rightarrow7");
var ra8=document.getElementById("rightarrow8");
var ra9=document.getElementById("rightarrow9");
var la2=document.getElementById("leftarrow2");
var la3=document.getElementById("leftarrow3");
var la4=document.getElementById("leftarrow4");
var la5=document.getElementById("leftarrow5");
var la6=document.getElementById("leftarrow6");
var la7=document.getElementById("leftarrow7");
var la8=document.getElementById("leftarrow8");
var la9=document.getElementById("leftarrow9");
var la10=document.getElementById("leftarrow10");
var m1=document.getElementById("module1");
var m2=document.getElementById("module2");
var m3=document.getElementById("module3");
var m4=document.getElementById("module4");
var m5=document.getElementById("module5");
var m6=document.getElementById("module6");
var m7=document.getElementById("module7");
var m8=document.getElementById("module8");
var m9=document.getElementById("module9");
var m10=document.getElementById("module10");
var n1=document.getElementById("next1");
var n2=document.getElementById("next2");
var n3=document.getElementById("next3");
var n4=document.getElementById("next4");
var n5=document.getElementById("next5");
var n6=document.getElementById("next6");
var n7=document.getElementById("next7");
var n8=document.getElementById("next8");
var n9=document.getElementById("next9");
var n10=document.getElementById("next10");
var n11=document.getElementById("next11");
var n12=document.getElementById("next12");
var n13=document.getElementById("next13");
var n14=document.getElementById("next14");
var n15=document.getElementById("next15");
var p1=document.getElementById("previous1");
var p2=document.getElementById("previous2");
var p3=document.getElementById("previous3");
var p4=document.getElementById("previous4");
var p5=document.getElementById("previous5");
var p6=document.getElementById("previous6");
var p7=document.getElementById("previous7");
var p8=document.getElementById("previous8");
var p9=document.getElementById("previous9");
var c1=document.getElementById("choix1");
var c2=document.getElementById("choix2");
var c3=document.getElementById("choix3");
var c4=document.getElementById("choix4");
var c5=document.getElementById("choix5");
var c6=document.getElementById("choix6");
var c7=document.getElementById("choix7");
var c8=document.getElementById("choix8");
var c9=document.getElementById("choix9");
var c10=document.getElementById("choix10");

ra1.addEventListener("click",function(){
    m1.style.display="none";
    m2.style.display="flex";
    c1.style.display="none";
    c2.style.display="inline";
    
 });
 la2.addEventListener("click",function(){
        m2.style.display="none";
        m1.style.display="flex";
        c2.style.display="none";
        c1.style.display="inline";
 });
 ra2.addEventListener("click",function(){
        m2.style.display="none";
        m3.style.display="flex";
        c2.style.display="none";
        c3.style.display="inline";
 });
 la3.addEventListener("click",function(){
        m3.style.display="none";
        m2.style.display="flex";
        c3.style.display="none";
        c2.style.display="inline";
        
 });
 ra3.addEventListener("click",function(){
        m3.style.display="none";
        m4.style.display="flex";
        c3.style.display="none";
        c4.style.display="inline";
 });
 ra4.addEventListener("click",function(){
        m4.style.display="none";
        m5.style.display="flex";
        c4.style.display="none";
        c5.style.display="inline";
 });

 la4.addEventListener("click",function(){
        m4.style.display="none";
        m3.style.display="flex";
        c4.style.display="none";
        c3.style.display="inline";
 });
 ra5.addEventListener("click",function(){
        m5.style.display="none";
        m6.style.display="flex";
        c5.style.display="none";
        c6.style.display="inline";
 });

 la5.addEventListener("click",function(){
        m5.style.display="none";
        m4.style.display="flex";
        c5.style.display="none";
        c4.style.display="inline";
 });
 ra6.addEventListener("click",function(){
        m6.style.display="none";
        m7.style.display="flex";
        c6.style.display="none";
        c7.style.display="inline";
 });

 la6.addEventListener("click",function(){
        m6.style.display="none";
        m5.style.display="flex";
        c6.style.display="none";
        c5.style.display="inline";
 });
 ra7.addEventListener("click",function(){
        m7.style.display="none";
        m8.style.display="flex";
        c7.style.display="none";
        c8.style.display="inline";
 });

 la7.addEventListener("click",function(){
        m7.style.display="none";
        m6.style.display="flex";
        c7.style.display="none";
        c6.style.display="inline";
 });
 ra8.addEventListener("click",function(){
        m8.style.display="none";
        m9.style.display="flex";
        c8.style.display="none";
        c9.style.display="inline";
 });

 la8.addEventListener("click",function(){
        m8.style.display="none";
        m7.style.display="flex";
        c8.style.display="none";
        c7.style.display="inline";
 });
 ra9.addEventListener("click",function(){
        m9.style.display="none";
        m10.style.display="flex";
        c9.style.display="none";
        c10.style.display="inline";
 });

 la9.addEventListener("click",function(){
        m9.style.display="none";
        m8.style.display="flex";
        c9.style.display="none";
        c8.style.display="inline";
 });
 la10.addEventListener("click",function(){
        m10.style.display="none";
        m9.style.display="flex";
        c10.style.display="none";
        c9.style.display="inline";
 });
  n1.addEventListener("click",function(){
      obj1.style.display="none";
      pre1.style.display="block";

  });
 p1.addEventListener("click",function(){
     pre1.style.display="none";
     obj1.style.display="block";

 });
 n2.addEventListener("click",function(){
     obj2.style.display="none";
     pre2.style.display="block";

 });
 p2.addEventListener("click",function(){
     pre2.style.display="none";
     obj2.style.display="block";

 });
 n3.addEventListener("click",function(){
     obj3.style.display="none";
     pre3.style.display="block";

 });
 p3.addEventListener("click",function(){
     pre3.style.display="none";
     obj3.style.display="block";

 });
 n4.addEventListener("click",function(){
     obj4.style.display="none";
     pre4.style.display="block";

 });
 p4.addEventListener("click",function(){
     pre4.style.display="none";
     obj4.style.display="block";

 });
 n5.addEventListener("click",function(){
     obj5.style.display="none";
     pre5.style.display="block";

 });
 p5.addEventListener("click",function(){
     pre5.style.display="none";
     obj5.style.display="block";

 });
 n6.addEventListener("click",function(){
     obj6.style.display="none";
     pre6.style.display="block";

 });
 p6.addEventListener("click",function(){
     pre6.style.display="none";
     obj6.style.display="block";

 });
 n7.addEventListener("click",function(){
     obj7.style.display="none";
     pre7.style.display="block";

 });
 p7.addEventListener("click",function(){
     pre7.style.display="none";
     obj7.style.display="block";

 });
 n8.addEventListener("click",function(){
     obj8.style.display="none";
     pre8.style.display="block";

 });
 p8.addEventListener("click",function(){
     pre8.style.display="none";
     obj8.style.display="block";

 });
 n9.addEventListener("click",function(){
     obj9.style.display="none";
     pre9.style.display="block";

 });
 p9.addEventListener("click",function(){
     pre9.style.display="none";
     obj9.style.display="block";

 });
 n10.addEventListener("click",function(){
     obj10.style.display="block";
     pre10.style.display="none";
     pre11.style.display="none";
     dur.style.display="none";
     valid.style.display="none";
     enc.style.display="none";


 });

 n11.addEventListener("click",function(){
    obj10.style.display="none";
     pre10.style.display="none";
     pre11.style.display="none";
     dur.style.display="block";
     valid.style.display="none";
     enc.style.display="none";

});
n12.addEventListener("click",function(){
    obj10.style.display="none";
     pre10.style.display="block";
     pre11.style.display="none";
     dur.style.display="none";
     valid.style.display="none";
     enc.style.display="none";

});
n13.addEventListener("click",function(){
    obj10.style.display="none";
     pre10.style.display="none";
     pre11.style.display="none";
     dur.style.display="none";
     valid.style.display="none";
     enc.style.display="block";

});
n14.addEventListener("click",function(){
    obj10.style.display="none";
     pre10.style.display="none";
     pre11.style.display="block";
     dur.style.display="none";
     valid.style.display="none";
     enc.style.display="none";
});
n15.addEventListener("click",function(){
    obj10.style.display="none";
     pre10.style.display="none";
     pre11.style.display="none";
     dur.style.display="none";
     valid.style.display="block";
     enc.style.display="none";

});