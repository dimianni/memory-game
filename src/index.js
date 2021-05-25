import './scss/style.scss'


import './images/blank.png'
import './images/cheeseburger.png'
import './images/fries.png'
import './images/hotdog.png'
import './images/ice-cream.png'
import './images/milkshake.png'
import './images/pizza.png'


window.addEventListener('DOMContentLoaded', function () {
    init()
})

function init() {

    const imgConts = document.querySelectorAll('.item')
    const imgs = document.querySelectorAll('.image')
    const images = ['images/cheeseburger.png', 'images/fries.png', 'images/hotdog.png', 'images/ice-cream.png', 'images/milkshake.png', 'images/pizza.png']


    function randomize(arr) {
        // 'i' is 5 initially 
        for (let i = arr.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1)) // number from 0 to 6
            const el = arr[i]; // saving the element with 'i' index
            arr[i] = arr[random]; // assigning 'i' element to 'random' element  
            arr[random] = el; // assigning initial(saved) element to 'random' element 
        }
    }
    randomize(images)
    const gameImages = images.slice(0, 3).reduce((a, i) => a.concat(i, i), []);
    randomize(gameImages);

    function assign() {
        imgs.forEach((img, i) => {
            img.src = gameImages[i]
        })
    }
    assign()


    const cardsChosen = []

    function check(){

        const images = [];
        cardsChosen.forEach(chosen => {
            const img = chosen.querySelector('img')
            images.push(img)
        })

        if (images[0].src !== images[1].src){
            cardsChosen.forEach(chosen => {
                chosen.classList.remove('clicked')
            })
        }

        cardsChosen.length = 0; // Emptying cardsChosen array for the next picks
    }

    function flip(_this) {

        _this.classList.add('clicked')

        cardsChosen.push(_this)

        if (cardsChosen.length == 2) {
            setTimeout(check, 500);
        }

    }

    imgConts.forEach(image => {
        image.addEventListener('click', function () {
            flip(this)
        })
    })

}