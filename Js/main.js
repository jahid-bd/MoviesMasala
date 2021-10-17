function openNav() {
    document.getElementById("mynav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mynav").style.display = "none";
  }
  function colseNav(x){
    if (x.matches){
      document.getElementById("mynav").style.display = "none";
    }
    else{
      document.getElementById("mynav").style.display = "block";
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  x.addListener(colseNav)
  

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      dots: true,
      loop: true,
      margin: 10,
      nav: true,
      slideBy: 5,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      autoHeight: true
    })
  })

  $('.headline-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    slideBy: 5,
    autoHeight: true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
})
$('.blog-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  slideBy: 5,
  autoHeight: true,
  dots: false,
  responsive:{
      0:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      }
  }
})

// back to top btn
var btn = $('.back-to-top');
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btn.removeClass('show');
        
    }
    else{
        btn.addClass('show');
    }
});
btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Venobox
$(document).ready(function(){
  $('.venobox').venobox(); 
});