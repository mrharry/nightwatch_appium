exports.command = function(file, callback) {
    var self = this;
    var imageData;
    var fs = require('fs');

    try {
        var originalData = fs.readFileSync(file);
        var base64Image = new Buffer(originalData, 'binary').toString('base64');
        imageData = 'data:image/jpeg;base64,' + base64Image;
    } catch (err) {
        console.log(err);
        throw "Unable to open file: " + file;
    }

    this.execute(
        function(data) { // execute application specific code
            App.resizePicture(data);
            return true;
        },

        [imageData], // arguments array to be passed

        function(result) {
            if (typeof callback === "function") {
                callback.call(self, result);
            }
        }
    );

    return this;
};
