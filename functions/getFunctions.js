const { db } = require("./firebase");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    db.connect(err => {
      if (err) console.log(err);
      console.log('connecté a la base');
    })


    
    return formattedResponse(200, res);

  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
