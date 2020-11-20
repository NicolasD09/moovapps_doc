require("dotenv").config();
const axios = require("axios");
const { GET_FUNCTIONS } = require("./utils/allQueries");
const formattedResponse = require("./utils/formattedResponse");
const sendQuery = require("./utils/sendQuery");

exports.handler = async event => {
  try {
    const res = await sendQuery(GET_FUNCTIONS);
    const data = res.allFunctions.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
