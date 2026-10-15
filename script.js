const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSelection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')
fruitForm.addEventListener("submit", extractFruit)

let cal = 0

function extractFruit(e){
    e.preventDefault() 
    let userInp = e.target.fruitInput.value
    console.log(userInp)
    userInp = userInp.split(' ').join("")
    if (userInp != ""){
    fetchFruitData(userInp)
    } 
    e.target.fruitInput.value= ""
}

function addFruit(fruit){
    const li = document.createElement('li')
    li.textContent = fruit.name

    li.addEventListener('click', removeFruit)
    fruitList.appendChild(li)

    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal
}
function removeFruit(e){
    e.target.remove()
}

async function fetchFruitData(fruit){
    try{
        const respData = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        if (respData.ok){
            const data = await respData.json()
            addFruit(data)
        } else{
            throw "something has gone wrong with the API requests"
        }
    } catch (e){
        console.log(e)
    }

}

function processResponse(resp){
    if (resp.ok){
        if (resp.ok){
            return resp.json()
        } else{
            throw "error:https status code " + resp.status
            }
    }
}

function calculateCalories(calories){

}