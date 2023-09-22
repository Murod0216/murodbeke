$(window).scroll(function(){
    
    if(document.documentElement.scrollTop > 700 ||  document.body.scrollTop > 700){
        $(".row_2").css( 'transform' ,'translateX(0)' )
        $(".row_2").css( 'transition' ,'all .5s ease')
        $(".row_2").css( 'opacity','1')
        
        
 
    }

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 1400 ||  document.body.scrollTop > 1400){
        $(".row_3").css( 'transform' ,'translateX(0)')
        $(".row_3").css( 'transition' ,'all .5s ease')
        $(".row_3").css( 'opacity','1')
        

    }
   
})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 2000 ||  document.body.scrollTop > 2000){
        $(".row_4").css( 'transform' ,'translateY(0)')
        $(".row_4").css( 'transition' ,'all .5s ease')
        $(".row_4").css( 'opacity','1')

    }

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 2300 ||  document.body.scrollTop > 2300){
        $(".row_4").css( 'transform' ,'translateY(0)')
        $(".row_4").css( 'transition' ,'all .5s ease')
        $(".row_4").css( 'opacity','1')

    }
    
})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 3000 ||  document.body.scrollTop > 3000){
        $(".row_5").css( 'transform' ,'translateY(0)')
        $(".row_5").css( 'transition' ,'all .5s ease')
        $(".row_5").css( 'opacity','1')

    }

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 3400 ||  document.body.scrollTop > 3400){
        $(".row_6").css( 'transform' ,'scale(1)')
        $(".row_6").css( 'transition' ,'all .5s ease')
        $(".row_6").css( 'opacity','1')

    }

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 2 ||  document.body.scrollTop > 2){
        $(".row_7").css( 'transform' ,'scale(1)')
        $(".row_7").css( 'transition' ,'all .5s ease')
        $(".row_7").css( 'opacity','1')

    }

})
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 2 ||  document.body.scrollTop > 2){
        $(".row_8").css( 'transform' ,'scale(1)')
        $(".row_8").css( 'transition' ,'all .5s ease')
        $(".row_8").css( 'opacity','1')

    }

})

gsap.from('.row_1)',{
    scale:1.5,
    delay: 1,
    duraction:.6,   
    opacity:0



})
