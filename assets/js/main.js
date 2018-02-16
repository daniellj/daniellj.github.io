jQuery(document).ready(function($) {

function animMeter(){
    $(".level-bar-inner").each(function() {
                $(this)
                    //.data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("level")
                    }, 1200);
            });
}

    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        /*$('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });*/
		animMeter();

    });
   
    

});