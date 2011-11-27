App.views.List = Ext.extend(Ext.Panel, {
   
    dockedItems: [{
	xtype: 'toolbar',
	title:'TechCrunch'
    }],
    layout:'fit',
    items:[
	{
	    xtype:'list',
	    itemTpl: '<span class="news-item"><img src="{image.url}" /><p>{title}</p></span>',
	    store: App.stores.techcrunch,
	    onItemDisclosure: function(record){
		Ext.dispatch({
		    controller:App.controllers.content,
		    action:'index',
		    content: record.data.description
		});
	    }
	}
    ],
    iconCls: 'favorites',
    initComponent:function(){
	App.stores.techcrunch.load();
	App.views.List.superclass.initComponent.apply(this, arguments);
    }
});






