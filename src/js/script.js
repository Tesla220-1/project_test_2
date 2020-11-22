
const promoSlide = document.querySelectorAll('.promo__slide'),
      promoSlideTitle = document.querySelectorAll('.promo__slide-title'),
      promoSlideText = document.querySelectorAll('.promo__slide-text'),
      promoSlideButton = document.querySelectorAll('.btn_slide'),
      promoSlideBig = document.querySelector('[data-promo-slide-big]'),
      promoSlideBigTitle = document.querySelector('.promo__slide-text_big-title');

    let mediaQuery = window.matchMedia('(min-width: 993px)');


      for (let i = 0; i < promoSlide.length; i++) {
        promoSlide[i].addEventListener('click', function (e) {
            if (!(promoSlide[i].classList.contains('promo__slide_active')))
            {
            for (let j = 0; j < newsItem.length; j++) {
                promoSlide[j].classList.remove('promo__slide_active');
                promoSlideTitle[j].classList.remove('promo__slide-title_active');
                promoSlideButton[j].classList.remove('btn_slide_active');
                promoSlideText[j].classList.remove('promo__slide-text_active');
                if (promoSlide[j] == promoSlideBig) {
                    promoSlide[j].style.minHeight = '0';
                    promoSlideBigTitle.classList.add('promo__slide-text_big-title');
                }
            }
        } 
        promoSlide[i].classList.add('promo__slide_active');
        promoSlideTitle[i].classList.add('promo__slide-title_active');
        promoSlideButton[i].classList.add('btn_slide_active');
        promoSlideText[i].classList.add('promo__slide-text_active');
        if (promoSlide[i] == promoSlideBig && mediaQuery.matches) {
            promoSlide[i].style.minHeight = '277px';
            promoSlideBigTitle.classList.remove('promo__slide-text_big-title');
        }
        });
    }


const newsItem = document.querySelectorAll('.news__item');

for (let i = 0; i < newsItem.length; i++) {
    newsItem[i].addEventListener('click', function (e) {
        if (!(newsItem[i].classList.contains('news__item_acitve')))
        {
            for (let j = 0; j < newsItem.length; j++) {
                newsItem[j].classList.remove('news__item_acitve');
            }
        } 
        newsItem[i].classList.add('news__item_acitve');
    });
}