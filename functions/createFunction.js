require("dotenv").config();
const axios = require("axios");
const { CREATE_FUNCTION } = require("./utils/allQueries");
const formattedResponse = require("./utils/formattedResponse");
const sendQuery = require("./utils/sendQuery");

exports.handler = async event => {
  const { name, description, code, category } = JSON.parse(event.body);
  const variables = { name, description, code, category };

  try {
    const res = await sendQuery(CREATE_FUNCTION, variables);
    const data = res.allFunctions.data;
    return formattedResponse(200, data);
    
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
