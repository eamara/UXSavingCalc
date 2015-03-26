sap.ui.controller("tcs.calculator.costsavingcalculator.results", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf costsavingcalculator.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf costsavingcalculator.main
*/
	/*onBeforeRendering: function() {
		
	},*/

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf costsavingcalculator.main
*/
//	onAfterRendering: function() {
//
//	},
	

//handle going back to the main view
backToMain: function(){
	/*var app= sap.ui.getCore().Global.app;
	debugger;*/
	sap.ui.getCore().Global.app.to("mainView", "flip");
	
	
},

updateFields: function(btnId){
	
						if(btnId == 1){
							//add the values to the Persona Panel
							this.byId("resultView--NumUsersIdPR").setValue("25");
							this.byId("resultView--fUseIdPR").setValue("10");
							this.byId("resultView--NumClicksIdPR").setValue("1");
							this.byId("resultView--totalClicksIdPR").setValue("250");
							//this.byId("resultView--savingPercentageP").setText("66%");
							this.byId("resultView--clicksImP").setSrc("images/cd.PNG");
							
							//add the values to the Fiori Panel
							this.byId("resultView--NumUsersIdFR").setValue("25");
							this.byId("resultView--fUserIdFR").setValue("10");
							this.byId("resultView--NumClicksIdFR").setValue("1");
							this.byId("resultView--totalcliksIdFR").setValue("250");
							//this.byId("resultView--savingPercentageF").setText("66%");
							this.byId("resultView--clicksImF").setSrc("images/cd.PNG");
						}
						
						else if(btnId == 2){
							
							//add the values to the Persona Panel
							this.byId("resultView--NumUsersIdPR").setValue("25");
							this.byId("resultView--fUseIdPR").setValue("34");
							this.byId("resultView--NumClicksIdPR").setValue("2");
							this.byId("resultView--totalClicksIdPR").setValue("1700");
							//this.byId("resultView--savingPercentageP").setText("50%");
							this.byId("resultView--clicksImP").setSrc("images/cso.PNG");
							
							//add the values to the Fiori Panel
							this.byId("resultView--NumUsersIdFR").setValue("25");
							this.byId("resultView--fUserIdFR").setValue("34");
							this.byId("resultView--NumClicksIdFR").setValue("2");
							this.byId("resultView--totalcliksIdFR").setValue("1700");
							//this.byId("resultView--savingPercentageF").setText("50%");
							this.byId("resultView--clicksImF").setSrc("images/cso.PNG");
						}
						
						else if(btnId == 3){
							//add the values to the Persona Panel
							this.byId("resultView--NumUsersIdPR").setValue("25");
							this.byId("resultView--fUseIdPR").setValue("17");
							this.byId("resultView--NumClicksIdPR").setValue("1");
							this.byId("resultView--totalClicksIdPR").setValue("425");
							//this.byId("resultView--savingPercentageP").setText("50%");
							this.byId("resultView--clicksImP").setSrc("images/chso.PNG");
							
							//add the values to the Fiori Panel
							this.byId("resultView--NumUsersIdFR").setValue("25");
							this.byId("resultView--fUserIdFR").setValue("17");
							this.byId("resultView--NumClicksIdFR").setValue("1");
							this.byId("resultView--totalcliksIdFR").setValue("425");
							//this.byId("resultView--savingPercentageP").setText("50%");
							this.byId("resultView--clicksImF").setSrc("images/chso.PNG");
						}
	
	
},

downloadPDF: function(){
	$(document).ready(function() {
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#cmd').click(function () {
        doc.fromHTML($('#target').html(), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });  
});
},

updateCharts:  function(oEvent) {
    /*var oVizFrame = this.getView().byId("resultView--ProdChart");
   debugger;
        var oModel = new sap.ui.model.json.JSONModel("json/charts.json");
        
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: "Item Category",
                value: "{Item Category}"
            },{
                name: 'City', 
                value: '{City}' 
            }],
            measures: [
                {
                    name: 'Units Sold', 
                    value: '{Units Sold}' 
                }
            ],
            data: {
                path: "/book"
            }
         });

    oVizFrame.setDataset(oDataset);
    oVizFrame.setModel(oModel);

    oVizFrame.setVizProperties({
             valueAxis : {
              label : {
                    formatString : 'u'
              }
          },
        plotArea : {
          dataLabel : {visible : true}
        },
        legend : {
          title: {visible : false}
        },
        
            title: {
                visible: true,
                text: 'Units Sold by City and Item Category'
            }
    });
    
        var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "primaryValues",
            'type' : "Measure",
            'values' : ["Units Sold"]
        }), feedAxisLabels = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "axisLabels",
            'type' : "Dimension",
            'values' : ["Item Category"]
        }), feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
            'uid' : "regionColor",
            'type' : "Dimension",
            'values' : ["City"]
        });
    oVizFrame.addFeed(feedPrimaryValues);
    oVizFrame.addFeed(feedAxisLabels);
        oVizFrame.addFeed(feedColor); */
  
  }

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf costsavingcalculator.main
*/
//	onExit: function() {
//
//	}

});