const request = require('request')
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2Ftc2llIiwiYSI6ImNrcm9jNmI4MDA4Nmoybm8xdDVjcncxY28ifQ.WQZaiOAXa6OqYrUWSJL5Ng&limit=1'

    request ({ url, json: true }, (error, { body }) => { //change body remove response
        if (error) {
            callback('Unable to connect to location services...', undefined)
        } else if(body.features.length === 0){ //change all response to body 
            callback('Unable to find location. Please try a different location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode

