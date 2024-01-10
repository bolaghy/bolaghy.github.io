const textBoxes = document.querySelectorAll("div[data-content]")
const showBox = document.getElementById('show-box')
const clearBtn = document.getElementById('clear-btn')

function upddateShowBox(html){
    showBox.innerText = html
    localStorage.setItem = ('show-box', html)
}

textBoxes.forEach((textBox)=> {
    textBox.addEventListener( 'click', () => {
        let html = `${showBox.innerText} ${textBox.dataset.content}`;
        upddateShowBox(html)
    })
}) 

function clearShowBox(){
   showBox.innerHTML =''
    localStorage.removeItem =('show-box')
}

clearBtn.addEventListener( 'click', clearShowBox);

(function (){
    let html = localStorage.getItem = ('');
    showBox.innerHTML = html
}) ()