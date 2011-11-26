App.models.TechCrunch = Ext.regModel("App.models.TechCrunch", {
    fields:[{name:"title"},
	    {name:"description",mapping:"encoded"},
	    {name:"image", mapping:"thumbnail"}
	   ] 
});