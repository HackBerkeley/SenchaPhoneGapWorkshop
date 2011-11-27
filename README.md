[H@B "Mobile apps with Sencha Touch / PhoneGap"](https://www.facebook.com/events/289875327701276/)
=================================================
 

Setting up
----------
### Sencha Touch
Include these in the `head` tags of your html file:

    <script src="http://cdn.sencha.io/touch/1.1.0/sencha-touch.js"></script>
    <link href="http://cdn.sencha.io/touch/1.1.0/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />

###PhoneGap (optional)
PhoneGap creates a wrapper around your web app to make it into a native application. 

It also provides access to native APIs (accelerometer, camera and all those cool shit) through javascript, though we won't be covering these in this session.

Follow [these instructions](http://phonegap.com/start/#android) to set up the Android SDK and PhoneGap.

Sencha Touch API
----------------
###Creating an app
	 new Ext.Application({
	     name: 'NameOfYourApp',
	     launch: function(){
	     	     // usually a function to setup the viewport of the application
	     }
	 })

This automatically creates the namespaces `NameOfYourApp`, `NameOfYourApp.views`, `NameOfYourApp.stores`,`NameOfYourApp.models`, `NameOfYourApp.controllers`. 


### Data models
    Ext.regModel('ModelName',{
	fields:[
		{name:'FieldName'}, // optional mapping:'MapToThisFieldInDataSource'
	]
    })

### Stores
Maintains a local cache of Model objects. Specifies how data is loaded and processed.

    var stores = new Ext.data.Store({
    	model: 'ModelName',
	proxy:{
		type: 'scripttag' // this just means JSONP
		url: 'http://www.example.com',
		reader:{
			type:'json'
		}
	}
    })

### UI Components


Resources
----------
[Sencha Docs](http://docs.sencha.com/touch/1-1/)


*Refer to the [MVC branch](https://github.com/jmwong/sencha-touch-workshop/tree/MVC) for a more organized directory structure.




