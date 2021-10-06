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

const han = document.querySelector('#han')
const chew = document.querySelector('#chew')
const leia = document.querySelector('#leia')
const obi = document.querySelector('#obi')
const luke = document.querySelector('#luke')
const boba = document.querySelector('#boba')
const darth = document.querySelector('#darth')
const pal = document.querySelector('#pal')
const r2 = document.querySelector('#r2')
const c3po = document.querySelector('#c3po')

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

const hanRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=han`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const obiRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=obi`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const leiaRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=leia`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const bobaRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=boba`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const lukeRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=luke`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const chewRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=chew`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const darthRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=vader`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const palRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=pal`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const r2Request = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=r2`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const c3poRequest = (event) => {
    event.preventDefault()
    const urlString = `https://swapi.dev/api/people/?search=3po`

    fetch(urlString)
        .then(res => res.json())
        .then(res => {
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

const beings = document.getElementsByClassName("beings")

han.addEventListener('click', hanRequest)
leia.addEventListener('click', leiaRequest)
chew.addEventListener('click', chewRequest)
boba.addEventListener('click', bobaRequest)
luke.addEventListener('click', lukeRequest)
obi.addEventListener('click', obiRequest)
darth.addEventListener('click', darthRequest)
pal.addEventListener('click', palRequest)
r2.addEventListener('click', r2Request)
c3po.addEventListener('click', c3poRequest)

referendum.addEventListener("submit", swrefRequest);

