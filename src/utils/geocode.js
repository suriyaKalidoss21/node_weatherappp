const request = require('postman-request');


const geocode = (address, callBack) => {
    const geoCodeForwardUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic3VyaXlhZGV2IiwiYSI6ImNrbjl4cGxrNjEyMGoycmxuZ2p4cTkwbnUifQ.Fq5UCe2mVOoEKGjiU51ILw';
    request({ uri:geoCodeForwardUrl, json: true }, (error, response, body) => {
        if (error) {
            console.log(error)
            callBack('Internet issue', undefined)
        }
        else if (body.error) {
            callBack('Data issue', undefined)
        } else {
            const coordinates = body.features[0].center;
            debugger
            const data = {
                'latitude': coordinates[1],
                'longitude': coordinates[0]
            }
            callBack(undefined, data)
        }
    })
}

module.exports = geocode
