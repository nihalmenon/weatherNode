const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=db47ac47ea52b03c3046476f0a8ccb2b&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
           callback('Unable to find location.', undefined)
        }else{
            const {temperature, feelslike:feelsLike, weather_descriptions:description} = body.current
            callback(undefined, description + ". It is currently " + temperature + " degrees out. It feels like " + feelsLike + " degrees outside.")  
        }
    })

}

module.exports = forecast