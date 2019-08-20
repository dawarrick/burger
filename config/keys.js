//console.log('this is loaded');
/*
exports.mysql = {
  host: "localhost",
    port: 3306,// Your port; if not 3306
    user: "root",  // Your username
    password: process.env.password,  // Your password
    database: "burgers_db"
};*/

console.log('env password '+process.env.password)
exports.mysqlp = {password: process.env.password};

