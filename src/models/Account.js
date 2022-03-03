const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    id: { type: String, unique: true, },
    fullName: { type: String, required: true, maxLength: 50 },
    birth: { type: Date, required: true, maxLength: 30 },
    socialName: { type: String, required: true, maxLength: 50 },
    email: { type: String, required: true, maxLength: 100 },
    password: { type: String, required: true, maxLength: 20 }
},
    { timestamps: true})

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;