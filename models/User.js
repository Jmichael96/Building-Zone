const bcrypt = require('bcrypt-nodejs');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
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
// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password)
// };

var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;