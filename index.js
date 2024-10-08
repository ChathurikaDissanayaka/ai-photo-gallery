const images = document.querySelectorAll('#img');
const imgEl = document.getElementById('img-el')

images.forEach(image => {
    image.addEventListener('click', function() {
        const imgSrc = this.getAttribute('src');
        imgEl.innerHTML = `<img class="px-1 py-1" src=${imgSrc} style="width: 100%;">`
    });
});

