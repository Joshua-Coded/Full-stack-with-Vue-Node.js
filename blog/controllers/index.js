module.exports.controller = (app) => {
    // get home page
    app.get('/', (req, res) => {
	res.send('index', {title: "Express"});
    })
}
