var db = require('./db');

module.exports = {
    getById: function (status, callback) {
        var sql = "select * from login where status='" + status + "'";
        db.getResult(sql, function (result) {
            callback(result);
        });
    },
    checkEmail: function (email, callback) {
        var sql = "select email from login where email='" + email + "'";
        db.getResult(sql, function (result) {
            if (result == "") {
                callback(true);
            } else {
                callback(false);
            }

        });
    },
    getAllMovies: function (callback) {
        var sql = "select * from content where category='" + "Movie" + "'";
        db.getResult(sql, function (results) {
            callback(results);
        });
    },
    getAllSeries: function (callback) {
        var sql = "select * from content where category='" + "Webseries" + "'";
        db.getResult(sql, function (results) {
            callback(results);
        });
    },
    getAllRequest: function (callback) {
        var sql = "select * from request";
        db.getResult(sql, function (results) {
            callback(results);
        });
    },
     getContent: function (callback) {
         var sql = "select * from content";
         db.getResult(sql, function (results) {
             callback(results);
         });
     },
      getProfile: function (email,callback) {
          var sql = "select * from register where email='" + email + "'";
          db.getResult(sql, function (results) {
              callback(results);
          });
      },
    login: function (user, callback) {

        var sql = "select * from login where email='" + user.email + "' and password='" + user.password + "'";
        db.getResult(sql, function (results) {

            if (results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    register: function (user, callback) {
        var sql = "INSERT INTO register(id,name,email,password) VALUES('','" + user.username + "','" + user.email + "','" + user.password + "')";
        db.execute(sql, function (status) {
            var sql2 = "INSERT INTO login(id,email,password,status) VALUES('','" + user.email + "','" + user.password + "','" + user.status + "')";
            db.execute(sql2, function (status) {
                callback(status);
            });
        });
    },
    addContent: function (content, callback) {
        console.log(content.dwnldlink+"From models");
        var sql = "INSERT INTO content(id,category,subcategory,name,dwnldlink,releasedate) VALUES('','" + content.category + "','" + content.subcategory + "','" + content.name + "','" + content.dwnldlink + "','" + content.releasedate + "')";
        db.execute(sql, function (status) {
           if(status){
callback(status);
           }
            else{
                throw err;
            }
        });
    },
    request: function (content, callback) {
        var sql = "INSERT INTO request(id,category,subcategory,name) VALUES('','" + content.category + "','" + content.subcategory + "','" + content.name + "')";
        db.execute(sql, function (status) {

            callback(status);
        });
    },
    getStatusByEmail: function (data, callback) {
        var sql = "select * from login where email='" + data.email + "'";
        db.getResult(sql, function (result, err) {
            if (result) {

                return callback(result);
            } else {
                callback(err);
            }
        });
    },
    update: function (user, callback) {
        var sql = "update user set username='" + user.username + "', password='" + user.password + "' where id=" + user.id;
        db.execute(sql, function (status) {
            callback(status);
        });
    },
     updateProfile: function (user, callback) {
         var sql = "update register set name='" + user.name + "' where id='" + user.id + "'";
         db.execute(sql, function (status) {
             callback(status);
         });
     },
    deleteModerator: function (id, callback) {
        var sql = "delete from login where id='" + id + "'";
        db.execute(sql, function (status) {
            callback(status);
        });
    },
    deleteContent: function (id, callback) {
        var sql = "delete from content where id='" + id + "'";
        db.execute(sql, function (status) {
            callback(status);
        });
    }
}