let imagesarr = ["https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg", "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg", "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg", "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg", "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"];

setTimeout(function tick() {
    document.getElementById('images')
    images.src = imagesarr[0];
    timerId = setTimeout(tick, 20000);
}, 0);

   
setTimeout(function tick() {
    document.getElementById('images')
    images.src = imagesarr[1];
    timerId = setTimeout(tick, 20000);
}, 5000);

setTimeout(function tick() {
    document.getElementById('images')
    images.src = imagesarr[2];
    timerId = setTimeout(tick, 20000);
}, 10000);

setTimeout(function tick() {
    document.getElementById('images')
    images.src = imagesarr[3];
    timerId = setTimeout(tick, 20000);
}, 15000);

setTimeout(function tick() {
    document.getElementById('images')
    images.src = imagesarr[4];
    timerId = setTimeout(tick, 20000);
}, 20000);


function validate() {
    if (document.getElementById('login').value.length > 6 && document.getElementById('password').value.length > 6) {
        document.getElementById('butt').style.background = '#0095f6';
        document.getElementById('butt').disabled = false;
    }
}
