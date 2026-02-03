const mongoose = require('mongoose')

const foodPartnerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    contactName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    },
    password: {
        type: String,
        require: true
    }
}
)

const foodPartnerModel = mongoose.model('foodpartner', foodPartnerSchema)

module.exports = foodPartnerModel