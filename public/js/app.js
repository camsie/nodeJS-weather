//console.log('Client side JS file is loaded!')
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

//    console.log(location)

    if (location) {
        messageTwo.textContent = 'Loading...'
        messageOne.textContent = ''
        fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            //console.log(data.error)
            messageOne.textContent = ''
            messageTwo.textContent = data.error
        } else {
            //console.log(data.location)
            messageOne.textContent = data.location
            //console.log(data.forecast)
            messageTwo.textContent = data.forecast
        }
        
    })
    
})
    } else {
        //console.log('Please enter a value on the search field...')
        messageTwo.textContent = "Please enter a value on the search field..."
    }
})

