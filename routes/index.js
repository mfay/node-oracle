const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/db', async (req, res, next) => {
	let connection = await oracledb.getConnection({
		user: 'system',
		password: 'oracle',
		connectString: 'oracle/XE'
	});

	let results = await connection.execute(
		'select * from hr.countries order by country_name',
		[],
		{
			outFormat: oracledb.OBJECT
		}
	);

	res.render('departments', { title: 'Countries', results: results.rows });
});

module.exports = router;
