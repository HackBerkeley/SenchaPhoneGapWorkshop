App.controllers.content = new Ext.Controller({
    index: function(options){
	if (options && options.content){
	    App.views.content.update({cont: options.content});
	    console.log(options.content);
	    App.views.reader.setActiveItem(App.views.content);
	}
	
    }
})