App.views.Content = Ext.extend(Ext.Panel, {
    dockedItems:[{
	xtype:'toolbar',
	title:'Content',
	items:[
	    {text:'Back',
	     ui:'back',
	     listeners:{
		 'tap': function(){
		     Ext.dispatch({
			 controller:App.controllers.test,
			 action:'index'
		     });
		 }
	     }}
	]
    }],
    styleHtmlContent:true,
    scroll:'vertical',
    tpl:'{cont}',
    initComponent: function(){
	App.views.Content.superclass.initComponent.apply(this,arguments);
    }
});