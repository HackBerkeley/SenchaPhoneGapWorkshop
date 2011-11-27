App.views.About = Ext.extend(Ext.Panel,{
    iconCls:'more',
    title:'About',
    dockedItems:[{
	xtype:'toolbar',
	title:'About'
    }],
    items:[
	{html:"<p>This app is developed by students at UC Berkeley as a demo for a workshop</p>"},
	{xtype:'map'}
	
    ],
    styleHtmlContent:true,
    initComponent: function(){
	App.views.About.superclass.initComponent.apply(this, arguments);
    }
});