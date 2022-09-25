function move() {
    let elem = document.getElementById('slider_bar');
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '116px';
        }
    }
}