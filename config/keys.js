dbPassword =
  "mongodb+srv://varamu:"+`${process.env.PASSWORD}`+"@cluster0.yoljr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword,
};
