$(document).ready(function (){

    $('#developmentimage').on('click',function(){
        $('#developmentimage').hide(200);
        $('#developmenttext').show(200);
    });
    $('#developmenttext').on('click',function(){
        $('#developmenttext').hide(200);
        $('#developmentimage').show(200);
    });
    $('#designimage').on('click',function(){
        $('#designimage').hide(200);
        $('#designtext').show(200);
    });
    $('#designtext').on('click',function(){
        $('#designtext').hide(200);
        $('#designimage').show(200);
    });
    $('#productimage').on('click',function(){
        $('#productimage').hide(200);
        $('#producttext').show(200);
    });
    $('#producttext').on('click',function(){
        $('#producttext').hide(200);
        $('#productimage').show(200);
    })

    $(function(){
        $('#work4image').on('mouseover',function(){
            $('#work4text').html('work 4 u');
            $('#work4image').fadeTo("slow", 0.15);
        });
        $('#work4text').on('mouseover',function(){
            $('#work4image').fadeTo("slow", 1);
        });
    });

});




