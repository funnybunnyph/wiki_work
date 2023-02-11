var carousel=document.querySelector('.carousel');
var bl=document.querySelector('.blur');
var image=document.querySelector('.image');
var img_link=document.querySelector('.img_link');
var pagination=document.querySelector('.pagination');
var dian=document.getElementsByClassName('dian');
var left=document.querySelector('.left_bt');
var right=document.querySelector('.right_bt');

var picture=['./images/image1.png','./images/image2.png','./images/image3.png',
             './images/image4.png','./images/image5.jpg',];
var link=['https://www.icourse163.org/topics/bigdata_w/?mocInLoc=pc_sy_banner_4&locRefId=160983&outVendor=zw_mooc_pcbanner4&Pdt=Moc.web&landingPageReport=false',
          'https://www.icourse163.org/channel/4003.htm?mocInLoc=pc_sy_banner_5&locRefId=20020&outVendor=zw_mooc_banner5_pc',
          'https://www.icourse163.org/course/HUST-1003447002?tid=1003681002&mocInLoc=pc_sy_banner_6&locRefId=117213&landingPageReport=false&outVendor=zw_mooc_banner6_pc',
          'https://ke.study.163.com/course/detail/100122378?kyFrom=d3d3Lmljb3Vyc2UxNjMub3Jn&tid=1469586442&courseId=1468374161&mocInLoc=pc_sy_banner_2&locRefId=235414&outVendor=zw_mooc_pcbanner2&Pdt=Moc.web&landingPageReport=false',
          'https://www.icourse163.org/topics/promote_w/?mocInLoc=pc_sy_banner_1&locRefId=241100&outVendor=zw_mooc_pcbanner1&Pdt=Moc.web&landingPageReport=false']

var index=0;

for(let i=0;i<picture.length;i++){
    let dot=document.createElement('div');
    dot.classList.add('dian');
    pagination.appendChild(dot);
}

/* 排他思想，清除所有小圆点check样式，后面要引用这个封装函数 */

function qingchu() {
    for (let i = 0; i < dian.length; i++) {
        dian[i].classList.remove('check');

    }
}


/* 切下一张图的封装函数，后面也是要引用 */

function yunxing() {
       /* index加1 */
    index = index + 1;
    if (index == picture.length) {
        index = 0;
    }
     /* 显示图片，显示图片数组下标为目前index那张 */
    image.src = picture[index];
    img_link.href = link[index];

     /* 虚化背景也要换 */
    bl.style.cssText = 'background-image: url('+picture[index]+')';

    /* 小圆点的显示 */
    qingchu();
      /* 显示那张图就显示对于的圆点，给他.check的样式 */
    dian[index].classList.add('check');

    /* 若index超过，回到-1 */
    if (index == picture.length - 1) {
        index = -1;
    }

}



/* 点击向右按钮时的操作 */

right.addEventListener('click', function () {
    /* 直接用上面的切图封装函数 */
    yunxing();
})

/* 点击向左按钮时的操作，跟上面的切下张图封装函数异曲同工 */

left.addEventListener('click', function () {

    index = index - 1;
    if (index == -1) {
        index = picture.length - 1;
    }
    image.src = picture[index];
    img_link.href = link[index];
    bl.style.cssText = 'background-image: url('+picture[index]+')';

    /* 向左时小圆点的显示 */
    qingchu();
    dian[index].classList.add('check');

})


/* 进入carousel这个底层盒子时，停止自动轮播和.animation类的动画效果，自动轮播的定时器写在最后面 */

carousel.addEventListener('mouseover', function () {

    clearInterval(lunbo);

    image.classList.remove('animation');

})

/*  离开main这个底层盒子时，开始自动轮播和.yun类的动画效果，自动轮播的定时器我写在最后面 */

carousel.addEventListener('mouseout', function () {

    lunbo = setInterval(yunxing, 5000);

    image.classList.add('animation');
    image.style.animationDelay = '5s';
})


/*  点击小圆点时的切图操作 */
for (let i = 0; i < picture.length; i++) {
    dian[i].addEventListener('click', function () {
        qingchu();
        this.classList.add('check');
        index = i;
        image.src = picture[index];
        img_link.href = link[index];
    bl.style.cssText = 'background-image: url('+picture[index]+')';

    })
}

/* 自动轮播定时器与初始状态 */

lunbo = setInterval(yunxing, 5000);
image.classList.add('animation');
dian[0].classList.add('check');