//为cross施加点击事件

let cross=document.querySelector('.cross');

cross.addEventListener('click',function(){
    cross.classList.toggle('open');/*这里弄吐了，开始按教程设置的add方法一直研究怎么写点击切回，原
                                     来还有一个toggle方法可以检测并选择删去插入这么好用*/
})