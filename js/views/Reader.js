App.views.Reader = Ext.extend(Ext.Panel,{
    fullscreen:true,
    tabBar:{
	dock:'bottom',
	layout:{
	    pack:'center'
	}
    },
    layout: 'card',
    cardSwitchAnimation: 'slide',
    iconCls:'favorites',
    title:'Reader',
    id:'readerCard',
    initComponent: function(){
	Ext.apply(App.views, {
	   //stuff 
	    test: new App.views.Test(),
	    content: new App.views.Content()
	});
	Ext.apply(this, {
	    items:[
		App.views.test,
		App.views.content
	    ]
	});
	App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});