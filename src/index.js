console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
        let imgArr = Array.from(data.message)
        imgArr.forEach(element => {
            let elem = document.createElement("img")
            elem.setAttribute("src", element)
            elem.setAttribute("width", 300)
            elem.setAttribute("height", 300)
            document.getElementById("dog-image-container").appendChild(elem)
    })})

const dogBreeds = []
fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
        for (element in data.message) {
            const li = document.createElement("li")
            const ul = document.createElement("ul")
            li.setAttribute("id", element)
            ul.setAttribute("id", `${element} type`)
            li.setAttribute("class", element[0])
            li.innerText = element
            dogBreeds.push(element)
            document.getElementById("dog-breeds").appendChild(li)
            document.getElementById(element).appendChild(ul)
            document.getElementById(element).addEventListener("click", changeFontColor)
            if (data.message[element].length !== 0) {
                for (let i = 0; i < data.message[element].length; i++) {
                    let liBreed = document.createElement("li")
                    liBreed.setAttribute("id", data.message[element][i])
                    liBreed.innerText = data.message[element][i]
                    document.getElementById(`${element} type`).appendChild(liBreed)
                    document.getElementById(data.message[element][i]).addEventListener("click", changeFontColor)
            }
        }
    }
})

function changeFontColor (e) {
    e.target.style.color = "purple"
}

function breedFilter (){

    for (let i = 0; i < dogBreeds.length; i++) {
        let hiddenDogBreeds = document.getElementsByClassName(dogBreeds[i][0])
            for (let dog of hiddenDogBreeds) {
                dog.style.display = dogBreeds[i][0] !== this.value ? "none" : "block"
            }
    }
}


document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("breed-dropdown").addEventListener('change', breedFilter)
})
