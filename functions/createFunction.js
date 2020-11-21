const { dbname, sq } = require("./sqlite");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    let res;
    let db = new sq.Database(dbname, sq.OPEN_READWRITE, (err) => {
      if (err) throw err;

      console.log("Database opened");
    });

    const data = JSON.parse(event.body);
    console.log(data.name);
    console.log(data.description);
    console.log(data.category);
    console.log(data.code);

    db.run(`
      INSERT INTO function (name, description, category, code) VALUES(?,?,?,?)`,[data.name, data.description, data.category, data.code],
      (err, data) => {
        if (err) console.log(err);;
        console.log(data);
        res = data;
      }
      );
      
      db.close();
      return formattedResponse(200, JSON.parse(res));
  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
