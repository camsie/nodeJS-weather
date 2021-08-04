// const request = require('request')
// const foreCast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=4e01ebd690a85b0a112f17129eda03c5&query=' + latitude + ',' + longitude + '&units=m'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services...', undefined)
//         } else if(response.body.error){
//             callback('Unable to find location. Please try a different location', undefined)
//         } else {
//             callback(undefined, response.body.current.weather_descriptions[0], '. It is currently ', response.body.current.temperature, 'degrees out. It feels like ', response.body.current.feelslike, ' degrees out.')
//         }
//     })
// }

// module.exports = foreCast

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => { //response will be body
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) { //remove all reponse
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out." + "\n\n\n Timezone is " + body.location.timezone_id + "and observation time is at " + body.current.observation_time)
        }
    })

    
}

module.exports = forecast