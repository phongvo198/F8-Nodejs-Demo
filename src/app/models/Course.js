const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const autoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    _id:{type: Number},
    name: { type: String, default: 'hahaha' },
    description: { type: String ,maxLength:255},
    image: { type: String},
    slug: { type: String, slug: "name",unique:true },
    videoId: { type: String},
    level: { type: String},
  },{
    _id:false,
    timestamps:true,
  });

  //add plugin
  mongoose.plugin(slug);
  //thư viện thêm theo tuần tự
  CourseSchema.plugin(autoIncrement)
  CourseSchema.plugin(mongooseDelete,{
     overrideMethods: 'all',
     deletedAt : true ,
    });

module.exports =mongoose.model('Course', CourseSchema);