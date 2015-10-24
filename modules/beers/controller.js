var Model = require('./model.js');

var fs = require('fs');

var Controller = {
	create: function(req, res){
		var dados = {
			name: 'Skol',
			description: 'mijo de rato',
			alcohol: 4.5,
			price: 3.0,
			category: 'pilse'
		};
		
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
	
	update: function(req, res){
		var query = {name: /skol/i };

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
		var query = {name: /Skol/i };

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
	}

}
	
module.exports = Controller;