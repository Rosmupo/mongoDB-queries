Tenim una col·lecció d'Objectes Restaurant a la ciutat de Nova York, i necessitem algunes consultes... pots ajudar-nos?


db.restaurants.find({});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1, zipcode:1 _id:0});
db.restaurants.find({borough:"Bronx"});
db.restaurants.find({borough:"Bronx"}).limit(5);
db.restaurants.find( { borough: "Bronx"} ).skip(5).limit(5);
db.restaurants.find({grades.score:{$gt:90}});
db.restaurants.find({grades:{ $elemMatch:{score:{$gt:80, $lt:100}}}});	
db.restaurants.find({address.coord : {$lt : -95.754618}});
db.restaurants.find({$and: [{cuisine: "American "}, {"grades.score": {$not: {$gt: 70}}}, {"address.coord.0": {$gt: -65.754168}}]});
db.restaurants.find( {cuisine: {$ne : "American"}, grades.score:{$gt: 70}, address.coord : {$lt : -65.754168}});
db.restaurants.find({cuisine:{$ne:"American "}, borough:{$ne: "Brooklyn"}, "grades.grade":"A"}).sort( {cuisine:1});
db.restaurants.find({name: /^Will/i},{restaurant_id: 1, name: 1, cuisine: 1 });
db.restaurants.find( {name: /ces$/}, { restaurant_id: 1, name:1, borough:1, cuisine :1, _id:0} );
db.restaurants.find({name: /.*Reg.*/i},{restaurant_id: 1, name: 1, cuisine: 1});
db.restaurants.find({borough:"Bronx", cuisine:"American", cuisine: {$regex: "Chinese"}});
db.restaurants.find({$and: [{borough: "Bronx"}, {$or:[{cuisine: "American "}, {cuisine: "Chinese"}]}]});
db.restaurants.find( {borough: {$in :["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, { restaurant_id: 1, name:1, borough:1, cuisine:1,_id:0});
db.restaurants.find({"grades.score":{$lte:10}},{restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({$or:[{name: /^Wil/}, {cuisine:"Seafood"} ]}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});
db.restaurants.find( {"grades.grade":"A", "grades.score": 11, "grades.date": ISODate("2014-08-11T00:00:00Z") }, {restaurant_id: 1, name:1, grades:1, _id:0} );
db.restaurants.find( {"grades.1.grade":"A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, {restaurant_id: 1, name:1, grades:1, _id:0} );
db.restaurants.find({"address.coord.1": {$gt:42, $lte:52}}, {restaurant_id:1, name:1, address:1, borough:1, _id:0} );
db.restaurants.find().sort({name: 1});
db.restaurants.find().sort({name: -1});
db.restaurants.find().sort({cuisine: 1, borough: -1});
db.restaurants.find({address.street: { $exists : true }});
db.restaurants.find({address.coord: {$type : "double"}});
db.restaurants.find({"grades.score": {$mod: [7,0]}}, {restaurant_id: 1, name: 1, grades: 1, _id:0});
db.restaurants.find({name: { $regex : /.*mon.*/i, } }, { name:1, borough:1, address.coord :1, cuisine :1, _id:0});
db.restaurants.find({name: /^Mad/}, {name:1, borough:1, address.coord :1, cuisine :1, _id:0});

