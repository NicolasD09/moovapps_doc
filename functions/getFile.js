const fs = require("fs");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    const json = await fs.readFileSync("static/test.json", {encoding: "utf-8"});
    data = JSON.parse(json);
    return formattedResponse(200, data);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
