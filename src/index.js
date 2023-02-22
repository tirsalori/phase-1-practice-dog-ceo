console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
        let imgArr = Array.from(data.message)
        imgArr.forEach(element => {
            let elem = document.createElement("img")
            elem.setAttribute("src", element)
            document.getElementById("dog-image-container").appendChild(elem)
    })})

fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
        for (element in data.message) {
            const li = document.createElement("li")
            const ul = document.createElement("ul")
            li.setAttribute("id", element)
            ul.setAttribute("id", `${element} type`)
            li.innerText = element
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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("breed-dropdown").addEventListener("click", (e) => console.log(e))
})
