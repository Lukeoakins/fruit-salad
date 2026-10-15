const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSelection ul')
fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e){
    e.preventDefault() 
    let userInp = e.target.fruitInput.value
    console.log(userInp)
     userInp = userInp.split(' ').join("")
    if (userInp != ""){
    addFruit(userInp)
    } 
    e.target.fruitInput.value= ""
}

function addFruit(fruit){
    const li = document.createElement('li')
    li.textContent = fruit
    fruitList.appendChild(li)
}