// ハンバーガーメニューボタン
const menuBtn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnMiddle = document.querySelector('#btn__middle');
const btnBottom = document.querySelector('#btn__bottom');
const gnav = document.querySelector('#gnav');
console.log(gnav);

// メニューボタン操作時
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btnBorderHide');
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    gnav.classList.toggle('gnavFadeIn');
});
