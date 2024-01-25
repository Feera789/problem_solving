let btns = document.querySelectorAll('.btn')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close-modal')
let overlay = document.querySelector('.overlay')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener(
     'click', function () {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
     }
    )  
}

close.addEventListener(
    'click', function () {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
)

document.addEventListener(
    'keydown', function(i) {
    if (i.key === 'Escape' && !modal.classList.contains('hidden')){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
        console.log('Escape is working');

    }
   
}
)


// document.addEventListener(
//     'keydown', function(i) {
//         modal.classList.add('hidden')
//         overlay.classList.add('hidden')
//         console.log('Escape is working');
  
// }
// )