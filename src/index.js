function fetchMenu () {
   fetch('http://localhost:3000/ramens')
        .then((res) => res.json())
        .then((json) => {
            renderRamenImages(json)
        })
}

console.log(fetchMenu())

const renderRamenImages = ramens => {
    const menuImage = document.getElementById('ramen-menu')
    
    ramens.forEach(ramen => {
    const img  = document.createElement('img')
    img.src = ramen.image
    menuImage.append(img)
    })
}

const renderRamenDetails = ramens => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')

    img.src = ramens.image
    h2.textContent = ramens.name
    h3.textContent = ramens.restaurant

    div.append(img, h2, h3)
    document.getElementById('ramen-menu').append(div)

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

    renderRamenDetails(newRamen)
})


document.addEventListener('DomContentLoaded', function() {
fetchMenu()
})
