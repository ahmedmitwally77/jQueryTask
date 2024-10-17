let open = $(".open");
let close = $(".close");
let sidebar = $(".sidebar");
open.on("click", function () {
  sidebar.css("left", "0");
  open.css("left", "270px");
});

close.on("click", function () {
  sidebar.css("left", "-250px");
  open.css("left", "30px");
});

let title = $(".title");
title.on("click", function () {
  $(this).next().slideToggle();
  $(".parag").not($(this).next()).slideUp();
});

let area = $("#my-area");
area.on("keyup", function () {
  let count = $(this).val().length;
  $(".counter").text(100 - count ? 100 - count : "You have reached the limit");
});
