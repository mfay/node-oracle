const express = require('express');
const app = express();
const oracledb = require('oracledb');

app.get('/Node', async (req, res) => res.send('I <3 GVSU!!'));

app.get('/Node/db', async (req, res) => {
	try {
		let connection = await oracledb.getConnection({
			user: 'SYSTEM',
			password: 'oracle1',
			connectString: 'oracle/XE'
		});

		let results = await connection.execute('SELECT * FROM HR.departments');

		res.send(`I found ${results.rows.length} departments`);
	} catch (err) {
		res.send(err);
	}
})

if (typeof(PhusionPassenger) !== 'undefined') {
	app.listen('passenger');
} else {
	const port = 3000;
	app.listen(port, () => console.log(`Express listening on port ${port}`));
}
