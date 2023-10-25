// フェードインメニュー  =========================================
const menuBtn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnMiddle = document.querySelector('#btn__middle');
const btnBottom = document.querySelector('#btn__bottom');
const gnav = document.querySelector('#gnav');
const gnavNav = document.querySelector('#gnav__nav');
const gnavLists = document.querySelectorAll('.gnav__list')
const gnavLinks =document.querySelectorAll('.gnav__link');

// ハンバーガーメニューボタン操作時の設定
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('btnBorderHide');
    btnTop.classList.toggle('rotateTop');
    btnMiddle.classList.toggle('hideMiddle');
    btnBottom.classList.toggle('rotateBottom');
    gnav.classList.toggle('gnavFadeIn');
    // PC用設定
    gnavNav.classList.toggle('gnavNavPc');
    for (let i = 0; i < gnavLists.length; i++) {
        gnavLists[i].classList.toggle('gnavListPc');
    }
    for (let i = 0; i < gnavLinks.length; i++) {
        gnavLinks[i].classList.toggle('gnavLinkPc')
    }
});

// ナビゲーション操作時の設定
gnav.addEventListener('click', () => {
    menuBtn.classList.remove('btnBorderHide');
    btnTop.classList.remove('rotateTop');
    btnMiddle.classList.remove('hideMiddle');
    btnBottom.classList.remove('rotateBottom');
    gnav.classList.remove('gnavFadeIn');
    // PC用設定
    gnavNav.classList.remove('gnavNavPc');
    for (let i = 0; i < gnavLists.length; i++) {
        gnavLists[i].classList.remove('gnavListPc');
    }
    for (let i = 0; i < gnavLinks.length; i++) {
        gnavLinks[i].classList.remove('gnavLinkPc')
    }

});