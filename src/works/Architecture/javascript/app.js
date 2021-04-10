

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0

})
// .addIndicators()
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 2, { opacity:1}, { opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 700,
    triggerElement: intro,
    triggerHook: 0,
})
// .addIndicators()
.setTween(textAnim)
    .addTo(controller);

let accelamount = 0.5
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33)



$("#navbar a").click(function (event) {
  event.preventDefault();
  var $href = $(this).attr('href');
  if($href == "#-1"){
    $('html, body').animate({
      scrollTop: 0 
    }, 500);
  }
  $('html, body').animate({
    scrollTop: $($href).offset().top
  }, 500);
});


$(window).scroll(function () {

  var $window = $(window),
    $body = $('body'),
    $panel = $('.section');
    $text = $('.section-text');
    $nav = $('a');


  $text.each(function () {
    $(this).removeClass('fadeInSectionText');
  });

  $nav.each(function () {
    $(this).removeClass('active');
  });

  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function (i) {
    var $this = $(this);
     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });
      $body.addClass('color-' + $(this).data('color'));

      $text.eq(i).addClass('fadeInSectionText');

      $nav.eq(i+1).addClass('active');


    }

  });

}).scroll();


     