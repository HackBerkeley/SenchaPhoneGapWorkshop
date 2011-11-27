App.stores.techcrunch = new Ext.data.Store({
    model: "App.models.TechCrunch",
    proxy:{
	type:'scripttag',
	url:"http://query.yahooapis.com/v1/public/yql?format=json&q="+encodeURI('select * from feed where url="http://feeds.feedburner.com/TechCrunch/"'),
	reader: new Ext.data.JsonReader({
	    root: 'query.results.item'  
	})
    }
});

