$(".pic-inform").click(function () {
  var target = $(this).data("target");
  var target_pic = $(this).children(".pic").children("img").attr("src");
  var target_title = $(this).children(".text").children("h4").text();
  var target_text = $(this).children(".text").children("p").text();
  $(target).children(".pic").children("img").attr("src", target_pic);
  $(target).children(".text").children("h4").empty().text(target_title);
  $(target).children(".text").children("p").empty().text(target_text);
});

$(window).on("resize scroll", function () {
  var Live_BigPic_Width = $("#live-bigpic").width();
  var Live_SmallPic_Length = $("#live-smallpic")
    .children(".inner")
    .children(".inform-box")
    .children(".pic-inform").length;
  var Live_SmallPic_Width = (Live_BigPic_Width - 20) / 3;
  var Live_InformBox_Width = (Live_SmallPic_Width + 10) * Live_SmallPic_Length;
//   console.log("Live_BigPic_Width:" + Live_BigPic_Width);
//   console.log("Live_SmallPic_Length:" + Live_SmallPic_Length);
//   console.log("Live_SmallPic_Width:" + Live_SmallPic_Width);
//   console.log("Live_InformBox_Width:" + Live_InformBox_Width);

  var Space_BigPic_Width = $("#space-bigpic").width();
  var Space_SmallPic_Length = $("#space-smallpic")
    .children(".inner")
    .children(".inform-box")
    .children(".pic-inform").length;
  var Space_SmallPic_Width = (Space_BigPic_Width - 20) / 3;
  var Space_InformBox_Width =
    (Space_SmallPic_Width + 10) * Space_SmallPic_Length;
  if ($(window).width() < 768) {
    $("#live-smallpic")
      .children(".inner")
      .children(".inform-box")
      .css("width", Live_InformBox_Width);
    $("#live-smallpic")
      .children(".inner")
      .children(".inform-box")
      .children(".pic-inform")
      .css("width", Live_SmallPic_Width)
      .css("margin-right", "10px");


    $("#space-smallpic")
      .children(".inner")
      .children(".inform-box")
      .css("width", Space_InformBox_Width);
    $("#space-smallpic")
      .children(".inner")
      .children(".inform-box")
      .children(".pic-inform")
      .css("width", Space_SmallPic_Width)
      .css("margin-right", "10px");
  } else {
    $("#live-smallpic")
      .children(".inner")
      .children(".inform-box")
      .css("width", "100%");
    $("#live-smallpic")
      .children(".inner")
      .children(".inform-box")
      .children(".pic-inform")
      .css("width", "100%")
      .css("margin-right", "0");
    $("#space-smallpic")
      .children(".inner")
      .children(".inform-box")
      .css("width", "100%");
    $("#space-smallpic")
      .children(".inner")
      .children(".inform-box")
      .children(".pic-inform")
      .css("width", "100%")
      .css("margin-right", "0");
  }
});

$(".privacy").click(function () {
  $(".privacy_content").slideToggle(300);
});

$(".menu").click(function () {
  $(this).toggleClass("active");
  $(".main-nav").toggleClass("active");
});

$(".main-nav").children("ul").children("li").click(function(){
  if($(window).width()<768){
    $(this).toggleClass("active");
    $(this).children(".dropdown").slideToggle(300);
  }
})
