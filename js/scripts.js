$(document).ready(function (){
    $("p.card-text").hide();
    $("img#designimage").hover(function()
    {
        $("p#designparagraph").toggle();
    });

    $("img#developmentimage").hover(function()
    {
        $("p#developmenttext").toggle();
    });

    $("img#productimage").hover(function()
    {
        $("p#producttext").toggle();
    });
});