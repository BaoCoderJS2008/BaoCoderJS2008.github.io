$(document).ready(function() {
/* ================ Menu ================== */
 $("#menu").click(function() {
    this.classList.toggle("change");
    $("#menu-content").fadeToggle();
  });
/* ================ Web Theme ============= */
  $("#theme").click(function() {
    document.title.val("Đã bật");
    $("#theme").val("Light");
    document.body.style.background = "black";
  });
 });
/* ========================================= */
