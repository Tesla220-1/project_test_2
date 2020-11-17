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