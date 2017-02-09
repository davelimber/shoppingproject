var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongo = require('mongodb-bluebird')
var products = [
    new Product({
        imagePath: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/03/hairy-fluffy-cat-sky-the-ragdoll-31.jpg',
        title: 'Cats!',
        description: 'awesome cats!',
        price: 10
    }),
    new Product({
        imagePath: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/03/hairy-fluffy-cat-sky-the-ragdoll-31.jpg',
        title: 'Dogs!',
        description: 'awesome dogs!',
        price: 10
    })
]

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
