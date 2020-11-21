const db = 'function.db'
const path = require("path");
const dbname = path.resolve(__dirname, db)
const sq = require('sqlite3')

module.exports = {
  dbname,
  sq
}
