const imgEl = document.getElementById('img-el') 
const imagesEl = document.getElementById('images')

function renderImages(){
    for(let i=1; i<=40; i++){
        imagesEl.innerHTML += `<img id="img" class="col-sm-6 col-md-3 mb-3 mb-sm-4" src="img/img-${i}.jpeg" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">`
    }

    document.querySelectorAll('#img').forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            imgEl.innerHTML = `<img class="px-1 py-1" src=${imgSrc} style="width: 100%;">`
        });
    });
}

renderImages()


