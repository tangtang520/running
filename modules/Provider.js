/**
 * Created by JetBrains WebStorm.
 * User: wangjun
 * Date: 13-7-31
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
require('./Config');
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
var Provider = function () {
};
Provider.prototype.db = new Db(global.mongodbDB, new Server(global.mongodbHost, global.mongodbPort, {auto_reconnect: true, poolSize: 5}), {w: 0, native_parser: false});
(function () {
    Provider.prototype.db.open(function(err, db) {
        if (err) {
           throw err;
        }
        Provider.prototype.db = db;
    });
})();
exports.Provider = Provider;