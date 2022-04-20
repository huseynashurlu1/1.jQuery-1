// // let btn = document.getElementById('btn1');
// // let text = document.getElementById('text');

// // btn.onclick = function() {
// //   text.style.color = 'red';
// // }

// // $

// // $('#btn1').click(function() {
// //   $('.first').css('color','red')
// // })

// $(document).ready(function(){
//   $('#btn1').click(function() {
//     $('p .intro').css('color','red')
//   })
// })


// $(document).ready(function(){
//   $('#btn1').click(function() {
//     $('#demo p:nth-child(2)').css('color','red')
//   })
// })


// $(document).ready(function(){
//   $('#first').hover(function(){
//     $('#first').css('border-radius','30px');
//     $('#first').css('background-color','red');
//   })

//   $(window).scroll(function(){
//     if($(window).scrollTop() > 150) {
//       $('body').css('background-color','orange');
//     }
//     else{
//       $('body').css('background-color','white');
//     }
//   })
// })

// $(document).ready(function(){
//   $('#first').on({
//     click: function() {
//       $('#first').css('border-radius',"30px")
//     },
//     dblclick: function() {
//       $('#first').css('border-radius',"100%")
//     },
//     mouseenter: function() {
//       $('#first').css('background-color',"orange")
//     },
//     mouseleave: function() {
//       $('#first').css('background-color',"red")
//       $('#first').css('border-radius',"0")
//     }
//   })
// })

// $('first').on('click',function(){

// })



// $('#btn1').click(function(){
//   $('#first').slideUp(2000);
// })

// $('#btn2').click(function(){
//   $('#first').show();
// })

// $('#btn1').click(function(){
//   $('#first').animate({
//     marginLeft: "+=50px"
//   })
// })'


// $('#btn1').click(function(){
//   $('#first').css('background-color','black').slideUp();
// })

// $('#btn2').click(function(){
//   $('#first').stop();
// })

('#btn1').click(function(){
  $('p').not('.p1').css('color','red')
})

jQ('#btn2').click(function(){
  jQ('#first').removeClass('active')
})


var jQ = $.noConflict;

