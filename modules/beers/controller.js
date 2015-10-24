var Model = require('./model.js');

var fs = require('fs');

var Controller = {
	create: function(req, res){
		var dados = req.boby;
		
		var model = new Model(dados);

		model.save(function (err, data){
			if (err){
				console.log('erro',err);
				msg = err;
			} else {	
				console.log('Inserida', data);
				msg =  data;
			}
			res.json(msg);
		});
	
	},
	
	find: function(req, res){
		var query ={};

		Model.find(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg =  err;
			} else {
				console.log('Listagem', data);
				msg = data;
			}
			res.json(msg);
		});
	
	},
	
	get: function(req, res){
		var query = {_id: req.params.id };

		Model.findOne(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg =  err;
			} else {
				console.log('Listagem', data);
				msg = data;
			}
			res.json(msg);
		});
	
	},
	
	
	update: function(req, res){
		var query = {_id: req.params.id };
		
		var mod = req.boby;

		var mod = {
			name: 'Brahma',
			alcohol: 4,
			price: 6,
			category: 'pilse'
		};

		var optional = {
			upsert: false,
			multi: true
		};

		Model.update(query, mod, optional, function (err, data){
			if (err){
				console.log('erro', err);
				msg = err;
			} else {
				console.log('Cervejas Atualizadas com sucesso: ', data);
				msg = data;
			}
			res.json(msg);
		});
			
	},
	
	delete: function(req, res){
		var query = {_id: req.params.id };

		Model.remove(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg = err;
			} else {
				console.log('Cervejas deletadas com sucesso: ', data.result);
				msg = data;
			}
			res.json(msg);

		});
	},
	
	list: function(req, res){
		var query ={};

		Model.find(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg =  err;
			} else {
				console.log('Listagem', data);
				msg = data;
			}
			res.render('list', { title: 'Listagem de Cervejas', beers: data });
		});
	
	},
 
 getid: function(req, res){
		var query = {_id: req.params.id };

		Model.findOne(query, function (err, data){
			if (err){
				console.log('erro', err);
				msg =  err;
			} else {
				console.log('Listagem', data);
				msg = data;
			}
			res.render('beer', { title: 'Listagem de Cervejas', beer: data });
		});
	
	},
	

}
	
module.exports = Controller;