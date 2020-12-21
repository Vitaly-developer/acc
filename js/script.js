var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(this.getElementsByClassName("service__toggle").length)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    if (!this.getElementsByClassName("service__toggle").length) {
      return false
    }
    if (this.classList.contains('active')) {
        this.getElementsByClassName("service__toggle")[0].textContent = "Свернуть"
    } else {
        this.getElementsByClassName("service__toggle")[0].textContent = "Развернуть"
    }
  });
}

$(document).ready(function () {
 
  function Scroll_block(){
      var scroll_top = $(document).scrollTop();
      if ($(".acr-side").is(':hidden')) {
        return false
      }
      $(".acr-side__item").each(function(){
          var hash = $(this).attr("href");
          var target = $(hash);
          if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
              $(".acr-side__item.active").removeClass("active");
              $(this).addClass("active");
          } else {
              $(this).removeClass("active");
          }
      });
  }


  $(document).on("scroll", Scroll_block);
  
  $(".acr-side__item").click(function(e){
    e.preventDefault();

    $(document).off("scroll");
    $(".acr-side__item.active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);

    $("html, body").stop().animate({
        scrollTop: target.offset().top - 70
    }, 500, function(){
        $(document).on("scroll", Scroll_block);
    });

  });

});