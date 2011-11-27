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
	    list: new App.views.List(),
	    content: new App.views.Content()
	});
	Ext.apply(this, {
	    items:[
		App.views.list,
		App.views.content
	    ]
	});
	App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});