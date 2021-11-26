module.exports = {
  mutipleMongooesToObject: function (mongooseList) {
    return mongooseList.map((mongoose) => mongoose.toObject());
  },
  MongooesToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
