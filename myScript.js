var toTopButton = document.querySelector(".toTop");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y <= 800) {
    toTopButton.style.display = "none";
  } else {
    toTopButton.style.display = "block";
  }
}

window.addEventListener("scroll", myScrollFunc);




// //FADE IN
// $(function(){  // $(document).ready shorthand
//   $('.work').fadeIn('slow');
// });
//
// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.projectTile').each( function(i){
//
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it */
//             if( bottom_of_window >= 1400 ){
//
//                 $(this).animate({'opacity':'1'},1000);
//
//             }
//
//         });
//
//     });
//
// });
