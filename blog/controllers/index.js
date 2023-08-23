module.exports.controller = (app) => {
    // get home page
    app.get('/', (req, res) => {
	res.render('index', {title: "Express"});
    })
}
