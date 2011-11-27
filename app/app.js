new Ext.Application({
    name: 'App',
    launch:function(){
	this.views.viewport = new App.views.Viewport();
    }
});

App.models.techcrunch = new Ext.regModel("App.models.techcrunch", {
    fields:[{name:"title"},
	    {name:"description",mapping:"encoded"},
	    {name:"image", mapping:"thumbnail"}
	   ] 
});

App.stores.techcrunch = new Ext.data.Store({
    model: "App.models.techcrunch",
    proxy:{
	type:'scripttag',
	url:"http://query.yahooapis.com/v1/public/yql?format=json&q="+encodeURI('select * from feed where url="http://feeds.feedburner.com/TechCrunch/"'),
	reader: new Ext.data.JsonReader({
	    root: 'query.results.item'  
	})
    }
});



