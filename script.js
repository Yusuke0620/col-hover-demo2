const galleryImgs = document.querySelectorAll('.gallery img');
const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor = '#000';
});

/* マウスが乗ったらアニメーション */




galleryImgs.forEach((galleryImg) => {
    galleryImg.addEventListener('mouseover', (event) => {
        //galleryImgsにカーソルが乗ったら
        //body全体に画像が反映する
        body.style.backgroundImage = `url(${event.target.src})`;

        //一瞬透明になるアニメーション
        galleryImg.animate({opacity: [0, 1]}, 500)
    });
});



