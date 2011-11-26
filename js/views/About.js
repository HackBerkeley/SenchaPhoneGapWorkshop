// just to show integration with maps

var berkeley =  new google.maps.LatLng(37.38107,-122.137499);
// for some reason the map doesn't render if it's centered at berkeley
var map = new Ext.Map({
    mapOptions:{
	center: berkeley
    },
    listeners:{
	maprender: function(c, map){
	    console.log('rendered');
	    var marker = new google.maps.Marker({
		position: berkeley, 
		title:'Berkeley',
		map: map
	    });
	    
	}
    }
});

App.views.About = Ext.extend(Ext.Panel,{
    dockedItems:[{
	xtype:'toolbar',
	title:'About'
    }],
    items:[
	{html:"<p>This app is developed by students at UC Berkeley as a demo for a workshop</p>"},
	map
	
    ],
    styleHtmlContent:true,
    iconCls:'more',
    id:'aboutCard',
    title:'About',
    initComponent: function(){
	App.views.About.superclass.initComponent.apply(this, arguments);
    }
});