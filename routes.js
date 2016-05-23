module.exports = function (app) {

	app.get("/", function(req, res) {
		res.send("Hello World");
	});
	
	app.get("/long", function(req, res) {
		var time = process.hrtime();
		for (var j = 0; j < 100; j++) {
			var acc = '';
			for (var i = 0; i < 10000000; i++) {
				acc += 'A ';
				//res.write('A ');
			}
		}
		var diff = process.hrtime(time);
		res.send(/*acc + */"Counted to 1,000,000,000 in " + diff[0] + "." + ("" + (1e3 + Math.round(diff[1] / 1e6))).substring(1));
		//res.write("Counted to 1,000,000 ...");
		//res.end();
	});

};

