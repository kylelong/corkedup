const { 
    SAN_FRANCISCO,
    CHARLOTTE,
    NYC,
    MONTCLAIR_CA
 } = require('./zipcodes.js');

module.exports = {
    CITIES: [
             {
                "city": "san_francisco",
                "zip_codes": SAN_FRANCISCO,
                "bar_file": "san_francisco_ca.js"
            },
            {
                "city": "montclair_ca",
                "zip_codes": MONTCLAIR_CA,
                "bar_file": "montclair_ca.js"
            }
    ]

}