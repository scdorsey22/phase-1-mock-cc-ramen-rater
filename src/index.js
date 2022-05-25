function fetchMenu () {
   fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            renderRamenImages(json)
            })
}

console.log(fetchMenu())

const renderRamenImages = ramens => {
    
    ramens.forEach(ramen => {
    const img  = document.createElement('img')
    img.src = ramen.image
    document.getElementById('ramen-menu').append(img)

    img.addEventListener('click', () => {
        const imageToUpdate = document.querySelector('div#ramen-detail img.detail-image')
        // console.log(imageToUpdate)

        imageToUpdate.src = ramen.image
        imageToUpdate.alt = ramen.name

        const names = document.querySelector('#ramen-detail h2')
        // console.log(names)
        names.textContent = ramen.name

        const restaurant = document.querySelector('#ramen-detail h3')
        restaurant.textContent = ramen.restaurant

        const rating = document.getElementById('rating-display')
        rating.textContent = ramen.rating

        const comment = document.getElementById('comment-display')
        comment.textContent = ramen.comment
    })
})
    
}

const renderRamenForm = ramen => {

    const img = document.createElement('img')
    img.src = ramen.image
    
    document.getElementById('ramen-menu').append(img)

    img.addEventListener('click', () => {
        const imageToUpdate = document.querySelector('div#ramen-detail img.detail-image')
        // console.log(imageToUpdate)

        imageToUpdate.src = ramen.image
        imageToUpdate.alt = ramen.name

        const names = document.querySelector('#ramen-detail h2')
        // console.log(names)
        names.textContent = ramen.name

        const restaurant = document.querySelector('#ramen-detail h3')
        restaurant.textContent = ramen.restaurant

        const rating = document.getElementById('rating-display')
        rating.textContent = ramen.rating

        const comment = document.getElementById('comment-display')
        comment.textContent = ramen.comment
    })
}

document.getElementById('new-ramen').addEventListener('submit', (e) => {
    e.preventDefault()

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }
    renderRamenForm(newRamen)
})


// document.addEventListener('DOMContentLoaded', function() {
// fetchMenu()
// })
