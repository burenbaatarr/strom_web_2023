var active = 0;

function showSlide() {
    var slider = document.querySelector(".slider");
    var slides = document.querySelector(".slide");
    if(index >= slides.length){
        active = 0;
    } else if(index < 0) {
        active = slides.length - 1;
    } else {
        active = index;
    } 
    var translateValue = -active * 100 + '%';
    slider[0].setAttribute('style', 'transform transLateX(' + translateValue + ')');
}
function prevSlide() {
    showSlide(active - 1);
} 
function nextSlide() {
    showSlide(active + 1);
}
setInterval(nextSlide(), 5000);