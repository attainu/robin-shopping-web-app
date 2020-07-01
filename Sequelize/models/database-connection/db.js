const Sequelize = require("sequelize");
// const dotenv = require('dotenv');
// dotenv.config();
// const { POSTGRES_URI, POSTGRES_PASSWORD } = process.env;

// console.log("uri : " + POSTGRES_URI +"\n"+ "pass : ",  POSTGRES_PASSWORD  +"\n")

// const sequelize = new Sequelize(
//   POSTGRES_URI.replace("<password>", POSTGRES_PASSWORD)
// );

// const sequelize = new Sequelize('', 'username', 'password', {
//   host: 'localhost',
//   dialect:'postgres'
// })
const sequelize = new Sequelize('postgres://postgres:9308@localhost:5432/my_project_data')

sequelize.sync();

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
