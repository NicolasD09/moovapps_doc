const fs = require("fs");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    let obj = [];

    const res = JSON.parse(event.body);
    console.log(res);

    obj = await JSON.parse(fs.readFileSync("test.json", {
      encoding: "utf-8"
    }));

    obj.push(res);

    await fs.writeFileSync("test.json", JSON.stringify(obj));

    return formattedResponse(200, obj);

  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};