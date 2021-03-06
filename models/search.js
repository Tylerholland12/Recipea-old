// Required Libraries
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Setting up the model 
const PostSchema = new Schema({
    title: { type: String, required: true },
    sourceUrl: { type: String, required: true },
    readyInMinutes: { type: Int16Array, required: true },
    servings: { type: Int16Array, required: true },
    image : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  });
  
  PostSchema
      .pre('findOne', Populate('author'))
      .pre('find', Populate('author'))
  
// Export model
  module.exports = mongoose.model("Post", PostSchema);