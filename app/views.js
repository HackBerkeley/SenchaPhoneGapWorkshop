App.views.Viewport = Ext.extend(Ext.TabPanel,{
    fullscreen:true,
    tabBar:{
	dock:'bottom',
	layout:{
	    pack:'center'
	}
    },
    cardSwitchAnimation: 'slide',
    initComponent: function(){
	this.items = [
	    App.views.reader,
	    App.views.about
	];

	App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

App.views.Reader = Ext.extend(Ext.Panel,{
    title:'Reader',
    iconCls:'favorites',
    cardSwitchAnimation: 'slide',
    initComponent: function(){
	this.items = [
	    App.views.list,
	    App.views.content
	];

	App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

App.views.About = Ext.extend(Ext.Panel,{
    dockedItems:[
	{
	    xtype:'toolbar',
	    title:'About'
	}
    ],
    items:[
	{html:"<p>This app is developed by students at UC Berkeley as a demo for a workshop</p>"},
	{xtype:'map'}
    ],
    iconCls:'more',
    title:'About',
    styleHtmlContent: true,
    initComponent: function(){
	App.views.About.superclass.initComponent.apply(this, arguments);
    }
});

App.views.Content = Ext.extend(Ext.Panel, {
    dockedItems:[{
	xtype:'toolbar',
	title:'Content',
	items:[
	    {
		xtype:'button',
		text:'Back',
		ui:'back',
		listeners:{
		    'tap': function(){
			App.views.reader.setActiveItem(App.views.list);
		    }
		}}
	]
    }],
    scroll:'vertical',
    styleHtmlContent:true,
    tpl:'{cont}',
    initComponent: function(){
	App.views.Content.superclass.initComponent.apply(this,arguments);
    }
});

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
		App.views.content.update({
		    cont: record.data.description
		});
		App.views.reader.setActiveItem(App.views.content);
	    }
	}
    ],
    initComponent:function(){
	App.stores.techcrunch.load();
	App.views.List.superclass.initComponent.apply(this, arguments);
    }
});

App.views.list = new App.views.List();
App.views.content = new App.views.Content();
App.views.reader = new App.views.Reader();
App.views.about = new App.views.About();


