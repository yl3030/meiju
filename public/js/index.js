$(".pic-inform").click(function(){
    var target = $(this).data("target");
    var target_pic = $(this).children(".pic").children("img").attr("src");
    var target_title = $(this).children(".text").children("h4").text();
    var target_text = $(this).children(".text").children("p").text();
    $(target).children(".pic").children("img").attr("src",target_pic);
    $(target).children(".text").children("h4").empty().text(target_title);
    $(target).children(".text").children("p").empty().text(target_text);
})

$(".privacy").click(function(){
    $(".privacy_content").slideToggle(300);
})

$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
})