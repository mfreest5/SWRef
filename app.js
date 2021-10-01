// setInterval 
// being used on index.html

const field1 = document.querySelector('#field1')
const field2 = document.querySelector('#field2')
const field3 = document.querySelector('#field3')
const field4 = document.querySelector('#field4')
const field5 = document.querySelector('#field5')
const field6 = document.querySelector('#field6')
const field7 = document.querySelector('#field7')
const field8 = document.querySelector('#field8')
const field9 = document.querySelector('#field9')

const swrefRequest = (event) => {
    event.preventDefault()
    const swref = document.querySelector('input[name="search"]').value
    const urlString = `https://swapi.dev/api/people/?search=${swref}`
    console.log(swref)

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
            console.log(swref)
            console.log(res.results[0])
            field1.innerText = res.results[0].name
            field2.innerText = `Height: ${res.results[0].height}`
            field3.innerText = `Hair Color: ${res.results[0].hair_color}`
            field4.innerText = `Birth Year: ${res.results[0].birth_year}`
            field5.innerText = `Eye Color: ${res.results[0].eye_color}`
            field7.innerText = `Gender: ${res.results[0].gender}`
            // field8.innerText = res.results[0].name
            // field9.innerText = res.results[0].name

            console.log(res.results[0].homeworld)
            fetch(res.results[0].homeworld)
                .then(res => res.json())
                .then( res => {
                    field6.innerText = `Homeworld: ${res.name}`
                    console.log(res)
                })

        })
    
}

const referendum = document.querySelector("#referendum")

referendum.addEventListener("submit", swrefRequest);

