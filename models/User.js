const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
})
// UserSchema.pre('save', async (next) => {
//     const user = this;
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// });

UserSchema.methods.isValidPassword = (password) => {
    // const user = this;
    const compare = bcrypt.compare(password, this.password, (err, res) => {
        if (err) console.log(err)
        else return compare;
    });

}
const User = mongoose.model('user', UserSchema)

module.exports = User;