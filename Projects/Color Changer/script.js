const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach( function (button){
    button.addEventListener("click", function(changeColor) {
        switch(changeColor.target.id){
            case 'grey':
                body.style.backgroundColor = changeColor.target.id
                break;
            case 'white':
                body.style.backgroundColor = changeColor.target.id
                break;
            case 'yellow': 
                body.style.backgroundColor = changeColor.target.id
                break;
            case 'blue':
                body.style.backgroundColor = changeColor.target.id
                break;
            default:
                body.style.backgroundColor = changeColor.target.id
        }
    })
})