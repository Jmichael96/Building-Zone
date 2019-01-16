var mongoose = require("mongoose");

var Schema = mongoose.Schema;

let ImageSchema = new Schema({
     image: 
        { data: Buffer, 
            contentType: String 
        }
});

// // This creates our model from the above schema, using mongoose's model method
var Image = mongoose.model("Image", ImageSchema);

// Export the User model
module.exports = Image;