const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true
    },
    userCreated: {
      type: Date,
      default: Date.now
    }
});

// Hash passwords before saving to database
UserSchema.pre('validate', function(next) {
    bcrypt.genSalt(10, (err, result) => {
        if (err) return next(err);
        else {
            this.password = bcrypt.hashSync(this.password, result);
            next();
        }
    });
});
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', UserSchema);
