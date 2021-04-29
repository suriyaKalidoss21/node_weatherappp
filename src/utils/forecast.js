const request = require('postman-request')

const forecast = (address,callBack) => {
    const url = 'http://api.weatherstack.com/current?access_key=27c33962fc7231eaf98920ba3157c697&query='+address
    request({uri: url, json: true }, (error, response, body) => {
        if (error) {
            callBack('Internet issue', undefined)
        }
        else if (body.error) {
            callBack('Data issue', undefined)
        } else {
            const {temperature,feelslike} = body.current;
            callBack(undefined, 'The current temperature is ' + temperature + ' it feels like ' + feelslike)
        }
    })

}

module.exports = forecast
