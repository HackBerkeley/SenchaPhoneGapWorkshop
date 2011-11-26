App.views.Viewport = Ext.extend(Ext.TabPanel,{
    fullscreen:true,
    tabBar:{
	dock:'bottom',
	layout:{
	    pack:'center'
	}
    },
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function(){
	Ext.apply(App.views, {
	   //stuff 
	    reader: new App.views.Reader(),
	    about: new App.views.About()
	});
	Ext.apply(this, {
	    items:[
		App.views.reader,
		App.views.about
	    ]
	});
	App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});