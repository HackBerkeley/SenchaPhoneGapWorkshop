App.views.Reader = Ext.extend(Ext.Panel,{
    iconCls:'favorites',
    title:'Reader',
    fullscreen:true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
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