const GET_FUNCTIONS = `
  query {
    allFunctions {
      data {
        name
        description
        code
        category
      }
    }
  }`;

module.exports = {
  GET_FUNCTIONS
};
