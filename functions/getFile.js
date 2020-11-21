const fs = require("fs");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    const json = await JSON.parse(fs.readFileSync("test.json", {encoding: "utf-8"}));
    return formattedResponse(200, json);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
