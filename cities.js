const { 
    SAN_FRANCISCO,
    CHARLOTTE,
    NYC
 } = require('./zipcodes.js');

module.exports = {
    CITIES: [
             {
                "city": "san_francisco",
                "zip_codes": SAN_FRANCISCO,
                "bar_file": "san_francisco.js"
            },
            {
                "city": "charlotte",
                "zip_codes": CHARLOTTE,
                "bar_file": "charlotte.js"
            },
            {
                "city": "nyc",
                "zip_codes": NYC,
                "bar_file": "nyc.js"
            }
    ]

}