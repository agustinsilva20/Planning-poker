var mysql= require ("mysql");
var util=require ("util");
var pool=mysql.createConnection({
	host:"uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user:"qysddf4gmgfizpv4",
	password:"wk8ubvki1zgunbz0",
	database:"jehjk21m8j7ckf82",
	port:3306});
pool.query = util.promisify(pool.query);
module.exports=pool
