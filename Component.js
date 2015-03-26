jQuery.sap.declare("tcs.calculator.Component");

sap.ui.core.UIComponent.extend("tcs.calculator.Component", {
   
   createContent : function() {
       var app = new sap.m.App("app");
       var mainView = new sap.ui.core.mvc.XMLView( {id:"mainView", viewName:"tcs.calculator.costsavingcalculator.main"} );
       app.addPage(mainView);
       var resultView = new sap.ui.core.mvc.XMLView( {id:"resultView", viewName:"tcs.calculator.costsavingcalculator.results"} );
       app.addPage(resultView);
       
       //declare a global variable for the app
       sap.ui.getCore().Global = new Object();
       sap.ui.getCore().Global.app = app;
       
       return app;
           
   },
   
  
   
});
   