var f = true;
var time = 200;
$(window).scroll(function () {
    var top = $(window).scrollTop();
    console.log(top)
    if (top >= 600 && f) {
        wordShow()
        f = false;
    } else if (!f && top < 600) {
        wordHide()
        f = true;
    }
});

function wordShow () {
    let num = $('.introduce').children('p').length
    console.log(num)
    for (let i = 0; i < num; i++){
        setTimeout(() => {
            $('.introduce p').eq(i).css('opacity', 0).stop(true, true).animate({ opacity: 1 }, time);
        }, time * i);
    }
}

function wordHide () {
    let num = $('.introduce').children('p').length
    console.log(num)
    for (let i = 0; i < num; i++){
        setTimeout(() => {
            $('.introduce p').eq(i).css('opacity', 1).stop(true, true).animate({ opacity: 0 }, 50);
        }, 50 * i);
    }
}