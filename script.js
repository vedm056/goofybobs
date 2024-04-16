$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#tabs2").tabs();
});

$(function () {
  $("#tabs3").tabs();
});

$(function () {
  $("#tabs4").tabs();
});

const lastScrollTop = 0;
const navbarHeight = $('.site-header').outerHeight();
const header = $('.site-header');

$(window).scroll(function () {
  const st = $(this).scrollTop();
  header.toggleClass('hidden', st > lastScrollTop && st > navbarHeight);
});

const lastScrollTop2 = 0;
const navbarHeight2 = $('.site-header2').outerHeight();
const header2 = $('.site-header2');

$(window).scroll(function () {
  const st2 = $(this).scrollTop();
  header.toggleClass('hidden', st > lastScrollTop2 && st > navbarHeight2);
});

var myvar = 0;

function changeMarginDown() {
    if (myvar <= 1300) {
        myvar += 100;
        let infographic = document.getElementById("infographic-image");
        infographic.style.marginTop = "-" + myvar + "px";
    }
    
}
function changeMarginUp() {
    if (myvar >= 0) {
        myvar -= 100;
        let infographic = document.getElementById("infographic-image");
        infographic.style.marginTop = "-" + myvar + "px";
    }
}

var myvar1 = 0;

function changeMarginDown1() {
    if (myvar1 <= 1300) {
        myvar1 += 100;
        let infographic1 = document.getElementById("infographic-image-2");
        infographic1.style.marginTop = "-" + myvar1 + "px";
    }
    
}
function changeMarginUp1() {
    if (myvar1 >= 0) {
        myvar1 -= 100;
        let infographic1 = document.getElementById("infographic-image-2");
        infographic1.style.marginTop = "-" + myvar1 + "px";
    }
}

var myvar2 = 0;

function changeMarginDown2() {
    if (myvar2 <= 1300) {
        myvar2 += 100;
        let infographic2 = document.getElementById("infographic-image-3");
        infographic2.style.marginTop = "-" + myvar2 + "px";
    }
    
}
function changeMarginUp2() {
    if (myvar2 >= 0) {
        myvar2 -= 100;
        let infographic2 = document.getElementById("infographic-image-3");
        infographic2.style.marginTop = "-" + myvar2 + "px";
    }
}

var myvar3 = 0;

function changeMarginDown3() {
    if (myvar3 <= 1300) {
        myvar3 += 100;
        let infographic3 = document.getElementById("infographic-image-4");
        infographic3.style.marginTop = "-" + myvar3 + "px";
    }
    
}
function changeMarginUp3() {
    if (myvar3 >= 0) {
        myvar3 -= 100;
        let infographic3 = document.getElementById("infographic-image-4");
        infographic3.style.marginTop = "-" + myvar3 + "px";
    }
}

var myvar4 = 0;

function changeMarginDown4() {
    if (myvar4 <= 1300) {
        myvar4 += 100;
        let infographic4 = document.getElementById("infographic-image-5");
        infographic4.style.marginTop = "-" + myvar4 + "px";
    }
    
}
function changeMarginUp4() {
    if (myvar4 >= 0) {
        myvar4 -= 100;
        let infographic4 = document.getElementById("infographic-image-5");
        infographic4.style.marginTop = "-" + myvar4 + "px";
    }
}

var myvar5 = 0;

function changeMarginDown5() {
    if (myvar5 <= 1300) {
        myvar5 += 100;
        let infographic5 = document.getElementById("infographic-image-6");
        infographic5.style.marginTop = "-" + myvar5 + "px";
    }
    
}
function changeMarginUp5() {
    if (myvar5 >= 0) {
        myvar5 -= 100;
        let infographic5 = document.getElementById("infographic-image-6");
        infographic5.style.marginTop = "-" + myvar5 + "px";
    }
}

var myvar6 = 0;

function changeMarginDown6() {
    if (myvar6 <= 1300) {
        myvar6 += 100;
        let infographic6 = document.getElementById("infographic-image-7");
        infographic6.style.marginTop = "-" + myvar6 + "px";
    }
    
}
function changeMarginUp6() {
    if (myvar6 >= 0) {
        myvar6 -= 100;
        let infographic6 = document.getElementById("infographic-image-7");
        infographic6.style.marginTop = "-" + myvar6 + "px";
    }
}

var myvar7 = 0;

function changeMarginDown7() {
    if (myvar7 <= 1400) {
        myvar7 += 100;
        let infographic7 = document.getElementById("infographic-image-8");
        infographic7.style.marginTop = "-" + myvar7 + "px";
    }
    
}
function changeMarginUp7() {
    if (myvar7 >= 0) {
        myvar7 -= 100;
        let infographic7 = document.getElementById("infographic-image-8");
        infographic7.style.marginTop = "-" + myvar7 + "px";
    }
}

var myvar8 = 0;

function changeMarginDown8() {
    if (myvar8 <= 1300) {
        myvar8 += 100;
        let infographic8 = document.getElementById("infographic-image-9");
        infographic8.style.marginTop = "-" + myvar8 + "px";
    }
    
}
function changeMarginUp8() {
    if (myvar8 >= 0) {
        myvar8 -= 100;
        let infographic8 = document.getElementById("infographic-image-9");
        infographic8.style.marginTop = "-" + myvar8 + "px";
    }
}

var myvar9 = 0;

function changeMarginDown9() {
    if (myvar9 <= 1300) {
        myvar9 += 100;
        let infographic9 = document.getElementById("infographic-image-10");
        infographic9.style.marginTop = "-" + myvar9 + "px";
    }
    
}
function changeMarginUp9() {
    if (myvar9 >= 0) {
        myvar9 -= 100;
        let infographic9 = document.getElementById("infographic-image-10");
        infographic9.style.marginTop = "-" + myvar9 + "px";
    }
}

var myvar10 = 0;

function changeMarginDown10() {
    if (myvar10 <= 1300) {
        myvar10 += 100;
        let infographic10 = document.getElementById("infographic-image-11");
        infographic10.style.marginTop = "-" + myvar10 + "px";
    }
    
}
function changeMarginUp10() {
    if (myvar10 >= 0) {
        myvar10 -= 100;
        let infographic10 = document.getElementById("infographic-image-11");
        infographic10.style.marginTop = "-" + myvar10 + "px";
    }
}

var myvar11 = 0;

function changeMarginDown11() {
    if (myvar11 <= 1300) {
        myvar11 += 100;
        let infographic11 = document.getElementById("infographic-image-12");
        infographic11.style.marginTop = "-" + myvar11 + "px";
    }
    
}
function changeMarginUp11() {
    if (myvar11 >= 0) {
        myvar11 -= 100;
        let infographic11 = document.getElementById("infographic-image-12");
        infographic11.style.marginTop = "-" + myvar11 + "px";
    }
}