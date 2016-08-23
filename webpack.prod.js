var fs = require('fs');

exports.folder = function(path) {
    var buildPath = path;
    var folder_exists = fs.existsSync(buildPath);
    if(folder_exists == true) {
        var dirList = fs.readdirSync(buildPath);
        dirList.forEach(function(fileName) {
            fs.unlinkSync(buildPath + fileName);
        });

        console.log('clearing ' + buildPath+ "folder");
    } else {
        console.log("folder does not exist");
    }
};

var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.loaders = function() {
    var SOURCE_MAP = true;
    SOURCE_MAP ? 'source-map' : false;

    function generateExtractLoaders (loaders) {
        return loaders.map(function(loader) {
            return loader + '-loader' + (SOURCE_MAP ? '?source-map' : '')
        }).join('!')
    }

    return {
        css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
        sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass']))
    }
}