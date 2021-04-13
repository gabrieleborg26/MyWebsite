


var doc, bod, htm;
addEventListener('load', function(){
  doc = document; bod = doc.body; htm = doc.documentElement;

  

  addEventListener('scroll', function(){

    console.log("ayyp")

    doc.querySelector('.header_one').style.top  = htm.scrollTop > 100 ? "-100px" : "0";
    doc.querySelector('.header_one').style.opacity  = htm.scrollTop > 100 ? "0" : "1";

    
    doc.querySelector('.header_two').style.bottom  = htm.scrollTop > 100 ? "-100px" : "0";
    doc.querySelector('.header_two').style.opacity  = htm.scrollTop > 100 ? "0" : "1";


    doc.querySelector('.one_one').style.top  = htm.scrollTop > 200 && htm.scrollTop < 1000 ?   "0" : "-100px";
    doc.querySelector('.one_one').style.opacity  = htm.scrollTop > 200 && htm.scrollTop < 1000 ?   "1" : "0";

    
    doc.querySelector('.two_two').style.bottom  = htm.scrollTop > 200 && htm.scrollTop < 1000?  "0" : "-100px" ;
    doc.querySelector('.two_two').style.opacity  = htm.scrollTop > 200 && htm.scrollTop < 1000? "1" : "0" ;

    doc.querySelector('#header').style.opacity  = htm.scrollTop > 100 ? "0" : "1";


    console.log(htm.scrollTop)
    // doc.querySelector('#front_right').style.top  = htm.scrollTop > 300 ?  (90 -(htm.scrollTop/30)) +"%" : "50%";
    // doc.querySelector('#front_left').style.top  = htm.scrollTop > 300 ?  (100 -(htm.scrollTop/70)) +"%": "50%";

    doc.querySelector('.video').style.transform  = htm.scrollTop > 1200 ? "scale(1.2) translateY(0%)": "scale(1) translateY(0%)";
    

    if(screen.width > 480){

             doc.querySelector('#header-img').style.transform  = htm.scrollTop > 100 ? "scale(1.2) translateY(-15%)  translateX(-2%)" : "scale(1) translateY(-15%)  translateX(-2%)";


            doc.querySelector('#front_left').style.transform =  htm.scrollTop > 350 ? "translate3d(30px,"+((htm.scrollTop/20)-110)+"px, 30px)": "translate3d(0px, 200px, 0px)";
            doc.querySelector('#front_right').style.transform =  htm.scrollTop > 300 ? "translate3d(0px,"+((-htm.scrollTop/7)-90)+"px, 0px)": "translate3d(0px, 200px, 0px)";
            
            doc.querySelector('#back_left').style.transform =  htm.scrollTop > 200 ? "translate3d(-50px,"+(-((htm.scrollTop/7)+50))+"px, 0px)": "translate3d(0px, 200px, 0px)";
            doc.querySelector('#back_right').style.transform =  htm.scrollTop > 200 ? "translate3d(0px,"+((htm.scrollTop/7)-110)+"px, 0px)": "translate3d(0px, 200px, 0px)";
    }
    else{

            doc.querySelector('#header-img').style.transform  = htm.scrollTop > 100 ? "scale(1.2) translateY(-15%)  translateX(0%)" : "scale(1) translateY(-15%)  translateX(-25%)";

            doc.querySelector('#front_left').style.transform =  htm.scrollTop > 200 ? "translate3d(0px,"+((htm.scrollTop/20)-90)+"px, 0px)": "translate3d(0px, 200px, 0px)";
            doc.querySelector('#front_right').style.transform =  htm.scrollTop > 200 ? "translate3d(0px,"+((-htm.scrollTop/20)-50)+"px, 0px)": "translate3d(0px, 200px, 0px)";
            
            doc.querySelector('#back_left').style.transform =  htm.scrollTop > 200 ? "translate3d(-50px,"+(-(htm.scrollTop/20))+"px, 0px)": "translate3d(0px, 200px, 0px)";
            doc.querySelector('#back_right').style.transform =  htm.scrollTop > 200 ? "translate3d(0px,"+((htm.scrollTop/10)-90)+"px, 0px)": "translate3d(0px, 200px, 0px)";
  
  
      }


    //   if(htm.scrollTop > 1500){

    //     window.scroll(0, 1500)

    //     doc.querySelector('#back_right').style.transform =  htm.scrollTop > 200 ? "translate3d(0px,"+((htm.scrollTop/10)-90)+"px, 0px)": "translate3d(0px, 200px, 0px)";

    //   }


      if(htm.scrollTop > 1000){
        console.log("GGGG")
        doc.querySelector('#carousel').style.marginLeft = -(htm.scrollTop/3) + "px";

      }else{
        document.body.classList.remove('stop-scrolling');
      }



    //   doc.querySelector('.outer-container').style.top =  htm.scrollTop > 3050 ? "-40vh" : "0vh";
      doc.querySelector('.outer-container').style.margin =  htm.scrollTop > document.body.scrollHeight-1200 ? "0vh "+0+"vw "+50+"vh " : "0vh";
      doc.querySelector('.outer-container').style.boxShadow =  htm.scrollTop > document.body.scrollHeight-1200 ? "0px 20px 30vh rgba(0,0,0,1)" : none;
        console.log(htm.scrollTop , document.body.scrollHeight-950)
    //   doc.querySelector('.last').style.top =  htm.scrollTop > 3250 ? "0px" : "-500px";

  });


});


