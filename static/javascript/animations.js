var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I develop.')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('design.')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('create.')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('innovate.')
    .pauseFor(2500)
    .deleteAll()
    .start();


AOS.init({
  duration: 1200,
});

$(function() {
  AOS.init();
});