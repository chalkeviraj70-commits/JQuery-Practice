

// Jquery Selectors

// 1. ID selctor

$(function()
{
    $("#fh1").css("color","red")
})


// 2.Tag selector


$(function(){
    $("p").css("backgroundColor","yellow")
})

// 3.Class selector

$(function(){
    $(".second").css({"height":"200px",
        "width":"200px",
        "backgroundColor":"green"});
})

// Group Selector

$(function(){
    $("h1,h2,h3").css("color","blue")
})