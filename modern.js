const efect = document.getElementById("tron");
window.addEventListener("scroll", function() {
  let down = window.pageYOffset;
  // console.log("down " + offset);
  // console.log("down efect " + offset * 0.6);
  efect.style.backgroundPositionY = down * 0.6 + "px";
});

$(document).ready(function() {
  $("#1").mouseover(function() {
    $(this).css("opacity", 6)
  });
  $("#1").mouseleave(function() {
    $(this).css("opacity", .3)
  });
});

$(document).ready(function() {
  $("#2").mouseover(function() {
    $(this).css("opacity", 6)
  });
  $("#2").mouseleave(function() {
    $(this).css("opacity", .3)
  });
});

$(document).ready(function() {
  $("#3").mouseover(function() {
    $(this).css("opacity", 6)
  });
  $("#3").mouseleave(function() {
    $(this).css("opacity", .3)
  });
});

$(document).ready(function() {
  $("#4").mouseover(function() {
    $(this).css("opacity", 6)
  });
  $("#4").mouseleave(function() {
    $(this).css("opacity", .3)
  });
});

$(document).ready(function(){
  $("#lima").mouseover(function(){
    $(".lima").hover("slow")
  });
});

$(document).ready(function(){
  $("#lima").mouseover(function(){
    $(".over").slideDown()
    $(".paragraf").slideDown()
  });
  $("#lima").mouseleave(function(){
    $(".over").slideUp()
    $(".paragraf").slideUp()
  });
});

$(document).ready(function(){
  $("#enam").mouseover(function(){
    $(".flow").slideDown()
    $(".para").slideDown()
  });
  $("#enam").mouseleave(function(){
    $(".flow").slideUp()
    $(".para").slideUp()
  });
});

$(document).ready(function(){
  $("#tujuh").mouseover(function(){
    $(".xd").slideDown()
    $(".graf").slideDown()
  });
  $("#tujuh").mouseleave(function(){
    $(".xd").slideUp()
    $(".graf").slideUp()
  });
});
