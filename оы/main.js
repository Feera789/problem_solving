// const blue = document.querySelector('.blue')
// const green = document.querySelector('.green')


// blue.onclick = function(){
//     document.body.style.background = 'blue';
// }

// green.onclick = function(){
//     document.body.style.background = 'green';
// }

// 1.create Div
// 2.find the type of shape
// 3. add color

function createShape(shapeType, color){
   const div = document.createElement('div')
   div.classList.add('shape')
   document.body.appendChild(div)
   if (shapeType == 'circle') {
    div.style.borderRadius = '50%'
   }
   div.style.background = color
}


createShape('square', '#f00')
createShape('circle', '#ff0')
createShape('square', '#000')