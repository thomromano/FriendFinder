var path = require('path');

module.exports = function(app) {
    //home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
    //survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });
};