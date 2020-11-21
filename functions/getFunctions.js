const { dbname, sq } = require("./sqlite");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async event => {
  try {
    let res;
    let db = new sq.Database(dbname, (err) => {
      if (err) throw err;

      console.log("Database opened");
    });

    // db.run(`CREATE TABLE IF NOT EXISTS function(
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   name VARCHAR NOT NULL,
    //   description TEXT NOT NULL,
    //   category VARCHAR NOT NULL,
    //   code BLOB NOT NULL
    // )`, err => {
    //     if (err) console.log(err);
    //     console.log('table created');
    // })

    // db.run(`DROP TABLE IF EXISTS function`, err => {
    //   if (err) console.log(err);
    //   console.log('table deleted');
    // })
  
    db.all('SELECT * FROM function', (err, data) => {
      if (err) console.log(err);
      console.log(data);
      res = data;
    });
    
    db.close();
    return formattedResponse(200, res);

  } catch (err) {
    console.log(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
